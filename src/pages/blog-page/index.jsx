import { Table, Input, Button, Modal, Form, Select } from "antd";
import "./index.scss";
import { useEffect, useState } from "react";
import { useForm } from "antd/es/form/Form";
import { PlusOutlined } from "@ant-design/icons";
import { EditOutlined } from "@ant-design/icons";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";



const BlogPage = () => {
  const [open, setOpen] = useState(false);
  const [form] = Form.useForm();
  const [openDetail, setOpenDetail] = useState(false);

  const [editorContent, setEditorContent] = useState(""); // State lưu nội dung CKEditor
  const [selectedBlog, setSelectedBlog] = useState(null);



  const handleOpenModalCreate = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
    form.resetFields();

  };
  // Mở Modal "Detail"
  const handleOpenModalDetail = (record) => {
    setSelectedBlog(record); // Lưu dữ liệu để hiển thị
    setOpenDetail(true); // Mở modal Detail
  };

  // Đóng Modal "Detail"
  const handleCloseModalDetail = () => {
    setOpenDetail(false);
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
      title: "Description",
      dataIndex: "description",
      key: "Description",
    },
    {
      title: "Status",
      dataIndex: "id",
      key: "id",
      render: (_, record) => (
        <div className="action-buttons">
          <Button
            className="edit-btn"
            icon={<EditOutlined />}
            onClick={() => {
              setOpen(true);
            }}
          >
            Edit
          </Button>

          <Button className="detail-btn" onClick={() => handleOpenModalDetail(record)}>📄 Detail</Button>
          <Button className="hide-btn">🙈 Hidden</Button>
        </div>
      ),
    },
  ];

  const data = [
    {
      id: "1",
      name: "voduy",
      address: "123 duong tien",
      phone: "012332223",
      createAt: "duc",
      description: "hello"
    },
  ];
  return (
    <div className="dashboard-container">
      {/* Tiêu đề bảng */}
      <h2 className="table-title">Blog</h2>

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
        title="Blog(POP-UP)"
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
        <Form form={form}>
          <Form.Item label="Title" name="title">
            <Input placeholder="Enter title" />
          </Form.Item>

          <Form.Item label="Description" name="description">
            <CKEditor
              editor={ClassicEditor}
              data={editorContent} // Hiển thị nội dung từ state
              onChange={(event, editor) => {
                const data = editor.getData();
                setEditorContent(data); // Cập nhật state khi chỉnh sửa
              }}
            />
          </Form.Item>

        </Form>
      </Modal>
      <Modal open={openDetail} onCancel={handleCloseModalDetail} footer={null} title="Blog Detail">
        {selectedBlog && (
          <div className="service-detail">
            <h3>{selectedBlog.title}</h3>
            <p>
              <strong>Description:</strong> {selectedBlog.description}
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default BlogPage;
