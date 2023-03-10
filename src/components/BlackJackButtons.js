import React, { useEffect } from "react";
import { Box, Button } from "@material-ui/core";

export default function BlackJackButtons(props) {
  useEffect(() => {
    function click(event) {
      switch (event.key) {
        case "h":
          props.onClickHit();
          break;
        case "s":
          props.onClickStand();
          break;
        default:
          break;
      }
    }
    document.body.addEventListener("keydown", click, {
      passive: false,
    });
    return () => {
      document.body.removeEventListener("keydown", click, {
        passive: false,
      });
    };
  }, []);

  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      flexWrap="wrap"
    >
      <Box mx={0}>
        <Button variant="contained" onClick={props.onClickHit}>
          Hit
        </Button>
      </Box>
      <Box mx={1}>
        <Button variant="contained" onClick={props.onClickStand}>
          Stand
        </Button>
      </Box>
    </Box>
  );
}
