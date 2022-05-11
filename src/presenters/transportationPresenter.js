import SearchTransportationView from "@/views/searchTransportationView";
import Co2VisualizationView from "@/views/co2VisualizationView";
import promiseNoData from "@/views/promiseNoData";
import {
  getEmissionsForRoadTravel,
  getEmissionsForAirTravel,
  getEmissionsForRailTravel,
} from "../emissionsSource.js";
import resolvePromise from "@/utils.js";

const Transportation = {
  props: ["onSelectTransport", "trip"],
  data() {
    return {
      errorCode: 0,
      distance: "",
      passengers: "",
      promiseState: {},
    };
  },
  render() {
    const component = this;

    function onDistanceInputChangeACB(value) {
      component.distance = value;
    }

    function onPassengersInputChangeACB(value) {
      if (parseFloat(value) < 1) {
        component.errorCode = 3;
      } else {
        component.errorCode = 0;
        component.passengers = value;
      }
    }

    function onAlternativesSearchACB() {
      //Check empty parameters
      if (component.passengers === "" || component.distance === "") {
        component.errorCode = 1;
        component.promiseState = {};
        //Check negative paramenters
      } else if (parseFloat(component.distance) < 0) {
        component.errorCode = 2;
        component.promiseState = {};
      } else {
        component.errorCode = 0;
        resolvePromise(
          getEmissionsForTravelAlternatives(parseFloat(component.distance)),
          component.promiseState
        );
      }
    }

    function getEmissionsForTravelAlternatives(distance) {
      const emissionsPromiseArray = [
        getEmissionsForRoadTravel(distance),
        getEmissionsForAirTravel(distance),
        getEmissionsForRailTravel(distance),
      ];
      return Promise.all(emissionsPromiseArray);
    }

    function parseActivityData(data, passengers) {
      function extractDetailsCB(activity) {
        if (activity.emission_factor.category === "Road Travel") {
          return [
            activity.emission_factor.category,
            activity.co2e / (passengers * 1.0),
          ];
        } else {
          return [activity.emission_factor.category, activity.co2e];
        }
      }
      let content = data.map(extractDetailsCB);

      return content;
    }

    function onSelectTransportACB(transportSelection) {
      component.onSelectTransport(
        parseFloat(component.distance),
        parseInt(component.passengers),
        transportSelection[0],
        transportSelection[1]
      );
      component.promiseState = {};
    }

    return (
      <div class="box p-6 mb-2">
        <SearchTransportationView
          onDistanceInputChange={onDistanceInputChangeACB}
          onPassengersInputChange={onPassengersInputChangeACB}
          onAlternativesSearch={onAlternativesSearchACB}
          searchErrorCode={component.errorCode}
        />

        {promiseNoData(component.promiseState) || (
          <Co2VisualizationView
            class="mt-6"
            results={parseActivityData(
              component.promiseState.data,
              parseInt(component.passengers)
            )}
            onSelectTransport={onSelectTransportACB}
          />
        )}
      </div>
    );
  },
};

export default Transportation;
