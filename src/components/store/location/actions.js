import {
  OPEN_DIALOG,
  CLOSE_DIALOG,
  SET_LOCATION,
  LOCATION_ERROR
} from "./actionTypes";

export function openDialog() {
  return {
    type: OPEN_DIALOG
  };
}

export function closeDialog() {
  return {
    type: CLOSE_DIALOG
  };
}

function updateLocation(coords) {
  return {
    type: SET_LOCATION,
    coords
  };
}

function locationError() {
  return {
    type: LOCATION_ERROR
  };
}

function getLocation() {
  return dispatch => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position =>
        dispatch(updateLocation(position.coords))
      );
    } else {
      dispatch(locationError());
    }
  };
}

export { getLocation };
