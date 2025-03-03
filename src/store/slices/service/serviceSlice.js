
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Thunk actions
export const fetchServices = createAsyncThunk(
  'services/fetchServices',
  async () => {
    const response = await fetch('http://localhost:8555/api/admin/service/');
    const data = await response.json();
    return data.data;
  }
);

export const createService = createAsyncThunk(
  'services/createService',
  async (serviceData) => {
    const response = await fetch('http://localhost:8555/api/service/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(serviceData),
    });
    const data = await response.json();
    return data;
  }
);

// Khi bạn có API, thêm các action này:
export const updateService = createAsyncThunk(
  'services/updateService',
  async ({ id, data }) => {
    const response = await fetch(`http://localhost:8555/api/service/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();
    return result;
  }
);

export const deleteService = createAsyncThunk(
  'services/deleteService', 
  async (id) => {
    const response = await fetch(`http://localhost:8555/api/service/delete/${id}`, {
      method: 'PUT',  // ✅ Đúng theo API của bạn
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ isDeleted: true }) // Tuỳ theo yêu cầu API, có thể cần
    });

    if (!response.ok) {
      throw new Error('Failed to delete service');
    }

    return id;
  }
);




const serviceSlice = createSlice({
  name: 'services',
  initialState: {
    items: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch services
      .addCase(fetchServices.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchServices.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Create service
      .addCase(createService.fulfilled, (state, action) => {
        console.log("Thêm dịch vụ:", action.payload);
        state.items.push(action.payload);
      })
      // Update service
      .addCase(updateService.fulfilled, (state, action) => {
        const index = state.items.findIndex(item => item.id === action.payload.id);
        if (index !== -1) {
            console.log("Thêm dịch vụ:", action.payload);
          state.items[index] = action.payload;
        }
      })
      // Delete service
      .addCase(deleteService.fulfilled, (state, action) => {
        console.log("Thêm dịch vụ:", action.payload);
        state.items = state.items.filter(item => item.id !== action.payload);
      });
  },
});

export default serviceSlice.reducer;