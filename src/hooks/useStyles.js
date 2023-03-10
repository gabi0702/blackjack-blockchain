import { makeStyles } from "@material-ui/styles";

export const useStyles = makeStyles({
  playArea: {
    margin: "10px 10px",
  },
  coinArea: {
    height: "80px",
    padding: "10px",
    color: "#fff",
  },
  messageArea: {
    margin: "4px",
  },
  message: {
    fontSize: "16px",
    color: "white",
  },
  winOrLoseContainer: {
    height: "50px",
    // margin: "-50px auto 0px"
  },
  winOrLose: {
    border: "1px solid black",
    backgroundColor: "grey",
    height: "40px",
    fontSize: "1.3em",
    fontWeight: "bold",
    color: "white",
    lineHeight: "40px",
    opacity: 0.8,
  },
});
