import { RECEIVE_PACKAGES, REQUEST_PACKAGES } from "./actionTypes";

function requestPackages() {
  return {
    type: REQUEST_PACKAGES
  };
}

function receivePackages(packages) {
  return {
    type: RECEIVE_PACKAGES,
    packages
  };
}

export function fetchPackages(city) {
  return dispatch => {
    console.log(city);
    dispatch(requestPackages());
    if (process.env.NODE_ENV !== "development") {
      var query = `city=${city}`;
      if (city.includes(",")) {
        query = `latlng=${city}`;
      }

      return fetch(`http://104.155.163.66:8080/quotes?${query}`)
        .then(response => response.json())
        .then(json => dispatch(receivePackages(json)))
        .catch(e => {
          console.log(e);
          var dummyData = [
            {
              From: "Bremen",
              MinPrice: 70.0,
              Photo:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAOgblpc6enb-IWXFXY0e5XIy360-Do0SN_sTtODvy8aoBCTBRnT6OwU35OY0GMeDVfM4a4RKLpVArFvCD3vkAA9f04lvx_jn_GxN5ETGNb08cP_DbN_n_-GY6KZ9yFa9UEhBw8rDIugP6iw24-j3PiG1zGhTGyawqe_SKVRCzXJ2Xkoay5GH6dQ&key=AIzaSyDb1uML_5xvDqtQCWppi0z8MSy5YpN7zvU",
              To: "Palma",
              date: "9-11 Nov"
            },
            {
              From: "Bremen",
              MinPrice: 214.0,
              Photo:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAwlWbp9DJpsytPPCerncwyX2VmK3aem2o1qVOmbhU66gF61qciZA0blGtC_9eTJePSPqOcs12XjCJ27DtSv3qf6M3rLvB-5CtFyQp9VhqL16-5I3IwiGF2j1Eg_YrnjeUEhCBYU9vP5iuwCYOiw8vuESOGhSmjOM74baGlXntw9y9wASV6sc0Gw&key=AIzaSyDb1uML_5xvDqtQCWppi0z8MSy5YpN7zvU",
              To: "London",
              date: "9-11 Nov"
            },
            {
              From: "Bremen",
              MinPrice: 215.0,
              Photo:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAPQahS6vGD82SpdS40yEciiokTGlOFPmHRD_-VdwYOoy-3JaXj0J72Y9b-G6QSiKE8STER6wA-El3yWCqFbcYy0MSBsbT59w-kaGr6JNGYlBKiYow9WPLgCFWh4y_oqQOEhAE-yg30yBOSw48YqTd2GKFGhQB8Gc3h3hJR1DXx84eG2aCr4iAnQ&key=AIzaSyDb1uML_5xvDqtQCWppi0z8MSy5YpN7zvU",
              To: "Amsterdam",
              date: "9-11 Nov"
            },
            {
              From: "Bremen",
              MinPrice: 280.0,
              Photo:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA2UBcAqZmTcgmoeTxyjMY5krXPg3Q4IKtwOWT-nMhkf355usO-FO_UjjJbnaBYGOAjMY5NY50dQYjmpDoFCDLtRZcncelMs9sJilgYTbGYV1g8XlqbIu9Ljx02w1uBKOjEhDOF23QOfTQbt3EBBXL7_ImGhQ2BTBWWna50eCFAbpmODs4GlS8BA&key=AIzaSyDb1uML_5xvDqtQCWppi0z8MSy5YpN7zvU",
              To: "Zurich",
              date: "9-11 Nov"
            },
            {
              From: "Bremen",
              MinPrice: 314.0,
              Photo:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA7-JkyIPq43Zl2pk8ZJVtsX40GnO7pKBcK4svvSaWDl7fhVQ71f0V98CpV_kAegvmtoHjFaZH9OxKL1UbS51c_nsXDer0DH_DAcXpBdWqus5KD9_uzvB10SqoNGboWeNaEhCnxiCqtAXYQcFMSpOwevlKGhTVxKAUev_eFpzesPPtsTX2F1ayfg&key=AIzaSyDb1uML_5xvDqtQCWppi0z8MSy5YpN7zvU",
              To: "Stuttgart",
              date: "9-11 Nov"
            },
            {
              From: "Bremen",
              MinPrice: 322.0,
              Photo:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAhh0kKhKK1wMrXEpnM_C4SfmfUe5hCqnNCP-ZcskJ3l3_2qhOCQa_tzCNS6TQc1yAbdqlZsLIl4DeDkAhk6F5l_U7uBaCBKXGVVVgcfuN4gc_8AQaq9gxtHJkYYWpcwoIEhAKbC7E2TS8JIXENpEzFLNSGhTuQTAxjCb67hFNBRhByvVWdAZ01w&key=AIzaSyDb1uML_5xvDqtQCWppi0z8MSy5YpN7zvU",
              To: "Paris",
              date: "9-11 Nov"
            },
            {
              From: "Bremen",
              MinPrice: 551.0,
              Photo:
                "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAACQzmWTkdP4DgDMYoralWmMA_8WCelCVWD8RELDruT2GdtJ6cIlWmYY_QqmP084zYh0gst3MoD4ziTPilFiv8GDV3bWrL1BfGa_-Opt5erWZELq_8nyTkIXJvf8_LmY2bEhBZO0vH-pb5kippO8hk35-IGhQgYYEENeH-YSUf42i1AGYMm-x8-w&key=AIzaSyDb1uML_5xvDqtQCWppi0z8MSy5YpN7zvU",
              To: "Istanbul",
              date: "9-11 Nov"
            }
          ];
          dispatch(receivePackages(dummyData));
        });
    } else {
      var dummyData = [
        {
          From: "Bremen",
          MinPrice: 70.0,
          Photo:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAOgblpc6enb-IWXFXY0e5XIy360-Do0SN_sTtODvy8aoBCTBRnT6OwU35OY0GMeDVfM4a4RKLpVArFvCD3vkAA9f04lvx_jn_GxN5ETGNb08cP_DbN_n_-GY6KZ9yFa9UEhBw8rDIugP6iw24-j3PiG1zGhTGyawqe_SKVRCzXJ2Xkoay5GH6dQ&key=AIzaSyDb1uML_5xvDqtQCWppi0z8MSy5YpN7zvU",
          To: "Palma",
          date: "9-11 Nov"
        },
        {
          From: "Bremen",
          MinPrice: 214.0,
          Photo:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAwlWbp9DJpsytPPCerncwyX2VmK3aem2o1qVOmbhU66gF61qciZA0blGtC_9eTJePSPqOcs12XjCJ27DtSv3qf6M3rLvB-5CtFyQp9VhqL16-5I3IwiGF2j1Eg_YrnjeUEhCBYU9vP5iuwCYOiw8vuESOGhSmjOM74baGlXntw9y9wASV6sc0Gw&key=AIzaSyDb1uML_5xvDqtQCWppi0z8MSy5YpN7zvU",
          To: "London",
          date: "9-11 Nov"
        },
        {
          From: "Bremen",
          MinPrice: 215.0,
          Photo:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAPQahS6vGD82SpdS40yEciiokTGlOFPmHRD_-VdwYOoy-3JaXj0J72Y9b-G6QSiKE8STER6wA-El3yWCqFbcYy0MSBsbT59w-kaGr6JNGYlBKiYow9WPLgCFWh4y_oqQOEhAE-yg30yBOSw48YqTd2GKFGhQB8Gc3h3hJR1DXx84eG2aCr4iAnQ&key=AIzaSyDb1uML_5xvDqtQCWppi0z8MSy5YpN7zvU",
          To: "Amsterdam",
          date: "9-11 Nov"
        },
        {
          From: "Bremen",
          MinPrice: 280.0,
          Photo:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA2UBcAqZmTcgmoeTxyjMY5krXPg3Q4IKtwOWT-nMhkf355usO-FO_UjjJbnaBYGOAjMY5NY50dQYjmpDoFCDLtRZcncelMs9sJilgYTbGYV1g8XlqbIu9Ljx02w1uBKOjEhDOF23QOfTQbt3EBBXL7_ImGhQ2BTBWWna50eCFAbpmODs4GlS8BA&key=AIzaSyDb1uML_5xvDqtQCWppi0z8MSy5YpN7zvU",
          To: "Zurich",
          date: "9-11 Nov"
        },
        {
          From: "Bremen",
          MinPrice: 314.0,
          Photo:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAA7-JkyIPq43Zl2pk8ZJVtsX40GnO7pKBcK4svvSaWDl7fhVQ71f0V98CpV_kAegvmtoHjFaZH9OxKL1UbS51c_nsXDer0DH_DAcXpBdWqus5KD9_uzvB10SqoNGboWeNaEhCnxiCqtAXYQcFMSpOwevlKGhTVxKAUev_eFpzesPPtsTX2F1ayfg&key=AIzaSyDb1uML_5xvDqtQCWppi0z8MSy5YpN7zvU",
          To: "Stuttgart",
          date: "9-11 Nov"
        },
        {
          From: "Bremen",
          MinPrice: 322.0,
          Photo:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAAhh0kKhKK1wMrXEpnM_C4SfmfUe5hCqnNCP-ZcskJ3l3_2qhOCQa_tzCNS6TQc1yAbdqlZsLIl4DeDkAhk6F5l_U7uBaCBKXGVVVgcfuN4gc_8AQaq9gxtHJkYYWpcwoIEhAKbC7E2TS8JIXENpEzFLNSGhTuQTAxjCb67hFNBRhByvVWdAZ01w&key=AIzaSyDb1uML_5xvDqtQCWppi0z8MSy5YpN7zvU",
          To: "Paris",
          date: "9-11 Nov"
        },
        {
          From: "Bremen",
          MinPrice: 551.0,
          Photo:
            "https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=CmRaAAAACQzmWTkdP4DgDMYoralWmMA_8WCelCVWD8RELDruT2GdtJ6cIlWmYY_QqmP084zYh0gst3MoD4ziTPilFiv8GDV3bWrL1BfGa_-Opt5erWZELq_8nyTkIXJvf8_LmY2bEhBZO0vH-pb5kippO8hk35-IGhQgYYEENeH-YSUf42i1AGYMm-x8-w&key=AIzaSyDb1uML_5xvDqtQCWppi0z8MSy5YpN7zvU",
          To: "Istanbul",
          date: "9-11 Nov"
        }
      ];
      dispatch(receivePackages(dummyData));
    }
  };
}
