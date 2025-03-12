import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Menu,
  MenuItem,
  ListItemIcon,
  Typography,
  Divider,
  IconButton,
  Box,
} from "@mui/material";
import { Settings, Logout, AccountCircle, Receipt } from "@mui/icons-material";
import { toast } from "react-toastify";
import {
  logout,
  selectTokens,
  selectUser,
} from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

const UserMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const dispatch = useDispatch();
  //   const user = useSelector(selectUser);
  const tokens = useSelector(selectTokens);

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch(logout());
    toast.success("Đăng xuất thành công!");
    navigate("/");
    handleClose();
  };

  useEffect(() => {
    const fetchUser = async () => {
      if (!tokens) {
        console.error("Không tìm thấy token, cần đăng nhập lại!");
        navigate("/login");
        return;
      }
      try {
        const response = await fetch("http://localhost:8555/api/user/getMe", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${tokens?.accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("User Data:", data);
        setUser(data.data.DT);
      } catch (error) {
        console.error("Lỗi khi lấy user:", error);
      }
    };

    fetchUser();
  }, [tokens]);
  return (
    <Box>
      <IconButton onClick={handleClick}>
        <Avatar
          alt={user?.username}
          src={user?.avatar}
          sx={{ width: 40, height: 40, border: "2px solid #E0AB76" }}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          sx: {
            bgcolor: "#FFF8E7",
            borderRadius: "12px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            minWidth: 200,
          },
        }}
      >
        <MenuItem
          disableRipple
          sx={{ display: "flex", alignItems: "center", gap: 1 }}
        >
          <Avatar src={user?.avatar} sx={{ width: 40, height: 40 }} />
          <Box>
            <Typography
              variant="body1"
              sx={{ fontWeight: "bold", color: "#CD5700" }}
            >
              {user?.username || "Người dùng"}
            </Typography>
            <Typography variant="caption" sx={{ color: "#7A5C47" }}>
              {user?.email}
            </Typography>
          </Box>
        </MenuItem>
        <Divider />

        <MenuItem
          onClick={() => {
            handleClose();
            navigate("/profile");
          }}
          sx={{
            "&:hover": { bgcolor: "#E6A817", color: "white" },
            borderRadius: "8px",
            margin: "5px",
          }}
        >
          <ListItemIcon>
            <AccountCircle fontSize="small" />
          </ListItemIcon>
          Trang cá nhân
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          sx={{
            "&:hover": { bgcolor: "#E6A817", color: "white" },
            borderRadius: "8px",
            margin: "5px",
          }}
        >
          <ListItemIcon>
            <Receipt fontSize="small" />
          </ListItemIcon>
          Lịch sử giao dịch
        </MenuItem>

        <MenuItem
          onClick={handleClose}
          sx={{
            "&:hover": { bgcolor: "#E6A817", color: "white" },
            borderRadius: "8px",
            margin: "5px",
          }}
        >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Cài đặt
        </MenuItem>

        <Divider />

        {/* Đăng xuất */}
        <MenuItem
          onClick={handleLogout}
          sx={{
            "&:hover": { bgcolor: "#D9534F", color: "white" },
            borderRadius: "8px",
            margin: "5px",
          }}
        >
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Đăng xuất
        </MenuItem>
      </Menu>
    </Box>
  );
};

export default UserMenu;
