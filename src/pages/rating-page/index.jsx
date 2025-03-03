import { Avatar, Button, Form, Input, Modal, Select, Table } from "antd";

import "./index.scss";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";
import { PlusOutlined } from "@ant-design/icons";

const RatingPage = () => {
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
      title: " Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      key: "rating",
    },
    {
      title: "Detail",
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

        </div>
      ),
    },
  ];

  const data = [
    {
      stt: 1,
      name: "hoai bao",
      rating: "⭐⭐⭐⭐⭐",
      description: "A relaxing massage therapy to reduce stress and pain.",
      price: "$50 / session",
      duration: "60 mins",
      avatar: "https://htmediagroup.vn/wp-content/uploads/2022/04/Anh-CV-2_avatar-min.jpg"
    },
    {
      stt: 2,
      name: "nani",
      rating: "⭐⭐⭐⭐",
      description: "A skin care treatment for a glowing and healthy look.",
      price: "$40 / session",
      duration: "45 mins",
      avatar: "https://htmediagroup.vn/wp-content/uploads/2022/03/Anh-6_avatar-min.jpg"

    },
  ];

  return (
    <div className="dashboard-container">
      {/* Tiêu đề bảng */}
      <h2 className="table-title">Rating & Feedback Therapist</h2>

      {/* Bảng dữ liệu */}
      <Table columns={columns} dataSource={data} />
      {/* Modal hiển thị chi tiết dịch vụ */}

      <Modal
        open={openDetails}
        onCancel={handleCloseDetailModal}
        footer={null}
        title="Feedback(pop-up)"
      >
        {selectedService && (
          <div className="feedback-item" >
            {/* Avatar bên trái */}
            <img
              src={selectedService.avatar}
              alt="avatar"
              width={120}
              height={120}
              style={{ borderRadius: "10px", marginRight: 20, objectFit: "cover" }}
            />

            {/* Nội dung bên phải */}
            <div className="reply-container">
           
            <Input
              placeholder="Enter reply..."
             
            />
            <Button className="reply-btn" type="primary">Reply</Button>
          </div>
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

        </Form>
      </Modal>
    </div>
  );
};

export default RatingPage;
