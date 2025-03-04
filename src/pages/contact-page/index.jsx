import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const ContactPage = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "url('https://media.istockphoto.com/id/1441979693/vi/anh/th%C3%A0nh-ph%E1%BA%A7n-v%E1%BB%9Bi-c%C3%A1c-s%E1%BA%A3n-ph%E1%BA%A9m-spa-tr%C3%AAn-n%E1%BB%81n-%C4%91%C3%A1-c%E1%BA%A9m-th%E1%BA%A1ch-nh%C3%ACn-t%E1%BB%AB-tr%C3%AAn-xu%E1%BB%91ng.jpg?s=2048x2048&w=is&k=20&c=DW9pZrrpaglfNbtPSAWRfCVeddZr6CM5QN4Ab6TYuKk=')",
          backgroundSize: "cover",
          backgroundPosition: "start",
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
            Chúng tôi luôn sẵn sàng lắng nghe và phục vụ bạn
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mb: 5 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Typography
              variant="h4"
              sx={{ color: "#B8860B", fontWeight: "bold", mb: 3 }}
            >
              Thông Tin Liên Hệ
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.2rem", mb: 2 }}>
              <strong>Địa chỉ:</strong> Số 10, Đường ABC, Quận XYZ, TP.HCM
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.2rem", mb: 2 }}>
              <strong>Điện thoại:</strong> 0900 123 456
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.2rem", mb: 2 }}>
              <strong>Email:</strong> contact@tenwebspa.vn
            </Typography>
            <Typography variant="body1" sx={{ fontSize: "1.2rem", mb: 2 }}>
              <strong>Giờ làm việc:</strong> 8h - 20h (Thứ 2 - Chủ nhật)
            </Typography>
          </Grid>

          {/* Form liên hệ */}
          <Grid item xs={12} md={7}>
            <Typography
              variant="h4"
              sx={{ color: "#B8860B", fontWeight: "bold", mb: 3 }}
            >
              Gửi Tin Nhắn
            </Typography>
            <Box component="form" noValidate autoComplete="off">
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Họ và tên"
                    variant="outlined"
                    fullWidth
                    InputProps={{ sx: { borderRadius: 3 } }}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    InputProps={{ sx: { borderRadius: 3 } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Chủ đề"
                    variant="outlined"
                    fullWidth
                    InputProps={{ sx: { borderRadius: 3 } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Nội dung"
                    variant="outlined"
                    fullWidth
                    multiline
                    rows={4}
                    InputProps={{ sx: { borderRadius: 3 } }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#B8860B",
                      color: "#fff",
                      borderRadius: 2,
                      px: 4,
                      py: 1,
                    }}
                  >
                    Gửi
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactPage;
