import { Box, TextField, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Category = ({ item }) => {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        width: "100%",
        padding: 2,
        borderRadius: 2,
        boxShadow: 5,
        textAlign: "center",
        cursor: "pointer",
        backgroundImage: `url('${item.img || ""}')`,
        backgroundSize: "cover",
      }}
      onClick={() => navigate(`/photos/${item.name.toLowerCase()}/1`)}
    >
      <Typography
        variant={"h6"}
        sx={{
          display: "block",
          width: "100%",
          backgroundImage:
            "url('https://www.seekpng.com/png/full/24-243482_line-transparent-grunge-black-grunge-banner-png.png')",
          color: "#fff",
          backgroundSize: "cover",
          fontWeight: "bold",
        }}
      >
        {item.name}
      </Typography>
    </Box>
  );
};

export default Category;
