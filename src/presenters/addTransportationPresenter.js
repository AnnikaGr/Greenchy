import SearchTransportationView from "../views/searchTransportationView.js";
import Co2VisualizationView from "../views/co2VisualizationView.js";
import promiseNoData from "../views/promiseNoData.js";
import {
  getEmissionsForRoadTravel,
  getEmissionsForAirTravel,
  getEmissionsForRailTravel,
} from "../emissionsSource.js";
import resolvePromise from "../resolvePromise.js";
import animate from "../views/animation.js";

const AddTransportation = {
  props: ["model"],
  data() {
    return {
      searchText: "",
      promiseState: {},
    };
  },
  updated() {
    animate();
  },
  render() {
    const component = this;
    function onSearchInputChangeACB(value) {
      component.searchText = value;
    }

    function onAlternativesSearchACB() {
      resolvePromise(
        getEmissionsForTravelAlternatives(parseFloat(component.searchText)),
        component.promiseState
      );
    }

    function getEmissionsForTravelAlternatives(distance) {
      const emissionsPromiseArray = [
        getEmissionsForRoadTravel(distance),
        getEmissionsForAirTravel(distance),
        getEmissionsForRailTravel(distance),
      ];
      return Promise.all(emissionsPromiseArray);
    }

    function onResultClickedACB(result) {
      //add to trip in TripModel
    }

    return (
      <div>
        <SearchTransportationView
          onSearchInputChange={onSearchInputChangeACB}
          onAlternativesSearch={onAlternativesSearchACB}
        />
        {promiseNoData(component.promiseState) || (
          <Co2VisualizationView
            results={parseActivityData(component.promiseState.data)}
            //  onResultClicked={onResultClickedACB}
          />
        )}
      </div>
    );
  },
};

function parseActivityData(data) {
  function extractDetailsCB(activity) {
    return [activity.emission_factor.category, activity.co2e];
  }
  let content = data.map(extractDetailsCB);

  return content;
}

export default AddTransportation;
