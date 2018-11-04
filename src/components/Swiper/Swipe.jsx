import React from "react";
import Cards, { Card } from "./Card";
import CardComponent from "./CardComponent";
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
      {props.items.map((item, key) => (
        <Card
          key={key}
          onSwipeLeft={() => action("swipe left")}
          onSwipeRight={() => action("swipe right")}
        >
          <CardComponent item={item} />
        </Card>
      ))}
    </Cards>
  );
};

export default Wrapper;
