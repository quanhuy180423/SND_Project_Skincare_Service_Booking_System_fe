import { useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { formatCurrency } from "../../utils/formatCurrency";
const API_BASE_URL = import.meta.env.VITE_BASE_URL;

const PriceListPage = () => {
  const [activeFilter, setActiveFilter] = useState("individual");
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}service/`);
        // setServices(response.data);
        setServices(response.data.data.results || []);
        console.log(response.data.data.results);
      } catch (err) {
        setError("Lỗi khi tải dữ liệu, vui lòng thử lại!");
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const handleBooking = () => {
    navigate("/checkout");
  };

  const filteredServices = services.filter(
    (service) =>
      (service.subServices.length === 0 ? "individual" : "package") ===
      activeFilter
  );
  console.log(filteredServices);

  return (
    <Box>
      {/* Banner Bảng Giá */}
      <Box
        sx={{
          backgroundImage:
            "url('https://img.freepik.com/free-vector/spa-therapy-banner-design_1308-119379.jpg?t=st=1740256828~exp=1740260428~hmac=77169ec88f9ca94e7d928b3a32f805fb41099fd2ea4adbba1b6843b3696965f1&w=1380')",
          backgroundSize: "50%",
          backgroundPosition: "center",
          py: { xs: 20, md: 35 },
          mb: 7,
          position: "relative",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0,0,0,0.4)",
          }}
        />
        <Container
          maxWidth="lg"
          sx={{ position: "relative", zIndex: 1, textAlign: "center" }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "#FFEFD5",
              fontWeight: "bold",
              fontSize: { xs: "1.3rem", md: "1.5rem" },
            }}
          >
            Dịch vụ chăm sóc da chuyên nghiệp và đẳng cấp
          </Typography>
        </Container>
      </Box>

      {/* Tabs chuyển đổi giữa Dịch vụ và Gói dịch vụ */}
      <Container maxWidth="lg" sx={{ mb: 5 }}>
        <Tabs
          value={activeFilter}
          onChange={(e, newValue) => setActiveFilter(newValue)}
          sx={{
            "& .MuiTabs-indicator": {
              backgroundColor: "#CD5700",
            },
            justifyContent: "flex-start",
          }}
        >
          <Tab
            label="Dịch vụ"
            value="individual"
            sx={{
              color: "#E0AB76",
              textTransform: "none",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(205, 87, 0, 0.1)",
              },
              "&.Mui-selected": {
                backgroundColor: "rgba(205, 87, 0, 0.2)",
              },
              marginRight: 2,
            }}
          />
          <Tab
            label="Gói dịch vụ"
            value="package"
            sx={{
              color: "#E0AB76",
              textTransform: "none",
              fontWeight: "bold",
              transition: "all 0.3s ease",
              "&:hover": {
                backgroundColor: "rgba(205, 87, 0, 0.1)",
              },
              "&.Mui-selected": {
                backgroundColor: "rgba(205, 87, 0, 0.2)",
              },
              marginRight: 2,
            }}
          />
        </Tabs>
      </Container>

      {/* Danh sách dịch vụ */}
      <Container maxWidth="lg" sx={{ mb: 5 }}>
        <Grid container spacing={4}>
          {filteredServices.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Box
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: 2,
                  boxShadow: 2,
                  overflow: "hidden",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Box
                  component="img"
                  src={service.image}
                  alt={service.serviceName}
                  sx={{ width: "100%", height: 300, objectFit: "cover" }}
                />
                <Box sx={{ p: 2, flexGrow: 1 }}>
                  <Typography
                    variant="h6"
                    sx={{ color: "#B8860B", fontWeight: "bold", mb: 1 }}
                    onClick={() => navigate(`/service-detail/${service._id}`)}
                  >
                    {service.serviceName}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    {service.description}
                  </Typography>
                  <Typography variant="body2" sx={{ mb: 2 }}>
                    Thời gian thực hiện: {service.duration}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    p: 2,
                  }}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: "bold",
                      color: "#C51E3A",
                      minWidth: "120px",
                      textAlign: "center",
                    }}
                  >
                    {formatCurrency(Number(service.price))}
                  </Typography>
                </Box>

                <Box sx={{ p: 2 }}>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      backgroundColor: "#B8860B",
                      color: "#fff",
                      borderRadius: 2,
                      py: 1,
                    }}
                    onClick={() => navigate("/checkout")}
                  >
                    Đặt lịch
                  </Button>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PriceListPage;
