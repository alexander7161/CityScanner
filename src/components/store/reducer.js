import packagesReducer from "./packages/reducer";
import locationReducer from "./location/reducer";
import { combineReducers } from "redux";

export default combineReducers({
  packages: packagesReducer,
  location: locationReducer
});
