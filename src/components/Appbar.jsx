import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Settings from "@material-ui/icons/Settings";
import { withRouter } from "react-router-dom";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import SvgIcon from "@material-ui/core/SvgIcon";
import { openDialog } from "./store/actions";

const styles = {
  root: {
    flexGrow: 1
  },
  grow: {
    flexGrow: 1
  }
};

class MenuAppBar extends React.Component {
  render() {
    const { classes } = this.props;

    console.log(this.props.location.pathname);
    var selected = 1;
    if (this.props.location.pathname.includes("list")) {
      selected = 2;
    }
    if (this.props.dialogOpen) {
      selected = 0;
    }

    return (
      <div className={classes.root}>
        <AppBar position="static" style={{ backgroundColor: "white" }}>
          <Toolbar>
            <div className={classes.grow}>
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={() => this.props.dispatch(openDialog())}
              >
                <SvgIcon
                  style={{ color: selected === 0 ? "#0F0437" : "#E7DEDC" }}
                >
                  <path
                    id="Path_47"
                    data-name="Path 47"
                    className="cls-1"
                    d="M22.3,110.315a.664.664,0,0,0-.134-.382q-1.07-1.281-1.72-2.2a9.388,9.388,0,0,0,.611-1.452l2.962-.459a.445.445,0,0,0,.306-.2.624.624,0,0,0,.133-.373v-3.535a.569.569,0,0,0-.133-.372.552.552,0,0,0-.325-.2l-2.9-.44a13.073,13.073,0,0,0-.65-1.567q.286-.421.86-1.147t.8-1.032a.639.639,0,0,0,.134-.363q0-.516-2.751-3.057a.634.634,0,0,0-.4-.153.559.559,0,0,0-.382.134l-2.255,1.7a8.411,8.411,0,0,0-1.433-.593l-.44-2.923a.492.492,0,0,0-.191-.334.583.583,0,0,0-.382-.143H10.452a.559.559,0,0,0-.573.459,21.964,21.964,0,0,0-.44,2.943,9.293,9.293,0,0,0-1.471.611l-2.2-1.72a.688.688,0,0,0-.4-.134q-.364,0-1.51,1.127a16.2,16.2,0,0,0-1.567,1.7.559.559,0,0,0-.134.382.727.727,0,0,0,.134.382q1.07,1.281,1.72,2.2a9.423,9.423,0,0,0-.611,1.452l-2.962.458a.444.444,0,0,0-.306.2.623.623,0,0,0-.134.373v3.535a.569.569,0,0,0,.134.372.47.47,0,0,0,.325.182l2.9.459a9.784,9.784,0,0,0,.669,1.567q-.306.421-.9,1.166t-.784,1.013a.641.641,0,0,0-.134.363q0,.517,2.752,3.058a.634.634,0,0,0,.4.152.516.516,0,0,0,.382-.134l2.255-1.7a8.371,8.371,0,0,0,1.433.592l.44,2.924a.492.492,0,0,0,.191.334.583.583,0,0,0,.382.143h3.554a.559.559,0,0,0,.573-.459,22.783,22.783,0,0,0,.44-2.962,8.651,8.651,0,0,0,1.471-.592l2.2,1.72a.687.687,0,0,0,.4.134q.363,0,1.5-1.137a19.981,19.981,0,0,0,1.576-1.71A.489.489,0,0,0,22.3,110.315Zm-6.612-3.4a4.713,4.713,0,0,1-3.458,1.433,4.892,4.892,0,0,1,0-9.783,4.891,4.891,0,0,1,3.458,8.35Z"
                    transform="translate(0 -91.227)"
                  />
                </SvgIcon>
              </IconButton>
            </div>
            <div className={classes.grow}>
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={() => this.props.history.push("/")}
              >
                <SvgIcon
                  style={{
                    color: selected === 1 ? "#0F0437" : "#E7DEDC",
                    width: 68
                  }}
                >
                  <g
                    id="Group_25"
                    data-name="Group 25"
                    transform="translate(-116.862 -43.427)"
                  >
                    <g
                      id="barcode-scanner"
                      transform="translate(145.915 52.254) rotate(110)"
                    >
                      <path
                        id="Path_13"
                        data-name="Path 13"
                        class="cls-1"
                        d="M7.639,10.937A6.358,6.358,0,0,1,4.258,2.606,1.875,1.875,0,1,0,.8,1.146,10.108,10.108,0,0,0,6.178,14.392a1.876,1.876,0,0,0,1.461-3.455Z"
                        transform="translate(8.595 3.348)"
                      />
                      <path
                        id="Path_14"
                        data-name="Path 14"
                        class="cls-1"
                        d="M12.885,22.207a14.974,14.974,0,0,1-7.953-19.6,1.875,1.875,0,0,0-3.455-1.46,18.73,18.73,0,0,0,9.948,24.517,1.876,1.876,0,0,0,1.46-3.455Z"
                        transform="translate(0 0)"
                      />
                    </g>
                  </g>
                </SvgIcon>
              </IconButton>
            </div>
            <div className={classes.grow}>
              <IconButton
                color="inherit"
                aria-label="Menu"
                onClick={() => this.props.history.push("/list")}
              >
                <SvgIcon
                  style={{ color: selected === 2 ? "#0F0437" : "#E7DEDC" }}
                >
                  <path
                    id="Path_44"
                    data-name="Path 44"
                    className="cls-1"
                    d="M18.792,4.9l5.942,1.4V22.146L18.792,21.1V4.9M18.4,4a.4.4,0,0,0-.4.4V21.43a.4.4,0,0,0,.327.39l6.734,1.188a.369.369,0,0,0,.069.006.4.4,0,0,0,.4-.4V5.982a.4.4,0,0,0-.305-.386L18.487,4.011A.39.39,0,0,0,18.4,4Z"
                    transform="translate(-10.87 -1.209)"
                  />
                  <g
                    id="Group_31"
                    data-name="Group 31"
                    transform="translate(0 2)"
                  >
                    <path
                      id="Path_45"
                      data-name="Path 45"
                      className="cls-1"
                      d="M42.758,2.075A.393.393,0,0,0,42.4,2.02L35.271,4.4A.4.4,0,0,0,35,4.773V21.41a.4.4,0,0,0,.4.4.39.39,0,0,0,.143-.027l7.13-2.773a.4.4,0,0,0,.253-.369V2.4A.4.4,0,0,0,42.758,2.075Z"
                      transform="translate(-21.136 -2)"
                    />
                    <path
                      id="Path_46"
                      data-name="Path 46"
                      className="cls-1"
                      d="M7.44,4.01.31,5.595A.4.4,0,0,0,0,5.982V23.015a.4.4,0,0,0,.4.4A.423.423,0,0,0,.482,23.4l7.13-1.584a.4.4,0,0,0,.31-.387V4.4A.4.4,0,0,0,7.44,4.01Z"
                      transform="translate(0 -3.208)"
                    />
                  </g>
                </SvgIcon>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

MenuAppBar.propTypes = {
  classes: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    dialogOpen: state.location.dialogOpen
  };
}

export default connect(mapStateToProps)(
  withStyles(styles)(withRouter(MenuAppBar))
);
