import React from "react";
import Cards, { Card } from "./Card";
import MUCard from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import "./style.css";
function action(text) {
  console.log(text);
}

const CustomAlertLeft = () => <span>Nop</span>;
const CustomAlertRight = () => <span>Ok</span>;

const Wrapper = props => {
  return (
    <Cards
      size={["100%", "100vh"]}
      onEnd={props.toggleDone}
      className="master-root"
      alertLeft={CustomAlertLeft}
      alertRight={CustomAlertRight}
    >
      {props.data.map((item, key) => (
        <Card
          key={key}
          onSwipeLeft={() => action("swipe left")}
          onSwipeRight={() => action("swipe right")}
        >
          <FancyCard name={item} />
        </Card>
      ))}
    </Cards>
  );
};

const FancyCard = props => (
  <MUCard
    style={{
      marginTop: "8px",
      height: "100%",
      backgroundColor:
        props.swipeDirection === "left"
          ? "red"
          : props.swipeDirection === "right"
            ? "green"
            : "white"
    }}
  >
    <CardContent>
      <Typography variant="title" color="textSecondary" gutterBottom>
        {props.name}
      </Typography>
    </CardContent>
  </MUCard>
);
export default Wrapper;
