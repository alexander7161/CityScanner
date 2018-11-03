import React from "react";
import Button from "@material-ui/core/Button";
import Refresh from "@material-ui/icons/Refresh";
import Swipe from "./Swipe";
import { BounceLoader } from "react-spinners";
import { connect } from "react-redux";
import { fetchPackages } from "../store/actions";

class Swiper extends React.Component {
  state = {
    done: false
  };

  componentDidMount() {
    this.props.dispatch(fetchPackages("London"));
  }

  toggleDone = () => {
    this.setState({ done: !this.state.done });
  };
  render() {
    const { isFetching } = this.props;
    return (
      <div>
        {isFetching && (
          <div style={{ position: "absolute" }}>
            <BounceLoader />
          </div>
        )}
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

function mapStateToProps(state) {
  return {
    isFetching: state.isFetching
  };
}

export default connect(mapStateToProps)(Swiper);
