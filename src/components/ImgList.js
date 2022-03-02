import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useSelector } from "react-redux";
import { Avatar, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Masonry from "@mui/lab/Masonry";
import { BsDownload, BsPlusCircle, BsSuitHeart } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function MyImageList() {
  const images = useSelector((state) => state.photos.photos);
  console.log(images);
  return (
    <Masonry
      spacing={2}
      variant={"masonry"}
      sx={{ width: "100%" }}
      columns={{ sx: 1, sm: 2, md: 3, lg: 4 }}
    >
      {images.map((item) => (
        <ImageListItem
          component={"div"}
          sx={{ position: "relative" }}
          key={item.src.medium || ""}
          sx={{ overflow: "hidden", width: "100%" }}
        >
          <img
            src={item.src.medium}
            srcSet={item.src.medium}
            alt={item.alt}
            loading="lazy"
          />
          <Box
            sx={{
              width: "100%",
              height: "100%",
              position: "absolute",
              top: 0,
              left: 0,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              opacity: 0,
              padding: " 20px 10px",
              transition: "all .3s ease",
              "div:hover > &": { opacity: 1 },
              backgroundImage:
                "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.3024874521456553) 52%, rgba(255,255,255,0) 100%)",
            }}
          >
            <Typography sx={{ color: "#fff" }}>{item.alt}</Typography>
            <Box
              display={"flex"}
              justifyContent="space-between"
              alignItems={"center"}
              sx={{
                color: "white",
                width: "100%",
              }}
            >
              <Box
                display={"flex"}
                alignItems="center"
                sx={{ maxWidth: "60%" }}
              >
                <Avatar
                  alt={item.photographer}
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
                <Typography noWrap={true} sx={{ ml: 1 }}>
                  {item.photographer}
                </Typography>
              </Box>
              <Box sx={{ "& i, & svg": { color: "#fff" } }}>
                <IconButton>
                  <Link to={item.src.medium} download target={"_blank"}>
                    <BsDownload />
                  </Link>
                </IconButton>
                <IconButton>
                  <BsPlusCircle />
                </IconButton>
                <IconButton>
                  <BsSuitHeart />
                </IconButton>
              </Box>
            </Box>
          </Box>
        </ImageListItem>
      ))}
    </Masonry>
  );
}
