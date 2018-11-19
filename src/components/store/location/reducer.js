import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
  SET_LOCATION,
  LOCATION_ERROR
} from "./actionTypes";

function locationReducer(
  state = {
    dialogOpen: true,
    location: "Bremen",
    error: false
  },
  action
) {
  switch (action.type) {
    case OPEN_DIALOG:
      return Object.assign({}, state, {
        dialogOpen: true
      });
    case CLOSE_DIALOG:
      return Object.assign({}, state, {
        dialogOpen: false
      });
    case SET_LOCATION:
      return Object.assign({}, state, {
        location: action.coords.latitude + "," + action.coords.longitude,
        error: false
      });
    case LOCATION_ERROR:
      return Object.assign({}, state, {
        error: true
      });
    default:
      return state;
  }
}

export default locationReducer;
