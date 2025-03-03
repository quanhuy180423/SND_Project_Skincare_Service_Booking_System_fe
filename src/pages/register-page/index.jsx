import CssBaseline from "@mui/material/CssBaseline";
import { Stack } from "@mui/material";
import Content from "@/components/ContentLogin";
import RegisterCard from "@/components/RegisterCard";

export default function RegisterPage() {
  return (
    <>
      <CssBaseline />
      <Stack
        direction="column"
        component="main"
        sx={{
          justifyContent: "center",
          height: "100%",
          minHeight: "100vh",

          background: `linear-gradient(to right, rgba(255, 229, 180, 0.6), rgba(251, 206, 177, 0.6)), 
          url("https://img.freepik.com/premium-photo/spa-background-natural-spa-cosmetics-products-eco-friendly-bathroom-accessories-flat-lay-top-view_257163-6.jpg?w=1380")`,
        }}
      >
        <Stack
          direction={{ xs: "column-reverse", md: "row" }}
          sx={{
            justifyContent: "center",
            gap: { xs: 6, sm: 12 },
            p: 2,
            mx: "auto",
          }}
        >
          <Stack
            direction={{ xs: "column-reverse", md: "row" }}
            sx={{
              justifyContent: "center",
              gap: { xs: 6, sm: 12 },
              p: { xs: 2, sm: 4 },
              m: "auto",
            }}
          >
            <Content />
            <RegisterCard />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
}
