import { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  LogoutOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import "./index.scss";
import { Layout, Menu, theme } from "antd";
import { Link, Outlet, useNavigate } from "react-router-dom";
const { Content, Sider } = Layout;
function getItem(label, key, icon, children, onClick) {
  return {
    key,
    icon,
    children,
    label: onClick ? (
      <span onClick={onClick} style={{ cursor: "pointer" }}>
        {label}
      </span>
    ) : (
      <Link to={`/dashboard/${key}`}>{label}</Link>
    ),
  };
}
<<<<<<< HEAD
=======
const items = [
  getItem("Dashboard", "", <PieChartOutlined />),
  getItem("Customer", "customer", <DesktopOutlined />),
  getItem("User", "staff", <UserOutlined />),
  getItem("Therapist", "staff/", <TeamOutlined />),
  getItem(
    "View specialist schedule",
    "View-specialist-chedule",
    <FileOutlined />
  ),
>>>>>>> main

const Dashboard = () => {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const handleLogout = () => {
    navigate("/login");
  };
  const items = [
    getItem("Dashboard", "", <PieChartOutlined />),
    getItem("Customer", "customer", <DesktopOutlined />),
    getItem("Staff", "staff", <UserOutlined />),
    getItem("Therapist", "staff/", <TeamOutlined />),
    getItem(
      "View specialist schedule",
      "View-specialist-chedule",
      <FileOutlined />
    ),

    getItem("Service", "service", <PieChartOutlined />),
    getItem("Blog", "blog", <DesktopOutlined />),
    getItem("Event", "event", <UserOutlined />),
    getItem(
      "Rating & Feedback Therapist",
      "Rating-FeedbackTherapist",
      <TeamOutlined />
    ),
    {
      key: "logout",
      icon: <LogoutOutlined />,
      label: <div onClick={handleLogout}><span>Logout</span></div>,
    },
  ];
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        width={260} // Set the sidebar width correctly
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <div className="admin-section">
          <UserOutlined className="admin-icon" />

          <span className="admin-text">{collapsed ? "" : "Admin"}</span>
        </div>
        <Menu
          theme="dard"
          defaultSelectedKeys={["1"]}
          mode="inline"
          items={items}
          style={{ fontSize: "18px", fontWeight: "300" }}
        />
      </Sider>

      <Layout>
        <Content
          style={{
            margin: "0 16px",
          }}
        >
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
