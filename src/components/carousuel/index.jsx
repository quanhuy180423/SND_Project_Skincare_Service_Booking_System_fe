import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 1024, min: 768 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function MuiCarousel({ autoplay = false }) {
  return (
    <Box sx={{ position: "relative", width: "100%", overflow: "hidden" }}>
      <Carousel
        responsive={responsive}
        autoPlay={autoplay}
        autoPlaySpeed={5000}
        infinite
        showDots
        containerClass="carousel-container"
      >
        <Box
          component="img"
          src="https://img.freepik.com/free-vector/realistic-spa-health-landing-page-template_23-2149658136.jpg?t=st=1739982669~exp=1739986269~hmac=7a9cd99741d45098e60f678de3665df83417d6201edba55f48ba03917735151d&w=1380"
          alt="TENWEB"
          sx={{
            width: "100%",
            height: "70vh",
            objectFit: "cover",
            objectPosition: "center",
          }}
        />
      </Carousel>
    </Box>
  );
}
