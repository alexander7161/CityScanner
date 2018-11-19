import React from "react";
import Button from "@material-ui/core/Button";
import Refresh from "@material-ui/icons/Refresh";
import Swipe from "./Swipe";
import { BounceLoader } from "react-spinners";
import { connect } from "react-redux";
import { fetchPackages, swipeRight } from "../store/actions";
import Close from "@material-ui/icons/Close";
import Check from "@material-ui/icons/Check";
import SvgIcon from "@material-ui/core/SvgIcon";

class Swiper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
      currentIndex: 0
    };
    this.childCards = React.createRef();
  }
  componentDidMount() {
    this.props.dispatch(fetchPackages(this.props.location));
  }

  toggleDone = () => {
    this.setState({ done: !this.state.done });
  };

  swipeRight = index => {
    this.swipeLeft();
    this.props.dispatch(swipeRight(index));
  };

  swipeLeft = () => {
    this.setState({ currentIndex: this.state.currentIndex + 1 });
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
          <Swipe
            childCards={this.childCards}
            swipeRight={this.swipeRight}
            swipeLeft={this.swipeLeft}
            items={this.props.items}
            currentIndex={this.state.currentIndex}
            toggleDone={this.toggleDone}
          />
        )}

        {this.props.items.length === 0 && (
          <div> No results, try setting another location in the settings</div>
        )}

        <Button
          style={{
            position: "fixed",
            bottom: "7%",
            left: "12%",
            zIndex: 0,
            width: 68,
            height: 68,
            backgroundColor: "White"
          }}
          variant="fab"
          //  color="secondary"
          aria-label="Refresh"
          onClick={
            this.state.done
              ? () => {}
              : () => {
                  this.childCards.current.removeCard("Left");
                  this.swipeLeft();
                }
          }
        >
          <SvgIcon style={{ color: "#d93c72" }}>
            <path
              id="Path_15"
              data-name="Path 15"
              className="cls-1"
              d="M16.895,11.589l5.736-5.736a1.8,1.8,0,0,0,.546-1.327A1.807,1.807,0,0,0,22.631,3.2L19.978.546a1.884,1.884,0,0,0-2.653,0L11.589,6.282,5.853.546A1.806,1.806,0,0,0,4.526,0,1.807,1.807,0,0,0,3.2.546L.546,3.2A1.806,1.806,0,0,0,0,4.526,1.806,1.806,0,0,0,.546,5.853l5.736,5.736L.546,17.324a1.884,1.884,0,0,0,0,2.653L3.2,22.631a1.806,1.806,0,0,0,1.327.546,1.807,1.807,0,0,0,1.327-.546L11.589,16.9l5.736,5.736a1.884,1.884,0,0,0,2.653,0l2.653-2.653a1.884,1.884,0,0,0,0-2.653Z"
            />
          </SvgIcon>{" "}
        </Button>
        <Button
          style={{
            position: "fixed",
            bottom: "7%",
            right: "12%",
            zIndex: 0,
            width: 68,
            height: 68,
            backgroundColor: "White"
          }}
          variant="fab"
          // color="primary"
          aria-label="Refresh"
          onClick={
            this.state.done
              ? () => {}
              : () => {
                  this.childCards.current.removeCard("Right");
                  this.swipeRight(this.childCards.current.state.index);
                }
          }
        >
          <SvgIcon style={{ color: "#4817f6", width: 68 }}>
            <path
              id="heart"
              className="cls-1"
              d="M25.264,34.6c-3.992-5.183-11.849-2.125-11.849,3.139,0-5.264-7.858-8.322-11.85-3.139-4.127,5.359-.059,14.746,11.85,20.138C25.323,49.349,29.39,39.962,25.264,34.6Z"
              transform="translate(0.001 -31.928)"
            />
          </SvgIcon>
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
