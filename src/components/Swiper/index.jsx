import React from "react";
import Button from "@material-ui/core/Button";
import Refresh from "@material-ui/icons/Refresh";
import Swipe from "./Swipe";
import { BounceLoader } from "react-spinners";
import { connect } from "react-redux";
import { fetchPackages } from "../store/actions";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";

class Swiper extends React.Component {
  state = {
    done: false
  };

  componentDidMount() {
    this.props.dispatch(fetchPackages(this.props.location));
  }

  toggleDone = () => {
    this.setState({ done: !this.state.done });
  };
  render() {
    const { isFetching } = this.props;
    return (
      <div>
        {isFetching && (
          <div
            style={{
              position: "absolute",
              zIndex: 9999,
              left: "50%",
              transform: "translate(-50%, 0)"
            }}
          >
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
          <Swipe items={this.props.items} toggleDone={this.toggleDone} />
        )}

        {this.props.items.length === 0 && (
          <div> No results, try setting another location in the settings</div>
        )}

        <Button
          style={{
            position: "fixed",
            bottom: "10%",
            left: "25%",
            zIndex: 0
          }}
          variant="fab"
          color="secondary"
          aria-label="Refresh"
        >
          <Close />
        </Button>
        <Button
          style={{
            position: "fixed",
            bottom: "10%",
            right: "25%",
            zIndex: 0
          }}
          variant="fab"
          color="primary"
          aria-label="Refresh"
        >
          <Check />
        </Button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    items: state.packages.items,
    isFetching: state.packages.isFetching,
    location: state.location.location
  };
}

export default connect(mapStateToProps)(Swiper);
