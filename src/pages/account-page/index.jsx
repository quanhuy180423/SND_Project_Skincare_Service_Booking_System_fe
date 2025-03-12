import {
  Container,
  Box,
  Typography,
  Button,
  Badge,
  Tab,
  Tabs,
} from "@mui/material";
import { TabContext, TabList } from "@mui/lab";

import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   ClockIcon,
//   CheckCircleIcon,
//   XCircleIcon,
// } from "@heroicons/react/24/outline";
import MyProfile from "../profile-page";

export default function AccountPage() {
  //   const [activeFilter, setActiveFilter] = useState("upcoming");
  //   const navigate = useNavigate();
  const [value, setValue] = useState("0");

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  return (
    <Container sx={{ p: 15 }}>
      <TabContext value={value}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{ bgcolor: "transparent" }}
        >
          <TabList
            sx={{
              pl: { xs: 0, md: 4 },
              justifyContent: "left",
              [`&& .MuiTabs-indicator`]: {
                bgcolor: "primary.500",
                height: "2px",
              },
            }}
          >
            <Tab
              sx={{ borderRadius: "6px 6px 0 0" }}
              value="0"
              label="Trang cá nhân"
            />
            <Tab
              sx={{ borderRadius: "6px 6px 0 0" }}
              value="1"
              label="Lịch sử giao dịch"
            />
            <Tab
              sx={{ borderRadius: "6px 6px 0 0" }}
              value="3"
              label="Cài đặt"
            />
          </TabList>
        </Tabs>
      </TabContext>
      <MyProfile />
    </Container>
  );
}
