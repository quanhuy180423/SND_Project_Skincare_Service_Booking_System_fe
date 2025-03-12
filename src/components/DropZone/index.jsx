import { AspectRatio } from "@mui/icons-material";
import { Card, Typography } from "@mui/material";
import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";

export default function DropZone({ icon, sx, ...other }) {
  return (
    <Card
      variant="soft"
      {...other}
      sx={[
        {
          borderRadius: "sm",
          display: "flex",
          flexDirection: "column",
          gap: 1,
          alignItems: "center",
          px: 3,
          flexGrow: 1,
          boxShadow: "none",
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
    >
      <AspectRatio
        ratio="1"
        variant="solid"
        color="primary"
        sx={{ minWidth: 32, borderRadius: "50%", "--Icon-fontSize": "16px" }}
      >
        <div>{icon ?? <InsertDriveFileRoundedIcon />}</div>
      </AspectRatio>
      <Typography level="body-sm" sx={{ textAlign: "center" }}>
        <button
          style={{
            background: "none",
            border: "none",
            color: "blue",
            cursor: "pointer",
          }}
        >
          Click to upload
        </button>{" "}
        or drag and drop
        <br /> SVG, PNG, JPG or GIF (max. 800x400px)
      </Typography>
    </Card>
  );
}
