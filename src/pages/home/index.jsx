import { Box, Typography, Grid, Container, Button } from "@mui/material";
import Carousel from "../../components/carousuel/index";
import { SPACE_ITEMS } from "../../data";

const HomePage = () => {
  return (
    <Box>
      {/* 1. CAROUSEL */}
      <div style={{ marginTop: "80px" }}>
        <Carousel autoplay />
      </div>

      {/* 2. PHẦN “DỊCH VỤ NỔI BẬT” */}
      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Typography
          variant="h4"
          component="h2"
          align="center"
          color="#B8860B"
          gutterBottom
          sx={{ fontSize: { xs: "1.8rem", sm: "2.2rem", md: "2.5rem" } }}
        >
          Dịch vụ nổi bật
        </Typography>
        <Typography variant="h6" align="center" sx={{ mb: 4 }}>
          Hệ thống TENWEB Spa chào đón KHÁCH HÀNG THỨ 2 TRIỆU. Để có được thành
          công này, TENWEB Spa đã cung cấp đến khách hàng loạt dịch vụ làm đẹp
          chất lượng có chi phí hợp lý. Đón đầu xu hướng làm đẹp hiện đại, dịch
          vụ Collagen Trẻ hóa căng bóng tại TENWEB Spa là một trong những dịch
          vụ nổi bật, sở hữu nhiều ưu điểm vượt trội. TENWEB Spa ứng dụng công
          nghệ thế hệ mới nhất, mang đến những trải nghiệm lý tưởng dành cho
          khách hàng khi sử dụng dịch vụ.
        </Typography>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Box textAlign="center">
              <Box
                component="img"
                src="https://img.freepik.com/premium-photo/smears-drops-various-cosmetic-products-pipette-beige-background-with-copy-space_150893-2724.jpg?w=1380"
                alt="Chăm sóc da chuyên sâu"
                sx={{
                  width: "90%",
                  height: "auto",
                  borderRadius: 8,
                  boxShadow: 2,
                  mb: 2,
                }}
              />
              <Typography
                variant="h5"
                sx={{ color: "#B8860B", fontWeight: "bold" }}
              >
                Chăm sóc da chuyên sâu
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box textAlign="center">
              <Box
                component="img"
                src="https://img.freepik.com/premium-photo/smears-drops-various-cosmetic-products-pipette-beige-background-with-copy-space_150893-2724.jpg?w=1380"
                alt="Chăm sóc da chuyên sâu"
                sx={{
                  width: "90%",
                  height: "auto",
                  borderRadius: 8,
                  boxShadow: 2,
                  mb: 2,
                }}
              />
              <Typography
                variant="h5"
                sx={{ color: "#B8860B", fontWeight: "bold" }}
              >
                Chăm sóc da chuyên sâu
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box textAlign="center">
              <Box
                component="img"
                src="https://img.freepik.com/premium-photo/smears-drops-various-cosmetic-products-pipette-beige-background-with-copy-space_150893-2724.jpg?w=1380"
                alt="Collagen Trẻ hóa căng bóng"
                sx={{
                  width: "90%",
                  height: "auto",
                  borderRadius: 8,
                  boxShadow: 2,
                  mb: 2,
                }}
              />
              <Typography
                variant="h5"
                sx={{ color: "#B8860B", fontWeight: "bold" }}
              >
                Collagen Trẻ hóa căng bóng
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Box textAlign="center">
              <Box
                component="img"
                src="https://img.freepik.com/premium-photo/smears-drops-various-cosmetic-products-pipette-beige-background-with-copy-space_150893-2724.jpg?w=1380"
                alt="Peel Image"
                sx={{
                  width: "90%",
                  height: "auto",
                  borderRadius: 8,
                  boxShadow: 2,
                  mb: 2,
                }}
              />
              <Typography
                variant="h5"
                sx={{ color: "#B8860B", fontWeight: "bold" }}
              >
                Peel Image
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* 3. PHẦN “VỀ TENWEB SPA” */}
      <Box
        sx={{
          backgroundColor: "#fdf8ef",
          py: 5,
          mt: 5,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={4} alignItems="center">
            {/* Cột trái: Tiêu đề + Nội dung + Nút */}
            <Grid item xs={12} md={6}>
              <Typography
                variant="h4"
                component="h2"
                sx={{ color: "#B8860B", fontWeight: "bold", mb: 2 }}
              >
                Về TENWEB SPA
              </Typography>
              <Typography variant="body1">
                19 Spa được thành lập từ năm 2011. Trải qua 8 năm hình thành và
                phát triển, TENWEB Spa ngày càng lớn mạnh, hoàn thiện và đem đến
                những giá trị tốt nhất cho khách hàng.
              </Typography>
              <Typography variant="body1">
                Hiện tại TENWEB Spa đã có hệ thống 22+ chi nhánh trên toàn quốc,
                phục vụ hàng triệu lượt khách hàng. TENWEB Spa tự hào mang đến
                những công nghệ làm đẹp tiên tiến với mức chi phí hợp lý, đáp
                ứng đa dạng nhu cầu làm đẹp.
              </Typography>
              <Box
                sx={{
                  mt: 2,
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#B8860B",
                    color: "#fff",
                    fontWeight: "bold",
                  }}
                >
                  Xem thêm &gt;&gt;
                </Button>
              </Box>
            </Grid>

            {/* Cột phải: Hình bản đồ + overlay “22+ chi nhánh” */}
            <Grid item xs={12} md={6}>
              <Box sx={{ position: "relative" }}>
                <Box
                  component="img"
                  src="https://img.freepik.com/premium-photo/clean-modern-spa-reception-area-with-white-orchids-white-wood-counter_36682-112204.jpg?w=1380"
                  alt="Bản đồ TENWEB Spa"
                  sx={{
                    width: "100%",
                    height: "auto",
                    borderRadius: 2,
                    boxShadow: 2,
                    // maxWidth: { xs: "100%", md: "1000%" },
                  }}
                />
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    backgroundColor: "rgba(255,255,255,0.85)",
                    px: 3,
                    py: 1,
                    borderRadius: 2,
                  }}
                >
                  <Typography
                    variant="h5"
                    sx={{ color: "#B8860B", fontWeight: "bold" }}
                  >
                    Hệ thống 22+ chi nhánh
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 4. PHẦN “VÌ SAO LỰA CHỌN TENWEB SPA?” */}
      <Box sx={{ py: 5 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#B8860B", fontWeight: "bold", mb: 2 }}
          >
            Vì sao lựa chọn TENWEB Spa?
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ maxWidth: 700, mx: "auto", mb: 4 }}
          >
            Trong nhiều năm qua, hàng chục ngàn khách hàng đã tin tưởng và đồng
            hành cùng TENWEB Spa trong hành trình chăm sóc sắc đẹp. Để đáp ứng
            sự mong đợi, TENWEB Spa đã không ngừng nỗ lực phát triển và hoàn
            thiện.
          </Typography>

          {/* 4 lý do chọn TENWEB Spa */}
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box
                  component="img"
                  src="https://img.freepik.com/premium-photo/zen-relax-concept-spa-composition-with-treatment-light-background-space-text_154293-3097.jpg?w=1380"
                  alt="Dịch vụ đa dạng"
                  sx={{ width: 80, height: 80, mb: 2, borderRadius: "50%" }}
                />
                <Typography
                  variant="h6"
                  sx={{ color: "#B8860B", fontWeight: "bold" }}
                >
                  Dịch vụ đa dạng
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  TENWEB Spa cung cấp hàng loạt dịch vụ làm đẹp: chăm sóc da,
                  dưỡng trắng, trị mụn... đáp ứng mọi nhu cầu.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box
                  component="img"
                  src="https://img.freepik.com/premium-photo/cosmetologist-makes-mask-woman-s-face-rejuvenate-skin-cosmetology_217593-18941.jpg?w=1380"
                  alt="Đội ngũ chuyên gia hàng đầu"
                  sx={{ width: 80, height: 80, mb: 2, borderRadius: "50%" }}
                />
                <Typography
                  variant="h6"
                  sx={{ color: "#B8860B", fontWeight: "bold" }}
                >
                  Chuyên gia hàng đầu
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Đội ngũ chuyên gia giàu kinh nghiệm, được đào tạo chuyên sâu,
                  luôn tận tâm mang đến chất lượng tốt nhất.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box
                  component="img"
                  src="https://img.freepik.com/premium-photo/young-woman-having-face-treatment-spa-salon_392895-171761.jpg?w=1380"
                  alt="Hơn 10 năm kinh nghiệm"
                  sx={{ width: 80, height: 80, mb: 2, borderRadius: "50%" }}
                />
                <Typography
                  variant="h6"
                  sx={{ color: "#B8860B", fontWeight: "bold" }}
                >
                  Hơn 10 năm kinh nghiệm
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Khẳng định uy tín, đã phục vụ hàng trăm nghìn khách hàng trên
                  khắp cả nước.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={6} md={3}>
              <Box textAlign="center">
                <Box
                  component="img"
                  src="https://img.freepik.com/premium-photo/assortment-spa-products-oils_53876-33218.jpg?w=1380"
                  alt="Chi phí hợp lý"
                  sx={{ width: 80, height: 80, mb: 2, borderRadius: "50%" }}
                />
                <Typography
                  variant="h6"
                  sx={{ color: "#B8860B", fontWeight: "bold" }}
                >
                  Chi phí hợp lý
                </Typography>
                <Typography variant="body2" sx={{ mt: 1 }}>
                  Dịch vụ chất lượng cao với mức giá phù hợp, nhiều chương trình
                  ưu đãi hấp dẫn cho khách hàng.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* 5. PHẦN “KHÁCH HÀNG NÓI GÌ VỀ TENWEB SPA?” */}
      <Box sx={{ py: 5, backgroundColor: "#fdf8ef" }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#B8860B", fontWeight: "bold", mb: 3 }}
          >
            Khách hàng nói gì về TENWEB Spa?
          </Typography>

          <Grid container spacing={4}>
            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Box
                  component="img"
                  src="https://img.freepik.com/premium-photo/spa-receptionist-welcoming-client-with-warm-smile-standing-sleek-wooden-counter_1279788-16125.jpg?w=1380"
                  alt="Khách hàng 1"
                  sx={{
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    objectFit: "cover",
                    mx: "auto",
                  }}
                />
                <Typography variant="body1" sx={{ mt: 2 }}>
                  “Tôi rất hài lòng với dịch vụ chăm sóc da tại TENWEB Spa. Làn
                  da của tôi cải thiện rõ rệt chỉ sau vài buổi!”
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ mt: 1, color: "#B8860B" }}
                >
                  - Linh, 28 tuổi
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Box
                  component="img"
                  src="https://img.freepik.com/free-photo/portrait-beautiful-young-asian-woman-using-smart-mobile-phone-beige_74190-13967.jpg?t=st=1739989898~exp=1739993498~hmac=c32943bc630f4486adbab0c496e718e76e1292bb63d0f12c4df7f52376f2bd66&w=1380"
                  alt="Khách hàng 2"
                  sx={{
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    objectFit: "cover",
                    mx: "auto",
                  }}
                />
                <Typography variant="body1" sx={{ mt: 2 }}>
                  “Mình làm liệu trình triệt lông ở đây và cực kỳ hài lòng. Nhân
                  viên nhiệt tình, máy móc hiện đại, giá cả hợp lý.”
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ mt: 1, color: "#B8860B" }}
                >
                  - Hương, 25 tuổi
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Box textAlign="center">
                <Box
                  component="img"
                  src="https://img.freepik.com/premium-photo/young-woman-with-eye-patch-using-mobile-phone-home_1048944-4906153.jpg?w=1380"
                  alt="Khách hàng 3"
                  sx={{
                    width: 150,
                    height: 150,
                    borderRadius: "50%",
                    objectFit: "cover",
                    mx: "auto",
                  }}
                />
                <Typography variant="body1" sx={{ mt: 2 }}>
                  “Sau khi phun xăm thẩm mỹ, mình tự tin hơn hẳn. Kết quả tự
                  nhiên và bền màu. Rất cảm ơn TENWEB Spa!”
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ mt: 1, color: "#B8860B" }}
                >
                  - Ngọc, 30 tuổi
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* 6. PHẦN CUỐI CÙNG: “KHÔNG GIAN SANG TRỌNG” */}
      <Box sx={{ py: 5 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            align="center"
            sx={{ color: "#B8860B", fontWeight: "bold", mb: 3 }}
          >
            Không gian sang trọng
          </Typography>
          <Typography
            variant="body1"
            align="center"
            sx={{ maxWidth: 700, mx: "auto", mb: 4 }}
          >
            Hệ thống TENWEB Spa với hơn 22 chi nhánh trải dài trên khắp mọi nơi,
            được đầu tư chỉnh chu và nổi bật với lối kiến trúc đạt tiêu chuẩn 5
            sao.
          </Typography>

          <Grid container spacing={4} justifyContent="center">
            {SPACE_ITEMS.map((item, index) => (
              <Grid item xs={12} sm={6} md={index < 2 ? 6 : 4} key={index}>
                <Box textAlign="center">
                  <Box
                    component="img"
                    src={item.src}
                    alt={item.title}
                    sx={{
                      width: "100%",
                      height: "auto",
                      borderRadius: 2,
                      boxShadow: 2,
                      mb: 2,
                    }}
                  />
                  <Typography
                    variant="h6"
                    sx={{ color: "#B8860B", fontWeight: "bold" }}
                  >
                    {item.title}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
