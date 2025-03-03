import { Table, Input, Button, Pagination, Modal, Form } from "antd";
import "./index.scss";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { authenService } from "@/services/authenService";
import { useForm } from "antd/es/form/Form";
import axiosInstance from "@/utils/axiosInstance";

const DashboardTemplate = ({
  columns,
  headindText,
  createName,
  status,
  apiURI,
  titleModal,
  formItem,
  apiCreate,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(0);
  const [open, setOpen] = useState(false);
  const [number, setNumber] = useState(1);
  const [form] = useForm();
  const fetchingData = async (page = 1, limit = 6) => {
    setLoading(true);
    try {
      const response = await authenService.getUser(apiURI, page, limit);
      const { results, totalPages } = response.data.data;

      setTotalPage(totalPages);
      setData(results);
    } catch (error) {
      toast.error("Error while fetching data!!");
    }
    setLoading(false);
  };
  const handleBlockAccount = async (_id) => {
    try {
      await authenService.blockAccount(_id);
      toast.success("Block account successfully!!");
      fetchingData();
    } catch (error) {
      toast.error("Error while block account !!");
    }
  };
  const handleUnBlockAccount = async (_id) => {
    try {
      await authenService.unBlockAccount(_id);
      toast.success("UnBlock account successfully!!");
      fetchingData();
    } catch (error) {
      toast.error("Error while block account !!");
    }
  };
  useEffect(() => {
    fetchingData(number, 6);
  }, [number]);
  const handleOpenModal = () => {
    setOpen(true);
  };
  const handleSubmitForm = async (values) => {
    try {
      await axiosInstance.post(apiCreate, values);
      toast.success("Add successfully");
      fetchingData();
      setOpen(false);
      form.resetFields();
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
  return (
    <div className="dashboard-container">
      {/* Tiêu đề bảng */}
      <h2 className="table-title">{headindText}</h2>

      {/* Ô tìm kiếm */}
      <div className="table-header">
        <Input placeholder=" Search..." className="search-input" />
        <Button>Search</Button>
      </div>

      <div>
        {status && (
          <Button onClick={handleOpenModal}>Add New {createName}</Button>
        )}
      </div>

      {/* Bảng dữ liệu */}
      <Table
        loading={loading}
        columns={[
          ...columns,
          {
            title: "Action",
            dataIndex: "_id",
            key: "_id",
            render: (_id, record) => (
              <div className="action-buttons">
                {record.status ? (
                  <Button
                    onClick={() => {
                      handleBlockAccount(_id);
                    }}
                    className="block-btn"
                  >
                    <span>Block Account</span>
                  </Button>
                ) : (
                  <Button
                    onClick={() => {
                      handleUnBlockAccount(_id);
                    }}
                    className="unblock-btn"
                  >
                    <span>Unblock</span>
                  </Button>
                )}
              </div>
            ),
          },
        ]}
        pagination={false}
        dataSource={data}
      />
      <Pagination
        current={number}
        total={totalPage * 10} // Assuming 10 items per page, adjust as necessary
        pageSize={10} // Adjust based on your API's pagination
        onChange={(page) => {
          setNumber(page);
        }}
        style={{
          marginTop: "16px",
          display: "flex",
          justifyContent: "flex-end",
        }} // Adjust styling as needed
      />
      <Modal
        onOk={() => {
          form.submit();
        }}
        open={open}
        onCancel={() => {
          setOpen(false), form.resetFields();
        }}
        title={titleModal}
      >
        <Form labelCol={{ span: 24 }} form={form} onFinish={handleSubmitForm}>
          <Form.Item name={"_id"} hidden>
            <Input />
          </Form.Item>
          {formItem}
        </Form>
      </Modal>
    </div>
  );
};

export default DashboardTemplate;
