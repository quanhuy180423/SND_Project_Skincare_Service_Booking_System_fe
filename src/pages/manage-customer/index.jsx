import DashboardTemplate from "@/components/dashboard-template";
import { Button } from "antd";
import "./index.scss";
import dayjs from "dayjs";

const ManageCustomer = () => {
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
      render: (value) => dayjs(value).format("DD/MM/YYYY"),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (status ? <p>true</p> : <p>false</p>),
    },
  ];

  return (
    <DashboardTemplate
      apiURI={"user/getCustomer"}
      status={false}
      createName={"Customer Account"}
      columns={columns}
      headindText={"Customer"}
      showCreateButton={false}
    />
  );
};

export default ManageCustomer;
