import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import BackArrow from "@material-ui/icons/ArrowBack";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

class Summary extends React.Component {
  render() {
    const { item } = this.props;
    if (item) {
      return (
        <div style={{ height: "100%" }}>
          <IconButton
            color="inherit"
            aria-label="Menu"
            onClick={() => this.props.history.push("/")}
            style={{ left: "8px", position: "absolute", zIndex: 99 }}
          >
            <BackArrow style={{ color: "white" }} />
          </IconButton>
          <div style={{ position: "relative", height: "100%" }}>
            <div
              style={{
                position: "absolute",
                height: "100%",
                background: "rgb(0,0,0)",
                background:
                  "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,212,255,0) 61%, rgba(9,9,121,0) 100%)",
                zIndex: 2,
                width: "100%"
              }}
            />
            <div
              style={{
                position: "absolute",
                height: "100%"
              }}
            >
              <img
                src={this.props.item.Photo}
                style={{
                  width: "100%",
                  width: "auto",
                  zIndex: 0
                }}
              />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 4,
                left: 16,
                color: "white",
                zIndex: 3
              }}
            >
              <Typography
                style={{ color: "white", fontWeight: "bold" }}
                variant="h5"
                gutterBottom
              >
                {this.props.item.To}, {this.props.item.MinPrice}€
              </Typography>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: 32,
                left: 16,
                color: "white",
                zIndex: 3
              }}
            >
              <Typography
                style={{ color: "white", fontWeight: "bold" }}
                variant="subtitle1"
                gutterBottom
              >
                {this.props.item.date}
              </Typography>
            </div>
          </div>
          <div
            style={{ position: "absolute", bottom: 16, left: "0", right: 0 }}
          >
            <Button variant="contained" size="large" color="primary">
              Book
            </Button>
          </div>
        </div>
      );
    }
    return <div />;
  }
}

function mapStateToProps(state, props) {
  const { summaryID } = props.match.params;
  var item = state.packages.favouriteItems.find(i => i.id === summaryID);
  if (!item) {
    item = state.packages.items.find(i => i.id === summaryID);
  }

  if (!item) {
    props.history.push("/");
  }
  return {
    item
  };
}
export default connect(mapStateToProps)(withRouter(Summary));
