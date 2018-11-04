import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BackArrow from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";

class Summary extends React.Component {
  render() {
    const { item } = this.props;
    if (item) {
      return (
        <div>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => this.props.history.push("/")}
            style={{ left: "8px", position: "absolute" }}
          >
            <BackArrow style={{ color: "white" }} />
          </IconButton>
          <img
            src={item.Photo}
            style={{
              width: "100%",
              zIndex: 0
            }}
          />
        </div>
      );
    }
    return <div />;
  }
}

function mapStateToProps(state, props) {
  const { summaryID } = props.match.params;
  var item = state.packages.favouriteItems.find(i => (i.id = summaryID));
  if (!item) {
    item = state.packages.items.find(i => (i.id = summaryID));
  }

  if (!item) {
    props.history.push("/");
  }
  return {
    item
  };
}
export default connect(mapStateToProps)(withRouter(Summary));
