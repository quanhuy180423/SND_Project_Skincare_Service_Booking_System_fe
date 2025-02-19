import { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  TextField,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Search, Menu } from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

function HeaderMidle() {
  const [inputSearch, setInputSearch] = useState("");
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Kiểm tra màn hình nhỏ hơn "md" (960px)

  const handleSearch = () => {
    sessionStorage.setItem("search", "true");
    console.log("Search input:", inputSearch);
  };

  const navLinks = [
    { to: "/", text: "Trang chủ" },
    { to: "/introduction", text: "Giới thiệu" },
    { to: "/price-list", text: "Bảng giá" },
    { to: "/treatment-plan", text: "Liệu trình" },
    { to: "/connect", text: "Liên hệ" },
    { to: "/news", text: "Tin tức" },
  ];

  return (
    <AppBar
      position="fixed"
      sx={{
        backgroundColor: "#FBCEB1",
        padding: 1,
        top: 0,
        zIndex: 1201,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Logo + Menu */}
        <Box display="flex" alignItems="center">
          {/* Menu icon for mobile */}
          {isMobile && (
            <IconButton
              onClick={() => setOpenDrawer(true)}
              sx={{ color: "#4B3621" }}
            >
              <Menu />
            </IconButton>
          )}

          <Link to="/">
            <img
              src="https://img.freepik.com/premium-vector/beauty-spa-venus-logo-lineart-outline-woman-logo_685964-1.jpg?w=826"
              alt="logo"
              style={{
                height: 50,
                maxWidth: "100%",
                marginLeft: isMobile ? 10 : 0, // Dịch sang phải trên mobile
                borderRadius: "50%",
              }}
            />
          </Link>

          {/* Nav buttons - Chỉ hiện trên desktop */}
          {!isMobile && (
            <Box display="flex" gap={2} ml={3}>
              {navLinks.map((link) => (
                <Button
                  key={link.to}
                  component={Link}
                  to={link.to}
                  color="inherit"
                  sx={{
                    fontSize: "0.9rem",
                    color: "#4B3621",
                    "&:hover": { color: "#E6A817" },
                  }}
                >
                  {link.text}
                </Button>
              ))}
            </Box>
          )}
        </Box>

        {/* Search + Button */}
        {!isMobile && (
          <Box display="flex" alignItems="center">
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                backgroundColor: "#FFF8E7",
                borderRadius: 20,
                padding: "0 10px",
                marginRight: 1,
              }}
            >
              <TextField
                size="small"
                placeholder="Nhập tên dịch vụ cần tìm"
                onChange={(e) => setInputSearch(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSearch()}
                sx={{ fontSize: "0.9rem", width: 160 }}
              />
              <IconButton onClick={handleSearch}>
                <Search sx={{ fontSize: "1.2rem" }} />
              </IconButton>
            </Box>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#E0AB76",
                marginLeft: 2,
                borderRadius: 30,
                fontSize: "0.9rem",
              }}
            >
              Đặt lịch
            </Button>
          </Box>
        )}
      </Toolbar>

      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={() => setOpenDrawer(false)}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {navLinks.map((link) => (
              <ListItem key={link.to} disablePadding>
                <ListItemButton
                  component={Link}
                  to={link.to}
                  onClick={() => setOpenDrawer(false)}
                >
                  <ListItemText
                    primary={link.text}
                    sx={{ textAlign: "center", color: "#4B3621" }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
}

export default HeaderMidle;
