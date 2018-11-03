import React, { Component } from "react";
import Appbar from "./components/Appbar";
import Swipe from "./components/Swipe";
import Button from "@material-ui/core/Button";
import Refresh from "@material-ui/icons/Refresh";

class App extends Component {
  state = {
    done: false
  };

  toggleDone = () => {
    this.setState({ done: !this.state.done });
  };
  render() {
    return (
      <div className="App">
        <Appbar />
        {this.state.done ? (
          <Button
            variant="fab"
            color="secondary"
            aria-label="Refresh"
            onClick={this.toggleDone}
            style={{ top: "100px" }}
          >
            <Refresh />
          </Button>
        ) : (
          <Swipe
            toggleDone={this.toggleDone}
            data={["Alexandre", "Thomas", "Lucien"]}
          />
        )}
      </div>
    );
  }
}

export default App;
