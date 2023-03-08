import "./styles.css";
import { Box, Typography } from "@material-ui/core";
import BlackJack from "./BlackJack";
import React from "react";
import { useEffect } from "react";

export default function App() {
  return (
    <Box className="App">
      {/* <Typography variant="h1">
        <Box className={"h1-header"}>BlackJack</Box>
      </Typography> */}
      <Box id="table">
        <BlackJack />
      </Box>
    </Box>
  );
}
