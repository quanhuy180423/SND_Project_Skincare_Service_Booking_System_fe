import { Box, Container, Typography, Grid, Button } from "@mui/material";

const AboutPage = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundImage:
            "url('https://i.pinimg.com/736x/d3/0a/e8/d30ae842267f96b6ec481ebd5d2dfc5c.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          py: { xs: 20, md: 25 },
          mb: 5,
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
            backgroundColor: "rgba(0,0,0,0.3)",
          }}
        />
        <Container
          maxWidth="lg"
          sx={{
            position: "relative",
            zIndex: 1,
            textAlign: "right",
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            sx={{
              color: "#FFE5B4",
              fontWeight: "bold",
              mb: 2,
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
            }}
          >
            TENWEB
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: "#FFEFD5",
              fontWeight: "bold",
              fontSize: { xs: "1.1rem", md: "1.3rem" },
            }}
          >
            Hệ thống đặt lịch chăm sóc da – Nơi sắc đẹp bắt đầu
          </Typography>
        </Container>
      </Box>

      {/* 2. Về Chúng Tôi */}
      <Container maxWidth="lg" sx={{ mb: 5 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#B8860B", fontWeight: "bold", mb: 3 }}
        >
          Về Chúng Tôi
        </Typography>
        <Typography
          variant="body1"
          align="center"
          sx={{
            fontSize: "1.3rem",
            lineHeight: 1.8,
            mb: 3,
            px: { xs: 2, md: 0 },
          }}
        >
          Hệ thống đặt lịch chăm sóc da của chúng tôi được xây dựng với mong
          muốn mang đến trải nghiệm làm đẹp mềm mại, sang trọng và thân thiện
          nhất. Với giao diện hiện đại, dễ sử dụng, khách hàng có thể dễ dàng
          tìm kiếm và đặt lịch dịch vụ tại các spa uy tín, tận hưởng không gian
          thư giãn và chăm sóc sắc đẹp theo tiêu chuẩn 5 sao. Chúng tôi cam kết
          cung cấp dịch vụ chăm sóc da với công nghệ tiên tiến cùng đội ngũ
          chuyên gia giàu kinh nghiệm. Mỗi khách hàng đều được chăm sóc cá nhân
          hoá, giúp họ thư giãn và tự tin tỏa sáng. Chúng tôi tin rằng sắc đẹp
          không chỉ đến từ bên ngoài mà còn được nuôi dưỡng từ bên trong.
        </Typography>
      </Container>

      {/* 3. Sứ mệnh & Giá trị */}
      <Box sx={{ backgroundColor: "#fdf8ef", py: { xs: 5, md: 8 }, mb: 5 }}>
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://img.freepik.com/premium-photo/spa-composition-white-wooden-background_176873-4158.jpg?w=740"
                alt="Không gian spa sang trọng"
                sx={{
                  width: "100%",
                  height: { xs: "auto", md: "40em" },
                  borderRadius: 2,
                  boxShadow: 2,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                sx={{ color: "#B8860B", fontWeight: "bold", mb: 2 }}
              >
                Tầm Nhìn và Sứ Mệnh
              </Typography>
              <Typography
                variant="body1"
                sx={{ fontSize: "1.2rem", lineHeight: 1.8, mb: 3 }}
              >
                Với tầm nhìn trở thành thương hiệu thẩm mỹ hàng đầu, chúng tôi
                không ngừng nỗ lực mang đến cho khách hàng những dịch vụ chất
                lượng cao, an toàn và hiệu quả. Không chỉ là điểm đến làm đẹp,
                mà còn là nơi lan tỏa niềm tin, khơi dậy vẻ đẹp tiềm ẩn giúp
                phái đẹp tự tin tỏa sáng và góp phần khẳng định vị thế nhan sắc
                Việt.
              </Typography>
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
                Tìm hiểu thêm
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. Giá Trị Cốt Lõi */}
      <Container maxWidth="lg" sx={{ mb: 5 }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#B8860B", fontWeight: "bold", mb: 3 }}
        >
          Giá Trị Cốt Lõi
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Box
                component="img"
                src="https://img.freepik.com/free-photo/young-woman-having-face-massage-relaxing-spa-salon_176420-7526.jpg?w=1380"
                alt="Tận Tâm"
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  height: 200,
                  mb: 2,
                  borderRadius: "10%",
                }}
              />
              <Typography
                variant="h6"
                sx={{ color: "#B8860B", fontWeight: "bold", mb: 1 }}
              >
                Tận Tâm
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Đặt khách hàng lên hàng đầu với sự tận tâm và niềm đam mê trong
                từng dịch vụ.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Box
                component="img"
                src="https://img.freepik.com/premium-photo/three-women-enjoy-drinking-healthy-beverage-spa-treatment-wearing-bathrobes-drinking-freshly-squeezed-juice-while-spending-weekend-wellness-center-having-fun-conversation-smiling_183219-7458.jpg?w=1380"
                alt="Chất Lượng"
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  height: 200,
                  mb: 2,
                  borderRadius: "10%",
                }}
              />
              <Typography
                variant="h6"
                sx={{ color: "#B8860B", fontWeight: "bold", mb: 1 }}
              >
                Chất Lượng
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Cam kết mang đến dịch vụ đạt chuẩn 5 sao với tiêu chuẩn cao về
                chất lượng.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Box
                component="img"
                src="https://img.freepik.com/premium-photo/hands-applying-mask-woman_236854-13163.jpg?w=1380"
                alt="Đổi Mới"
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  height: 200,
                  mb: 2,
                  borderRadius: "10%",
                }}
              />
              <Typography
                variant="h6"
                sx={{ color: "#B8860B", fontWeight: "bold", mb: 1 }}
              >
                Đổi Mới
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Luôn cập nhật công nghệ tiên tiến, đổi mới sáng tạo để tạo ra
                trải nghiệm khác biệt.
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Box textAlign="center">
              <Box
                component="img"
                src="https://img.freepik.com/free-photo/woman-soaking-her-hands-bowl-water-flowers-spa-treatment-product-female-feet-hand-spa-massage-pebble-perfumed-flowers-water-candles-relaxation-flat-lay-top-view_1150-44573.jpg?w=1380"
                alt="Trung Thực"
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  height: 200,
                  mb: 2,
                  borderRadius: "10%",
                }}
              />
              <Typography
                variant="h6"
                sx={{ color: "#B8860B", fontWeight: "bold", mb: 1 }}
              >
                Trung Thực
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Trung thực và minh bạch là nền tảng xây dựng niềm tin lâu dài.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* 5. Call to Action */}
      <Box sx={{ py: 5, backgroundColor: "#fdf8ef" }}>
        <Container maxWidth="lg" sx={{ textAlign: "center" }}>
          <Typography
            variant="h4"
            sx={{ color: "#B8860B", fontWeight: "bold", mb: 3 }}
          >
            Sẵn Sàng Trải Nghiệm?
          </Typography>
          <Typography variant="body1" sx={{ mb: 4, fontSize: "1.1rem" }}>
            Hãy bắt đầu hành trình chăm sóc sắc đẹp cùng chúng tôi ngay hôm nay.
          </Typography>
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
            Đặt lịch ngay
          </Button>
        </Container>
      </Box>
    </Box>
  );
};

export default AboutPage;
