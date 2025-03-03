// import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded";
import SpaRoundedIcon from "@mui/icons-material/SpaRounded";
import FaceRetouchingNaturalRoundedIcon from "@mui/icons-material/FaceRetouchingNaturalRounded";
import ThumbUpAltRoundedIcon from "@mui/icons-material/ThumbUpAltRounded";

// import { SitemarkIcon } from "../CustomIcons";

const items = [
  {
    icon: <CalendarTodayRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Đặt lịch dễ dàng",
    description:
      "Lên lịch hẹn nhanh chóng, chủ động chọn thời gian phù hợp với bạn.",
  },
  {
    icon: <SpaRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Dịch vụ chuyên nghiệp",
    description: "Trải nghiệm chăm sóc da từ các chuyên gia và spa uy tín.",
  },
  {
    icon: <FaceRetouchingNaturalRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Tư vấn cá nhân hóa",
    description: "Lộ trình chăm sóc phù hợp với từng loại da của bạn.",
  },
  {
    icon: <ThumbUpAltRoundedIcon sx={{ color: "text.secondary" }} />,
    title: "Giao diện thân thiện",
    description: "Dễ sử dụng, giúp bạn tìm kiếm và đặt lịch nhanh chóng.",
  },
];

export default function Content() {
  return (
    <Stack
      sx={{
        flexDirection: "column",
        alignSelf: "center",
        gap: 4,
        maxWidth: 450,
      }}
    >
      {/* <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <SitemarkIcon />
      </Box> */}
      {items.map((item, index) => (
        <Stack key={index} direction="row" sx={{ gap: 2 }}>
          {item.icon}
          <div>
            <Typography gutterBottom sx={{ fontWeight: "medium" }}>
              {item.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {item.description}
            </Typography>
          </div>
        </Stack>
      ))}
    </Stack>
  );
}
