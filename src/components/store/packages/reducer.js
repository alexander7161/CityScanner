import { RECEIVE_PACKAGES, REQUEST_PACKAGES } from "./actionTypes";

function packagesReducer(
  state = {
    isFetching: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case REQUEST_PACKAGES:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_PACKAGES:
      return Object.assign({}, state, {
        isFetching: false,
        items: action.packages
      });
    default:
      return state;
  }
}

export default packagesReducer;
