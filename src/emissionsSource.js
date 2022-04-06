import { BASE_URL, API_KEY } from "./apiConfig.js";

function treatHTTPResponseACB(response) {
  if (!response.ok) throw new Error("API problem") + response.status;
  return response.json();
}

//get emissions factor and parameter
function getEmissionsByFactorAndParameters(params) {
  let endpoint = "estimate";
  return fetch(BASE_URL + endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY}`,
    },
    body: JSON.stringify(params),
  }).then(treatHTTPResponseACB);
}

//get emissions for distance for car
function getEmissionsForRoadTravel(distance) {
  return getEmissionsByFactorAndParameters({
    emission_factor:
      "passenger_vehicle-vehicle_type_car-fuel_source_na-distance_long-engine_size_na",
    parameters: {
      distance: distance,
      distance_unit: "km",
    },
  });
}

//TODO check passengers parameter

//get emissions for distance for plane
function getEmissionsForAirTravel(distance) {
  return getEmissionsByFactorAndParameters({
    emission_factor:
      "passenger_flight-route_type_domestic-aircraft_type_jet-distance_na-class_na-rf_included",
    parameters: {
      distance: distance,
      distance_unit: "km",
    },
  });
}

// get emissions for distance for train

function getEmissionsForRailTravel(distance) {
  return getEmissionsByFactorAndParameters({
    emission_factor: "passenger_train-route_type_international_rail-fuel_source_na",
    parameters: {
      distance: distance,
      distance_unit: "km",
    },
  });
}

// get emissions for distance travelled by bus

export {
  getEmissionsForRoadTravel,
  getEmissionsForAirTravel,
  getEmissionsForRailTravel,
};
