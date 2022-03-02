import { IconButton, Input, Paper } from "@mui/material";
import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import { getImages, setLoading } from "../redux/actions/newsActions";

const Search = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState("");
  const submit = () => {
    if (value.trim().length) {
      setLoading(true);
      navigate(`../photos/${value.toLowerCase()}/1`);
      setValue("");
    }
  };
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        px: 3,
        height: "100%",
        borderRadius: 4,
        bgcolor: (theme) => theme.palette.light,
      }}
    >
      <Input
        value={value}
        placeholder="Search for free photos..."
        sx={{ flex: 1, py: 2, fontSize: 22 }}
        disableUnderline
        onChange={(e) => {
          setValue(e.target.value);
        }}
      />
      <IconButton onClick={submit} size={"large"}>
        <GoSearch style={{ fontSize: "24px" }} />
      </IconButton>
    </Paper>
  );
};

export default Search;
