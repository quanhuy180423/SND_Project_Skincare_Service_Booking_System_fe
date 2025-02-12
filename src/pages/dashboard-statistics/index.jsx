import { Card, Row, Col } from "antd";
import { UserOutlined, DollarOutlined, CalendarOutlined } from "@ant-design/icons";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import "./index.scss";

const DashboardStatistic = () => {
  // Fake data
  const revenueData = [
    { month: "Jan", revenue: 10000 },
    { month: "Feb", revenue: 12000 },
    { month: "Mar", revenue: 15000 },
    { month: "Apr", revenue: 18000 },
    { month: "May", revenue: 20000 },
  ];

  const bookingData = [
    { date: "1/2", booking: 30 },
    { date: "2/2", booking: 25 },
    { date: "3/2", booking: 40 },
    { date: "4/2", booking: 35 },
    { date: "5/2", booking: 50 },
  ];

  return (
    <div className="dashboard-statistic">
      {/* Tổng quan */}
      <Row gutter={16} className="summary-cards">
        <Col span={8}>
          <Card className="stat-card">
            <UserOutlined className="icon user-icon" />
            <div>
              <h3>Total Users</h3>
              <p>12,345</p>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="stat-card">
            <DollarOutlined className="icon revenue-icon" />
            <div>
              <h3>Monthly Revenue</h3>
              <p>$45,678</p>
            </div>
          </Card>
        </Col>
        <Col span={8}>
          <Card className="stat-card">
            <CalendarOutlined className="icon booking-icon" />
            <div>
              <h3>Total Bookings</h3>
              <p>2,345</p>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Biểu đồ */}
      <Row gutter={16} className="charts">
        <Col span={12}>
          <Card title="Booking Overview" className="chart-card">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={bookingData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="booking" stroke="#1890ff" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </Card>
        </Col>

        <Col span={12}>
          <Card title="Revenue Overview" className="chart-card">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="revenue" fill="#52c41a" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default DashboardStatistic;
