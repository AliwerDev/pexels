import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Search from "../../components/Search";

export default function CustomAppBar({ window }) {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
    target: window ? window() : undefined,
  });
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        sx={{
          bgcolor: trigger ? (theme) => theme.palette.primary : "transparent",
          boxShadow: trigger ? 4 : 0,
          py: 1,
          transition: "all .3s ease",
        }}
      >
        <Toolbar>
          <Box>
            <img
              style={{ width: "70px" }}
              src="https://www.dexines.com/wp-content/uploads/2021/09/pexels-logo.png"
              alt="pexels"
            />
          </Box>
          <Typography
            variant="h4"
            component="h6"
            sx={{ ml: 2, fontSize: "24px" }}
          >
            Pexels
          </Typography>
          <Box sx={{ width: "400px", height: "50px", ml: 5 }}>
            {trigger && <Search />}
          </Box>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </React.Fragment>
  );
}
CustomAppBar.propTypes = {
  window: PropTypes.func,
};
