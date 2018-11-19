import { RECEIVE_PACKAGES, REQUEST_PACKAGES, SWIPE_RIGHT } from "./actionTypes";

function swipeRight(index) {
  return {
    type: SWIPE_RIGHT,
    index
  };
}

function requestPackages() {
  return {
    type: REQUEST_PACKAGES
  };
}

function receivePackages(packages) {
  packages.map(p => (p.id = p.From + p.MinPrice + p.To));
  return {
    type: RECEIVE_PACKAGES,
    packages
  };
}

function fetchPackages(city) {
  return dispatch => {
    console.log(city);
    dispatch(requestPackages());
    if (process.env.NODE_ENV !== "development") {
      var query = `city=${city}`;
      if (city.includes(",")) {
        query = `latlng=${city}`;
      }

      return fetch(`http://35.208.194.103:8080/quotes?${query}`)
        .then(response => response.json())
        .then(json => {
          if (Array.isArray(json)) {
            dispatch(receivePackages(json));
          } else {
            dispatch(dummyData());
          }
        })
        .catch(e => {
          console.log(e);
          dispatch(dummyData());
        });
    } else {
      dispatch(dummyData());
    }
  };
}

function dummyData() {
  return dispatch => {
    var dummyData = [
      {
        From: "Bremen",
        MinPrice: 70.0,
        Photo:
          "https://www.clubvillamar.com/blog/wp-content/uploads/2018/04/Palma_de_Mallorca.jpg",
        To: "Palma",
        date: "9-11 Nov"
      },
      {
        From: "Bremen",
        MinPrice: 214.0,
        Photo:
          "https://www.telegraph.co.uk/content/dam/video_previews/x/5/x5cgi0ode66q6vuxezqmehmexwer6bt-xlarge.jpg",
        To: "London",
        date: "9-11 Nov"
      },
      {
        From: "Bremen",
        MinPrice: 215.0,
        Photo:
          "https://www.iamsterdam.com/media/canals-and-cityscapes/v-c-planyourtrip-merijn-roubroeks.jpg?as=false&h=338&w=600&iar=true",
        To: "Amsterdam",
        date: "9-11 Nov"
      },
      {
        From: "Bremen",
        MinPrice: 280.0,
        Photo:
          "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Switzerland/zurich-switzerland-aerial.jpg?imwidth=450",
        To: "Zurich",
        date: "9-11 Nov"
      },
      {
        From: "Bremen",
        MinPrice: 314.0,
        Photo:
          "http://www.nightlife-cityguide.com/wp-content/uploads/2018/08/Cosa-vedere-a-Stoccarda-cosa-visitare-672x372.jpg",
        To: "Stuttgart",
        date: "9-11 Nov"
      },
      {
        From: "Bremen",
        MinPrice: 322.0,
        Photo:
          "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/02/22/09/paris.jpg?w968h681",
        To: "Paris",
        date: "9-11 Nov"
      },
      {
        From: "Bremen",
        MinPrice: 551.0,
        Photo:
          "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Turkey/Istanbul%20lead-xlarge.jpg",
        To: "Istanbul",
        date: "9-11 Nov"
      }
    ];
    dispatch(receivePackages(dummyData));
  };
}

export { swipeRight, fetchPackages };
