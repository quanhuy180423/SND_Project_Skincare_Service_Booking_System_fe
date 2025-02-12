import { Table, Input, Button } from "antd";
import "./index.scss";


const DashboardTemplate = ({ columns, data, headindText }) => {
  return (
    <div className="dashboard-container">
      {/* Tiêu đề bảng */}
      <h2 className="table-title">{headindText}</h2>

      {/* Ô tìm kiếm */}
      <div className="table-header">
        <Input placeholder=" Search..." className="search-input" />
        <Button className="search-button">🔎 Search</Button>
      </div>

      {/* Bảng dữ liệu */}
      <Table columns={columns} dataSource={data} />
    </div>
  );
};

export default DashboardTemplate;
