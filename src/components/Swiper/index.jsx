import React from "react";
import Button from "@material-ui/core/Button";
import Refresh from "@material-ui/icons/Refresh";
import Swipe from "./Swipe";

class Swiper extends React.Component {
  state = {
    done: false
  };

  toggleDone = () => {
    this.setState({ done: !this.state.done });
  };
  render() {
    return (
      <div>
        {this.state.done ? (
          <Button
            variant="fab"
            color="secondary"
            aria-label="Refresh"
            onClick={this.toggleDone}
            style={{ top: "100px", zIndex: 1 }}
          >
            <Refresh />
          </Button>
        ) : (
          <Swipe
            toggleDone={this.toggleDone}
            data={["Alexandre", "Thomas", "Lucien"]}
          />
        )}

        <Button
          style={{
            position: "fixed",
            bottom: "10%",
            left: "25%"
          }}
          variant="fab"
          color="primary"
          aria-label="Refresh"
        />
        <Button
          style={{
            position: "fixed",
            bottom: "10%",
            right: "25%"
          }}
          variant="fab"
          color="secondary"
          aria-label="Refresh"
        />
      </div>
    );
  }
}

export default Swiper;
