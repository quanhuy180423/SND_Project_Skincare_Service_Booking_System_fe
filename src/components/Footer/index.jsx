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
    <AppBar position="relative" sx={{ backgroundColor: "#FBCEB1", padding: 5 }}>
      <Box display="flex" justifyContent="space-between" flexWrap="wrap">
        {/* Logo và giới thiệu */}
        <Box maxWidth={420} textAlign="left">
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
            <MuiLink href="#" color="inherit" sx={{ color: "#4B3621" }}>
              <Facebook />
            </MuiLink>
            <MuiLink href="#" color="inherit" sx={{ color: "#4B3621" }}>
              <Instagram />
            </MuiLink>
            <MuiLink href="#" color="inherit" sx={{ color: "#4B3621" }}>
              <YouTube />
            </MuiLink>
          </Box>
        </Box>

        {/* Thông tin liên hệ */}
        <Box>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={1}
            sx={{ color: "#4B3621" }}
          >
            Thông tin liên hệ
          </Typography>

          <Box display="flex" alignItems="center" mb={1}>
            <LocationOn sx={{ marginRight: 1, color: "#4B3621" }} />
            <Typography sx={{ color: "#4B3621" }}>
              Địa chỉ: S10.02 Vinhomes Grand Park{" "}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={1}>
            <Phone sx={{ marginRight: 1, color: "#4B3621" }} />
            <Typography sx={{ color: "#4B3621" }}>
              Hotline: 1900 9009{" "}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={1}>
            <Email sx={{ marginRight: 1, color: "#4B3621" }} />
            <Typography sx={{ color: "#4B3621" }}>
              Email: spa@fpt.edu.vn{" "}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" mb={1}>
            <AccessTime sx={{ marginRight: 1, color: "#4B3621" }} />
            <Typography sx={{ color: "#4B3621" }}>
              Thời gian làm việc: 7h - 22h{" "}
            </Typography>
          </Box>
        </Box>

        {/* Chính sách chung */}
        <Box>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={1}
            sx={{ color: "#4B3621" }}
          >
            Chính sách chung
          </Typography>
          <MuiLink
            href="#"
            color="inherit"
            display="block"
            sx={{ color: "#4B3621" }}
          >
            Chính sách bảo mật thông tin
          </MuiLink>
          <MuiLink
            href="#"
            color="inherit"
            display="block"
            sx={{ color: "#4B3621" }}
          >
            Điều khoản sử dụng
          </MuiLink>
          <MuiLink
            href="#"
            color="inherit"
            display="block"
            sx={{ color: "#4B3621" }}
          >
            Tuyển dụng
          </MuiLink>
          <MuiLink
            href="#"
            color="inherit"
            display="block"
            sx={{ color: "#4B3621" }}
          >
            Tiếp nhận ý kiến phản ánh
          </MuiLink>
        </Box>

        {/* Dịch vụ nổi bật */}
        <Box>
          <Typography
            variant="h6"
            fontWeight="bold"
            mb={1}
            sx={{ color: "#4B3621" }}
          >
            Dịch vụ nổi bật
          </Typography>
          <MuiLink
            href="#"
            color="inherit"
            display="block"
            sx={{ color: "#4B3621" }}
          >
            Nặn mụn chuyên sâu
          </MuiLink>
          <MuiLink
            href="#"
            color="inherit"
            display="block"
            sx={{ color: "#4B3621" }}
          >
            Dưỡng trắng da
          </MuiLink>
          <MuiLink
            href="#"
            color="inherit"
            display="block"
            sx={{ color: "#4B3621" }}
          >
            Tiêm meso trắng da
          </MuiLink>
        </Box>
      </Box>
    </AppBar>
  );
}

export default Footer;
