import React from "react";
import Cards, { Card } from "./Card";
import CardComponent from "./CardComponent";
import "./style.css";

const CustomAlertLeft = () => <span>Nop</span>;
const CustomAlertRight = () => <span>Ok</span>;

const Wrapper = props => {
  return (
    <Cards
      size={["100%", "calc(100vh - 56px)"]}
      onEnd={props.toggleDone}
      className="master-root"
      alertLeft={CustomAlertLeft}
      alertRight={CustomAlertRight}
      ref={props.childCards}
    >
      {props.items.map((item, key) => (
        <Card
          key={key}
          onSwipeLeft={props.swipeLeft}
          onSwipeRight={() => props.swipeRight(key)}
        >
          <CardComponent item={item} />
        </Card>
      ))}
    </Cards>
  );
};

export default Wrapper;
