import { Button, Form, Input, Modal, Select, Table } from "antd";
import "./index.scss";
import { useState, useEffect } from "react";
import { useForm } from "antd/es/form/Form";
import { PlusOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from 'react-redux';
import Multiselect from "react-widgets/Multiselect";
import "react-widgets/styles.css";
import {
  fetchServices,
  createService,
  updateService,
  deleteService
} from '../../store/slices/service/serviceSlice';
import { fetchSingleServices , fetchComboServices} from "../../store/slices/service/filterComboandsingle";


const ServicePage = () => {
  const [open, setOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [form] = useForm();
  const [selectedService, setSelectedService] = useState(null);
  const [bang, setBang] = useState([]);
  const [activeTab, setActiveTab] = useState("staff"); 
  const [selectShow, SetSelectShow] = useState([]);
  const dispatch = useDispatch();
  const { items: services, loading } = useSelector(state => state.services);

  const [category, setCategory] = useState("single"); // Single hoặc Combo
  const [selectedSubServices, setSelectedSubServices] = useState([]); // Lưu danh sách sub services đã chọn


  const { singleServices, comboServices } = useSelector((state) => state.filterServices);
  const [openUpdate, setOpenUpdate] = useState(false);
  const [updateForm] = useForm();

  // fecth all 
  useEffect(() => {

    console.log("Fetching services...");
    dispatch(fetchServices());

  }, [dispatch]);


  useEffect(() => {
    if (services.length > 0) {
      SetSelectShow(services); // Khi có dữ liệu từ Redux, cập nhật danh sách hiển thị
    }
  }, [services]);

  // fetch single and combo
  useEffect(() => {
    dispatch(fetchSingleServices());
    dispatch(fetchComboServices());
  }, []);


  // Thêm hàm mở modal update
  const handleOpenUpdateModal = (service) => {
    setSelectedService(service);
    setOpenUpdate(true);
    // Điền dữ liệu vào form
    updateForm.setFieldsValue({
      serviceName: service.serviceName,
      description: service.description,
      price: service.price,
      duration: service.duration,
      category: service.category,
      available: service.available,
      image: service.image,
    });
  };



  //update
  const handleUpdateService = async (values) => {
    console.log("Updating service:", selectedService?._id, values);

    if (!selectedService?._id) {
      message.error("Service ID is missing!");
      return;
    }

    try {
      await dispatch(updateService({
        id: selectedService._id,
        data: {
          ...values,
          price: parseInt(values.price),
          duration: parseInt(values.duration),
        }
      })).unwrap();
      message.success("Service updated successfully!");

    } catch (error) {
      console.error("Update error:", error);
      message.error("Failed to update service");
    } finally {
      dispatch(fetchServices());
      setOpenUpdate(false);
      updateForm.resetFields();
      setOpenDetails(false);
    }
  };



  // Sửa lại hàm delete
  const handleDeleteService = async (record) => {
    console.log("logggg", record)
    try {
      await dispatch(deleteService(record._id)).unwrap();
      dispatch(fetchServices());
      console.log("logggg", record._id)
      message.success('Service deleted successfully!');
    } catch (error) {
      message.error('Failed to delete service');
    }
  };
  //create
  const handleCreateService = async (values) => {
    const serviceData = {
      serviceName: values.serviceName,
      description: values.description || "",
      price: parseInt(values.price, 10),
      duration: parseInt(values.duration, 10),
      category: values.category,
      subServices: values.category === "combo" ? bang : [],
      available: values.available,
      image: values.image || "",
    };

    try {
      await dispatch(createService(serviceData)).unwrap();
      message.success('Service created successfully!');




    } catch (error) {
      message.error('Failed to create service');

    } finally {
      dispatch(fetchServices());
      setOpenUpdate(false);
      updateForm.resetFields();
      handleCloseModal();
      form.resetFields();
    }
  };



  const handleOpenModalCreate = () => {
    setOpen(true);
  };

  const handleCloseDetailModal = () => {
    setOpenDetails(false);
  };

  const handleOpenDetailModal = (service) => {
    setSelectedService(service);
    setOpenDetails(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    setSelectedService(null);
  };


  const handleChosesSingle = () => {
    SetSelectShow(singleServices)
  }
  const handleChosesAll = () => {
    SetSelectShow(services)
  }
  const handleChosesCombo = () => {
    SetSelectShow(comboServices)
  }


  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
      render: (_, __, index) => index + 1
    },
    {
      title: "Service Name",
      dataIndex: "serviceName",
      key: "serviceName",
    },

    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Duration",
      dataIndex: "duration",
      key: "duration",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Available",
      dataIndex: "available",
      key: "available",
      render: (available) => available ? "còn" : "Không"
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="action-buttons">
          <Button className="detail-btn" onClick={() => handleOpenDetailModal(record)}>
            📄 Detail
          </Button>

          <Button
            className="hide-btn"
            onClick={() => {
              Modal.confirm({
                title: 'Bạn muốn xóa dịch vụ này chứ?',
                okText: 'Yes',
                okType: 'danger',
                cancelText: 'No',
                onOk() {
                  handleDeleteService(record);
                },
              });
            }}
          >
            Delete
          </Button>
        </div>

      ),
    },
  ];

  return (
    <div className="dashboard-container">
      <h2 className="table-title">Service</h2>

      <div className="table-header">
        <Input placeholder=" Search..." className="search-input" />
        <Button className="search-button">🔎 Search</Button>
      </div>
      <div>
        <div className="create-button">
          <div>
            <Button onClick={handleOpenModalCreate}>
              <PlusOutlined />
              Create
            </Button>
          </div>
          <div className="btn-avail">
            <Button
              onClick={handleChosesAll}
            >
              All
            </Button>
            <Button
              onClick={handleChosesSingle}
            >
              Single
            </Button>

            <Button
            onClick={handleChosesCombo}
            >
              Combo
            </Button>

          </div>

        </div>
      </div>

      <Table columns={columns} dataSource={selectShow} loading={loading} />

      <Modal open={openDetails} onCancel={handleCloseDetailModal} footer={null} title="Service Detail">
        {selectedService && (
          <div className="service-detail">
            <h3>{selectedService.serviceName}</h3>
            <p>
              <strong>Description:</strong> {selectedService.description}
            </p>
            <p>
              <strong>Price:</strong> {selectedService.price}
            </p>
            <p>
              <strong>Duration:</strong> {selectedService.duration}
            </p>
            <p>
              <strong>Category:</strong> {selectedService.category}
            </p>
            {/* sub service */}
            <p>
              <strong>sub services:</strong>
              {selectedService.subServices.map(subServiceId => {
                const service = services.find(s => s._id === subServiceId);
                return service ? service.serviceName : subServiceId;
              }).join(", ")}
            </p>
            {selectedService.image && (
              <img src={selectedService.image} alt={selectedService.serviceName} style={{ width: "100%" }} />
            )}

            <div className="action-buttons2">
              <Button
                className="update-btn"
                loading={loading}
                onClick={() => handleOpenUpdateModal(selectedService)}
              >
                Update
              </Button>
            </div>
          </div>
        )}
      </Modal>

      {/* update modall */}
      <Modal title="Update service" open={openUpdate} onCancel={() => setOpenUpdate(false)} footer={null}>
        <Form labelCol={{ span: 24 }} form={updateForm} onFinish={handleUpdateService}>
          <Form.Item
            label="Service name"
            name="serviceName"
            rules={[{ required: true, message: 'Name must not be blank!!' }]}
          >
            <Input placeholder="Enter service name" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Description must not be blank!!' }]}
          >
            <Input placeholder="Enter service description" />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: 'Price must not be blank!!' }]}
          >
            <Input type="number" placeholder="Enter price" />
          </Form.Item>

          <Form.Item
            label="Duration (minutes)"
            name="duration"
            rules={[{ required: true, message: 'Duration must not be blank!!' }]}
          >
            <Input type="number" placeholder="Enter duration in minutes" />
          </Form.Item>

          <Form.Item
            label="Upload image URL"
            name="image"
            rules={[{ required: true, message: 'Image must not be blank!!' }]}
          >
            <Input placeholder="Upload image URL" />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: 'Category must not be blank!!' }]}
          >
            <Select onChange={(value) => setCategory(value)} value={category}>
              <Option value="single">Single</Option>
              <Option value="combo">Combo</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Status"
            name="available"
            rules={[{ required: true, message: 'Status must not be blank!!' }]}
          >
            <Select>
              <Select.Option value={true}>Available</Select.Option>
              <Select.Option value={false}>Not Available</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item>
            <Button key="cancel" className="cancel-btn" onClick={() => setOpenUpdate(false)}>
              ❌ Cancel
            </Button>
            <Button
              key="submit"
              htmlType="submit"
              className="submit-btn"
              type="primary"
              loading={loading}
            >
              ✅ Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      {/* create modal */}
      <Modal title="Create service" footer={null} onCancel={handleCloseModal} open={open} >
        <Form labelCol={{ span: 24 }} form={form} onFinish={handleCreateService}>
          <Form.Item
            label="Service name"
            name="serviceName"
            rules={[{ required: true, message: 'Name must not be blank!!' }]}
          >
            <Input placeholder="Enter service name" />
          </Form.Item>

          <Form.Item
            label="Description"
            name="description"
            rules={[{ required: true, message: 'Description must not be blank!!' }]}
          >
            <Input placeholder="Enter service description" />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: 'Price must not be blank!!' }]}
          >
            <Input type="number" placeholder="Enter price" />
          </Form.Item>

          <Form.Item
            label="Duration (minutes)"
            name="duration"
            rules={[{ required: true, message: 'Duration must not be blank!!' }]}
          >
            <Input type="number" placeholder="Enter duration in minutes" />
          </Form.Item>

          <Form.Item
            label="Upload image URL"
            name="image"
            rules={[{ required: true, message: 'Image must not be blank!!' }]}
          >
            <Input placeholder="Upload image URL" />
          </Form.Item>

          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: 'Category must not be blank!!' }]}
          >
            <Select onChange={(value) => setCategory(value)} value={category}>
              <Option value="single">Single</Option>
              <Option value="combo">Combo</Option>
            </Select>
          </Form.Item>

          {category === "combo" && (
            <Form.Item label="Sub Service" name="subServices">
              <Multiselect
                data={singleServices.map(service => ({
                  value: service._id,
                  text: service.serviceName
                }))}
                textField="text"
                valueField="value"
                onChange={(selected) => setBang(selected.map(item => item.value))} // Cập nhật danh sách ID
              />
            </Form.Item>
          )}



          <Form.Item>
            <Button key="cancel" className="cancel-btn" onClick={handleCloseModal}>
              ❌ Cancel
            </Button>
            <Button

              key="submit"
              htmlType="submit"
              className="submit-btn"
              type="primary"
              loading={loading}
            >
              ✅ Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ServicePage;
