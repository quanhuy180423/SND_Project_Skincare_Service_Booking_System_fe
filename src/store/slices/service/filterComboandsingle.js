import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Fetch Single Services từ API
export const fetchSingleServices = createAsyncThunk(
  "services/fetchSingleServices",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8555/api/service/single/");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched Single Services:", data);

      return data.data;
    } catch (error) {
      console.error("Fetch Error:", error);
      return rejectWithValue(error.message);
    }
  }
);

// Fetch Combo Services từ API
export const fetchComboServices = createAsyncThunk(
  "services/fetchComboServices",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch("http://localhost:8555/api/service/combo/");
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const data = await response.json();
      console.log("Fetched Combo Services:", data);

      return data.data;
    } catch (error) {
      console.error("Fetch Error:", error);
      return rejectWithValue(error.message);
    }
  }
);

// Tạo Slice
const filterServices = createSlice({
  name: "filterServices",
  initialState: {
    singleServices: [], // Dữ liệu dịch vụ Single
    comboServices: [],  // Dữ liệu dịch vụ Combo
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch Single Services
      .addCase(fetchSingleServices.pending, (state) => {
        state.loading = true;
        console.log("Fetching Single Services...");
      })
      .addCase(fetchSingleServices.fulfilled, (state, action) => {
        state.loading = false;
        state.singleServices = action.payload;
        console.log("Fetched Single Services:", action.payload);
      })
      .addCase(fetchSingleServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("Error fetching Single Services:", action.payload);
      })

      // Fetch Combo Services
      .addCase(fetchComboServices.pending, (state) => {
        state.loading = true;
        console.log("Fetching Combo Services...");
      })
      .addCase(fetchComboServices.fulfilled, (state, action) => {
        state.loading = false;
        state.comboServices = action.payload;
        console.log("Fetched Combo Services:", action.payload);
      })
      .addCase(fetchComboServices.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        console.error("Error fetching Combo Services:", action.payload);
      });
  },
});

export default filterServices.reducer;
