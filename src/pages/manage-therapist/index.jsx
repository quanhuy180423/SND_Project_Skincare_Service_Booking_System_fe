import DashboardTemplate from "@/components/dashboard-template";
import { Button, Form, Input } from "antd";
import "./index.scss";
import dayjs from "dayjs";

const ManageTherapist = () => {
  const columns = [
    
    {
      title: "_Id",
      dataIndex: "_id",
      key: "_id",

    },
   
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (value) => dayjs(value).format("DD/MM/YYYY")
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => 
        status ? <p>true</p> : <p>false</p>
      
    },
    
  ];

  const formItem = (
    <>
      <Form.Item
        label="Id"
        name={"id"}
        rules={[
          {
            required: true,
            message: "Id must not be blank!!",
          },
        ]}
      >
        <Input placeholder="Enter id" />
      </Form.Item>
      <Form.Item
        label="Name"
        name={"name"}
        rules={[
          {
            required: true,
            message: "Name must not be blank!!",
          },
        ]}
      >
        <Input placeholder="Enter name" />
      </Form.Item>

      <Form.Item
        label="Phone"
        name={"phone"}
        rules={[
          {
            required: true,
            message: "Phone must not be blank!!",
          },
          {
            pattern: /^(0|\+84)[3-9][0-9]{8}$/,
            message: "Invalid phone number format!!",
          },
        ]}
      >
        <Input placeholder="Enter phone" />
      </Form.Item>
      <Form.Item
        label="Email"
        name={"email"}
        rules={[
          {
            required: true,
            message: "Email must not be blank!!",
          },
          {
            type: "email",
            message: "Invalid email format!!", // Kiểm tra email hợp lệ
          },
          {
            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Email format is incorrect!!", // Regex kiểm tra email
          },
        ]}
      >
        <Input placeholder="Enter email" />
      </Form.Item>
      <Form.Item
        label="Password"
        name={"password"}
        rules={[
          {
            required: true,
            message: "Password must not be blank!!",
          },
        ]}
      >
        <Input placeholder="Enter password" />
      </Form.Item>

      <Form.Item
        label="Role"
        name={"role"}
        rules={[
          {
            required: true,
            message: "Role must not be blank!!",
          },
        ]}
      >
        <Input placeholder="Enter role" />
      </Form.Item>
    </>
  )
  return <DashboardTemplate titleModal={"Therapist information"} formItem={formItem} apiCreate={"user/createByAdmin"} apiURI={"user/getTherapist"} status={true} createName={"Therapist Account"}   columns={columns}  headindText={"Therapist"} showCreateButton={true}/>;
};

export default ManageTherapist;
