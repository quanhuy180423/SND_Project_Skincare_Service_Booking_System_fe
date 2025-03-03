import { AppBar, Box, Typography, Link as MuiLink } from "@mui/material";
import {
  Facebook,
  Instagram,
  YouTube,
  LocationOn,
  Phone,
  Email,
  AccessTime,
} from "@mui/icons-material";

function Footer() {
  return (
    // <AppBar
    //   position="fixed"
    //   sx={{
    //     top: "auto",
    //     bottom: 0,
    //     left: 0,
    //     // width: "100%",
    //     backgroundColor: "#FBCEB1",
    //     padding: 2,
    //   }}
    // >
    <AppBar position="relative" sx={{ backgroundColor: "#FBCEB1", padding: 5 }}>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {/* Logo và giới thiệu */}
        <Box flex={1} maxWidth={420} textAlign="left">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            mb={2}
          >
            <img
              src="https://img.freepik.com/premium-vector/beauty-spa-venus-logo-lineart-outline-woman-logo_685964-1.jpg?w=826"
              alt="TENWEB"
              style={{
                width: 100,
                height: 100,
                borderRadius: "50%",
              }}
            />
          </Box>
          <Typography variant="body1" mb={2} sx={{ color: "#4B3621" }}>
            Hệ thống Spa Quốc Tế TENWEB là thiên đường chăm sóc sắc đẹp chuẩn
            quốc tế uy tín hàng đầu, luôn cập nhật và đón đầu các xu hướng thẩm
            mỹ trên thế giới.
          </Typography>
          <Typography sx={{ color: "#4B3621" }}>
            Theo dõi chúng tôi tại:
          </Typography>
          <Box display="flex" gap={1} mt={1}>
            <MuiLink
              href="#"
              color="inherit"
              sx={{
                color: "#4B3621",
                textDecoration: "none",
                fontSize: "1.1rem",
              }}
            >
              <Facebook />
            </MuiLink>
            <MuiLink
              href="#"
              color="inherit"
              sx={{
                color: "#4B3621",
                textDecoration: "none",
                fontSize: "1.1rem",
              }}
            >
              <Instagram />
            </MuiLink>
            <MuiLink
              href="#"
              color="inherit"
              sx={{
                color: "#4B3621",
                textDecoration: "none",
                fontSize: "1.1rem",
              }}
            >
              <YouTube />
            </MuiLink>
          </Box>
        </Box>

        {/* Thông tin liên hệ */}
        <Box sx={{ flex: 1, marginLeft: 10 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={1}
            sx={{ color: "#4B3621", fontSize: "1.3rem" }}
          >
            Thông tin liên hệ
          </Typography>

          <Box display="flex" alignItems="center" mb={1}>
            <LocationOn sx={{ marginRight: 1, color: "#4B3621" }} />
            <Typography sx={{ color: "#4B3621", fontSize: "1.1rem" }}>
              Địa chỉ: S10.02 Vinhomes Grand Park{" "}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={1}>
            <Phone sx={{ marginRight: 1, color: "#4B3621" }} />
            <Typography sx={{ color: "#4B3621", fontSize: "1.1rem" }}>
              Hotline: 1900 9009{" "}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={1}>
            <Email sx={{ marginRight: 1, color: "#4B3621" }} />
            <Typography sx={{ color: "#4B3621", fontSize: "1.1rem" }}>
              Email: spa@fpt.edu.vn{" "}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={1}>
            <AccessTime sx={{ marginRight: 1, color: "#4B3621" }} />
            <Typography sx={{ color: "#4B3621", fontSize: "1.1rem" }}>
              Thời gian làm việc: 7h - 22h{" "}
            </Typography>
          </Box>
        </Box>

        {/* Chính sách chung */}
        <Box sx={{ flex: 1, marginLeft: 5 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={1}
            sx={{ color: "#4B3621", fontSize: "1.3rem" }}
          >
            Chính sách chung
          </Typography>
          <MuiLink
            href="#"
            color="inherit"
            display="block"
            sx={{
              color: "#4B3621",
              textDecoration: "none",
              mb: 2,
              fontSize: "1.1rem",
            }}
          >
            Chính sách bảo mật thông tin
          </MuiLink>
          <MuiLink
            href="#"
            color="inherit"
            display="block"
            sx={{
              color: "#4B3621",
              textDecoration: "none",
              mb: 2,
              fontSize: "1.1rem",
            }}
          >
            Điều khoản sử dụng
          </MuiLink>
          <MuiLink
            href="#"
            color="inherit"
            display="block"
            sx={{
              color: "#4B3621",
              textDecoration: "none",
              mb: 2,
              fontSize: "1.1rem",
            }}
          >
            Tuyển dụng
          </MuiLink>
          <MuiLink
            href="#"
            color="inherit"
            display="block"
            sx={{
              color: "#4B3621",
              textDecoration: "none",
              mb: 2,
              fontSize: "1.1rem",
            }}
          >
            Tiếp nhận ý kiến phản ánh
          </MuiLink>
        </Box>

        {/* Dịch vụ nổi bật */}
        <Box sx={{ marginRight: 10 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={1}
            sx={{ color: "#4B3621", fontSize: "1.3rem" }}
          >
            Dịch vụ nổi bật
          </Typography>
          <MuiLink
            href="#"
            color="inherit"
            display="block"
            sx={{
              color: "#4B3621",
              textDecoration: "none",
              mb: 2,
              fontSize: "1.1rem",
            }}
          >
            Nặn mụn chuyên sâu
          </MuiLink>
          <MuiLink
            href="#"
            color="inherit"
            display="block"
            sx={{
              color: "#4B3621",
              textDecoration: "none",
              mb: 2,
              fontSize: "1.1rem",
            }}
          >
            Dưỡng trắng da
          </MuiLink>
          <MuiLink
            href="#"
            color="inherit"
            display="block"
            sx={{
              color: "#4B3621",
              textDecoration: "none",
              mb: 2,
              fontSize: "1.1rem",
            }}
          >
            Tiêm meso trắng da
          </MuiLink>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Footer;
