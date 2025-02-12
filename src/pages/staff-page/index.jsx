import { Table, Input, Button, Modal, Form, Select } from "antd";
import "./index.scss";
import { useState } from "react";
import { useForm } from "antd/es/form/Form";
import { PlusOutlined } from "@ant-design/icons";

const StaffPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState("");
  const [form] = useForm();

  const handleOpenModalCreate = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    form.resetFields();
    setSelectedRole("");
  };

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "Address",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "Phone",
    },
    {
      title: "CreateAt",
      dataIndex: "createAt",
      key: "CreateAt",
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "id",
      render: () => (
        <div className="action-buttons">
          <Button className="block-btn">
            <span>🛑 Block</span>
          </Button>
          <Button className="unblock-btn">
            <span>🔓 Unblock</span>
          </Button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: "jkfbk",
      name: "gjnbngk",
      address: "fkbhfbfj",
      phone: "fjvbfhk",
      createAt: "jgnjgkngjb",
    },
  ];
  return (
    <div className="dashboard-container">
      {/* Tiêu đề bảng */}
      <h2 className="table-title">Staff</h2>

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

      {/* modal create */}
      <Modal
        title="Register"
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
        <Form labelCol={{ span: 24 }} form={form} >
          <Form.Item
            label="Enter your email"
            name="email"
            rules={[{ required: true, message: "Email must not be blank!!" }]}
          >
            <Input placeholder="Enter your email" />
          </Form.Item>
          <Form.Item
            label="Enter your password"
            name="password"
            rules={[
              { required: true, message: "Password must not be blank!!" },
            ]}
          >
            <Input placeholder="Enter your password" />
          </Form.Item>
          <Form.Item
            label="Enter your fullname"
            name="fullname"
            rules={[
              { required: true, message: "Fullname must not be blank!!" },
            ]}
          >
            <Input placeholder="Enter your fullname" />
          </Form.Item>
          <Form.Item
            label="Choose role"
            name="role"
            rules={[{ required: true, message: "Role must not be blank!!" }]}
          >
            <Select onChange={(value) => setSelectedRole(value)}>
              <Select.Option value="staff">Staff</Select.Option>
              <Select.Option value="therapist">Therapist</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Enter your phone"
            name="phone"
            rules={[{ required: true, message: "Phone must not be blank!!" }]}
          >
            <Input placeholder="Enter your phone" />
          </Form.Item>

          {/* Chỉ hiển thị ô nhập chứng chỉ nếu role là "Therapist" */}
          {selectedRole === "therapist" && (
            <Form.Item
              label="Upload your certificate"
              name="certificate"
              rules={[
                { required: true, message: "Certificate must not be blank!!" },
              ]}
            >
              <Input placeholder="Upload your certificate" />
            </Form.Item>
          )}
        </Form>
      </Modal>
    </div>
  );
};

export default StaffPage;
