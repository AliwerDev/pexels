import React, { useEffect, useState } from "react";
import { Box, Container, Grid, Pagination, Typography } from "@mui/material";
import CustomAppBar from "../AppBar";
import Search from "../../components/Search";
import { useSelector } from "react-redux";
import MyImageList from "../../components/ImgList";
import { getImages } from "../../redux/actions/newsActions";
import { useNavigate, useParams } from "react-router-dom";
import Category from "../../components/Category";

const Home = () => {
  const { id, category } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getImages(id, category);
  }, [id, category]);

  const categories = useSelector((state) => state.photos.categories);

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "100vh",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundImage:
          "url('https://media.istockphoto.com/photos/closeup-nature-view-of-green-leaf-background-picture-id1208290498?b=1&k=20&m=1208290498&s=170667a&w=0&h=gBgk3i33pieBVDmVlnft31qL0D0rrcD_g1JZaAepg7k=')",
      }}
    >
      <CustomAppBar />
      <Box
        sx={{
          color: "#fff",
          width: "100%",
          overflowX: "hiddden",
          mt: { md: 10, sx: 7 },
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            minHeight: "60vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h3"
            sx={{ fontWeight: "bold", mb: 5, diaplay: "block" }}
            component={"h1"}
          >
            The best free stock photos, royalty free images & videos shared by
            creators.
          </Typography>
          <Search />
        </Container>
      </Box>
      <Box sx={{ width: "100%", background: "#fff", mt: { md: 10, sx: 5 } }}>
        <Container sx={{ padding: "40px 0" }}>
          <Grid container spacing={3}>
            {categories.map((item, i) => (
              <Grid item xs={6} sm={4} md={3} lg={2} xl={1} key={item + i}>
                <Category item={item}/>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Container maxWidth={"xl"}>
          <MyImageList />
        </Container>
        <Box sx={{ py: 5 }} display={"flex"} justifyContent="center">
          <Pagination
            count={20}
            defaultPage={parseInt(id)}
            sx={{ mt: 5 }}
            onChange={(e, page) => navigate(`/photos/${category}/${page}`)}
            variant="outlined"
            color="primary"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
