import { Button, Form, Input, Modal, Select, Table } from "antd";

import "./index.scss";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";
import { PlusOutlined } from "@ant-design/icons";

const ServicePage = () => {
  const [open, setOpen] = useState(false);
  const [openDetails, setOpenDetails] = useState(false);
  const [form] = useForm();
  const [selectedService, setSelectedService] = useState(null);

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

  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Service Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Action",
      dataIndex: "stt",
      key: "stt",
      render: (_, record) => (
        <div className="action-buttons">
          <Button
            className="detail-btn"
            onClick={() => handleOpenDetailModal(record)}
          >
            📄 Detail
          </Button>
          <Button className="hide-btn">🙈 Hidden</Button>
        </div>
      ),
    },
  ];

  const data = [
    {
      stt: 1,
      name: "Massage Therapydddd",
      rating: "⭐⭐⭐⭐⭐",
      description: "A relaxing massage therapy to reduce stress and pain.",
      price: "$50 / session",
      duration: "60 mins",
    },
    {
      stt: 2,
      name: "Facial Treatment",
      rating: "⭐⭐⭐⭐",
      description: "A skin care treatment for a glowing and healthy look.",
      price: "$40 / session",
      duration: "45 mins",
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Tiêu đề bảng */}
      <h2 className="table-title">Service</h2>

      {/* Ô tìm kiếm */}
      <div className="table-header">
        <Input placeholder=" Search..." className="search-input" />
        <Button className="search-button">🔎 Search</Button>
      </div>
      <div className="create-button">
        <Button onClick={handleOpenModalCreate}>
          <PlusOutlined />
          Create
        </Button>
      </div>
      {/* Bảng dữ liệu */}
      <Table columns={columns} dataSource={data} />
      {/* Modal hiển thị chi tiết dịch vụ */}

      <Modal
        open={openDetails}
        onCancel={handleCloseDetailModal}
        footer={null}
        title="Service Detail"
      >
        {selectedService && (
          <div className="service-detail">
            <h3>{selectedService.name}</h3>
            <p>
              <strong>Description:</strong> {selectedService.description}
            </p>
            <p>
              <strong>Rating:</strong> {selectedService.rating}
            </p>
            <p>
              <strong>Price:</strong> {selectedService.price}
            </p>
            <p>
              <strong>Duration:</strong> {selectedService.duration}
            </p>
          </div>
        )}
      </Modal>

      {/* modal create */}
      <Modal
        title="Create service"
        footer={[
          <Button
            key="cancel"
            className="cancel-btn"
            onClick={handleCloseModal}
          >
            ❌ Cancel
          </Button>,
          <Button
            onClick={() => {
              form.submit();
            }}
            key="submit"
            htmlType="submit"
            className="submit-btn"
            type="primary"
          >
            ✅ Submit
          </Button>,
        ]}
        onCancel={handleCloseModal}
        open={open}
      >
        <Form labelCol={{ span: 24 }} form={form}>
          <Form.Item
            label="Service name"
            name="name"
            rules={[{ required: true, message: "Name must not be blank!!" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Price"
            name="price"
            rules={[{ required: true, message: "Price must not be blank!!" }]}
          >
            <Input type="number" placeholder="Enter price" />
          </Form.Item>
          <Form.Item
            label="Upload url image"
            name="image"
            rules={[{ required: true, message: "Image must not be blank!!" }]}
          >
            <Input placeholder="Upload image" />
          </Form.Item>
          <Form.Item
            label="Choose category"
            name="category"
            rules={[
              { required: true, message: "Category must not be blank!!" },
            ]}
          >
            <Select>
              <Select.Option value="staff">Service 1</Select.Option>
              <Select.Option value="therapist">Service 2</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Status must not be blank!!" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default ServicePage;
