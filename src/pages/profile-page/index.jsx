import AspectRatio from "@mui/joy/AspectRatio";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import Divider from "@mui/joy/Divider";
import FormControl from "@mui/joy/FormControl";
import FormLabel from "@mui/joy/FormLabel";
import Input from "@mui/joy/Input";
import IconButton from "@mui/joy/IconButton";
import Stack from "@mui/joy/Stack";
import Typography from "@mui/joy/Typography";
import Card from "@mui/joy/Card";
import CardActions from "@mui/joy/CardActions";
import CardOverflow from "@mui/joy/CardOverflow";
import EmailRoundedIcon from "@mui/icons-material/EmailRounded";
import EditRoundedIcon from "@mui/icons-material/EditRounded";
import { useEffect, useState } from "react";
import FileUpload from "../../components/FileUpload/index";
import DropZone from "../../components/DropZone/index";
import LocationSelector from "../../components/LocationSelector/index";
import axios from "axios";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";
import { selectTokens } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const API_BASE_URL = import.meta.env.VITE_BASE_URL;

export default function MyProfile() {
  const [files, setFiles] = useState([]);
  const [avatar, setAvatar] = useState(
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=286"
  );
  const tokens = useSelector(selectTokens);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleDrop = (event) => {
    event.preventDefault();
    const newFiles = Array.from(event.dataTransfer.files).map((file) => ({
      name: file.name,
      size: (file.size / 1024).toFixed(2) + " KB",
      progress: 0,
    }));
    setFiles((prev) => [...prev, ...newFiles]);
    simulateUpload(newFiles);
  };

  const simulateUpload = (newFiles) => {
    newFiles.forEach((file, index) => {
      let progress = 0;
      const interval = setInterval(() => {
        progress += 10;
        setFiles((prev) =>
          prev.map((f, i) =>
            i === prev.length - newFiles.length + index ? { ...f, progress } : f
          )
        );
        if (progress >= 100) clearInterval(interval);
      }, 300);
    });
  };

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => setAvatar(e.target.result);
      reader.readAsDataURL(file);
    }
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

  const handlePasswordChange = async () => {
    if (newPassword !== confirmPassword) {
      alert("Mật khảu và xác nhận mật khẩu không khớp nhau!");
      return;
    }
    if (!oldPassword || !newPassword) {
      alert("Vui lòng điền đầy đủ thông tin!");
      return;
    }
    try {
      const payload = {
        id: user ? user._id : "",
        oldPassword: oldPassword,
        newPassword: newPassword,
      };

      const response = await axios.patch(
        `${API_BASE_URL}user/changePassword`,
        payload
      );
      if (response.data.status === 200 || response.status === 200) {
        alert("Đổi mật khẩu thành công!");
        setIsPasswordModalOpen(false);
        setOldPassword("");
        setNewPassword("");
        setConfirmPassword("");
      } else {
        alert(response.data.message || "Có lỗi xảy ra!");
      }
    } catch (error) {
      console.error(
        "Lỗi chi tiết:",
        error.response ? error.response.data : error.message
      );
      alert("Có lỗi xảy ra khi đổi mật khẩu!");
    }
  };
  const handleSave = async () => {
    if (!user) {
      alert("Không có dữ liệu người dùng!");
      return;
    }
    try {
      const response = await axios.patch(
        `${API_BASE_URL}user/update/${user._id}`,
        {
          username: user.username,
          //   email: user.email,
          //   phone: user.phone,
        }
      );
      if (response.data.status === 200 || response.status === 200) {
        alert("Cập nhật thông tin thành công!");
        setUser(response.data.data);
      } else {
        alert(response.data.message || "Cập nhật thất bại!");
      }
    } catch (error) {
      console.error("Lỗi cập nhật user:", error);
      alert("Có lỗi xảy ra khi cập nhật thông tin!");
    }
  };
  return (
    <Box sx={{ flex: 1, width: "100%" }}>
      <Stack
        spacing={4}
        sx={{
          display: "flex",
          maxWidth: "800px",
          mx: "auto",
          px: { xs: 2, md: 6 },
          py: { xs: 2, md: 3 },
          marginTop: 10,
        }}
      >
        <Card>
          <Box sx={{ mb: 1 }}>
            <Typography level="title-md">Thông tin cá nhân</Typography>
            <Typography level="body-sm">
              Tùy chỉnh cách thông tin hồ sơ của bạn sẽ hiển thị trên mạng.
            </Typography>
          </Box>
          <Divider />
          <Stack direction="row" spacing={3} sx={{ my: 1 }}>
            <Stack direction="column" spacing={1} alignItems="center">
              <AspectRatio
                ratio="1"
                maxHeight={200}
                sx={{ flex: 1, minWidth: 120, borderRadius: "100%" }}
              >
                <img src={avatar} loading="lazy" alt="Avatar" />
              </AspectRatio>
              <input
                type="file"
                accept="image/*"
                id="avatar-upload"
                style={{ display: "none" }}
                onChange={handleAvatarChange}
              />
              <IconButton
                aria-label="upload new picture"
                size="sm"
                variant="outlined"
                color="neutral"
                sx={{
                  bgcolor: "background.body",
                  position: "absolute",
                  zIndex: 2,
                  borderRadius: "50%",
                  left: 100,
                  top: 170,
                  boxShadow: "sm",
                }}
                onClick={() => document.getElementById("avatar-upload").click()}
              >
                <EditRoundedIcon />
              </IconButton>
            </Stack>
            <Stack spacing={2} sx={{ flexGrow: 1 }}>
              <FormControl>
                <FormLabel>Tên người dùng</FormLabel>
                <Input
                  size="sm"
                  placeholder="Full Name"
                  value={user ? user.username : ""}
                  onChange={(e) =>
                    setUser({ ...user, username: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Mật khẩu</FormLabel>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Input
                    size="sm"
                    type="password"
                    value="*****"
                    disabled
                    sx={{ flexGrow: 1 }}
                  />
                  <Button
                    size="sm"
                    onClick={() => setIsPasswordModalOpen(true)}
                    sx={{ ml: 1, bgcolor: "#CD5700" }}
                  >
                    Đổi mật khẩu
                  </Button>
                </Box>
              </FormControl>
              <Stack direction="row" spacing={4}>
                <FormControl sx={{ flexGrow: 2 }}>
                  <FormLabel>Email</FormLabel>
                  <Input
                    size="sm"
                    type="email"
                    startDecorator={<EmailRoundedIcon />}
                    value={user ? user.email : ""}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                  />
                </FormControl>
                <FormControl sx={{ flexGrow: 2 }}>
                  <FormLabel>Số điện thoại</FormLabel>
                  <Input
                    size="sm"
                    value={user ? user.phone : ""}
                    onChange={(e) =>
                      setUser({ ...user, phone: e.target.value })
                    }
                  />
                </FormControl>
              </Stack>
              <LocationSelector />
            </Stack>
          </Stack>
          <DropZone
            sx={{ display: "none" }}
            onDragOver={(e) => e.preventDefault()}
            onDrop={handleDrop}
          />

          <Box sx={{ mt: 2 }}>
            {files.map((file, index) => (
              <FileUpload
                key={index}
                fileName={file.name}
                fileSize={file.size}
                progress={file.progress}
              />
            ))}
          </Box>
          <CardOverflow sx={{ borderTop: "1px solid", borderColor: "divider" }}>
            <CardActions sx={{ alignSelf: "flex-end", pt: 2 }}>
              <Button size="sm" variant="outlined" color="neutral">
                Cancel
              </Button>
              <Button
                size="sm"
                sx={{ backgroundColor: "#CD5700" }}
                onClick={handleSave}
              >
                Save
              </Button>
            </CardActions>
          </CardOverflow>
        </Card>
      </Stack>

      {/* Modal đổi mật khẩu */}
      <Dialog
        open={isPasswordModalOpen}
        onClose={() => setIsPasswordModalOpen(false)}
        PaperProps={{
          sx: {
            bgcolor: "#F7E7CE",
            borderRadius: "16px",
            p: 2,
          },
        }}
      >
        <DialogTitle
          sx={{ textAlign: "center", color: "#C46210", fontWeight: "bold" }}
        >
          Đổi mật khẩu
        </DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="Mật khẩu hiện tại"
            type={showCurrent ? "text" : "password"}
            fullWidth
            variant="standard"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowCurrent(!showCurrent)}
                    edge="end"
                  >
                    {showCurrent ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="dense"
            label="Mật khẩu mới"
            type={showNew ? "text" : "password"}
            fullWidth
            variant="standard"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={() => setShowNew(!showNew)} edge="end">
                    {showNew ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <TextField
            margin="dense"
            label="Xác nhận mật khẩu mới"
            type={showConfirm ? "text" : "password"}
            fullWidth
            variant="standard"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowConfirm(!showConfirm)}
                    edge="end"
                  >
                    {showConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        </DialogContent>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            onClick={() => setIsPasswordModalOpen(false)}
            variant="outlined"
          >
            Hủy
          </Button>
          <Button
            onClick={handlePasswordChange}
            variant="contained"
            sx={{ backgroundColor: "#C46210", color: "#fff" }}
          >
            Lưu
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}
