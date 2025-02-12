import DashboardTemplate from "@/components/dashboard-template";
import { Button } from "antd";
import "./index.scss";

const ManageCustomer = () => {
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

  return <DashboardTemplate columns={columns} data={data} headindText={"Customer"} showCreateButton={false}/>;
};

export default ManageCustomer;
