import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { connect } from "react-redux";
import { closeDialog, fetchPackages, getLocation } from "./store/actions";
import { withRouter } from "react-router-dom";

class FormDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location
    };
  }
  handleClose = () => {
    this.props.dispatch(closeDialog());
    this.props.dispatch(
      fetchPackages(
        this.state.location === "My Location"
          ? this.props.location
          : this.state.location
      )
    );
    this.props.history.push("/");
  };

  handleChange = event => {
    this.setState({ location: event.target.value });
  };

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevProps.location !== this.props.location) {
      this.setState({
        location: this.props.location.includes(",")
          ? "My Location"
          : this.props.location
      });
    }
  }

  render() {
    return (
      <div>
        <Dialog
          open={this.props.open}
          onClose={this.handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Location</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Where will you be travelling from?
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              value={this.state.location}
              onChange={this.handleChange}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button
              onClick={() => this.props.dispatch(getLocation())}
              color="primary"
            >
              Use Location
            </Button>
            <Button onClick={this.handleClose} color="primary">
              Ok
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    open: state.location.dialogOpen,
    location: state.location.location
  };
}
export default withRouter(connect(mapStateToProps)(FormDialog));
