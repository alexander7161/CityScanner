import { RECEIVE_PACKAGES, REQUEST_PACKAGES, SWIPE_RIGHT } from "./actionTypes";

function packagesReducer(
  state = {
    isFetching: false,
    items: [],
    favouriteItems: []
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
    case SWIPE_RIGHT:
      var favouriteItems = state.favouriteItems;
      var add = true;
      for (var item of favouriteItems) {
        if (item.To === state.items[action.index].To) {
          add = false;
        }
      }
      if (add) {
        favouriteItems.push(state.items[action.index]);
      } else {
        return state;
      }

      return Object.assign({}, state, {
        favouriteItems: favouriteItems
      });
    default:
      return state;
  }
}

export default packagesReducer;
