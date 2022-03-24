import SearchTransportationView from "../views/searchTransportationView.js";
import Co2VisualizationView from "../views/co2VisualizationView.js";
import promiseNoData from "../views/promiseNoData.js";
import {
  getEmissionsForRoadTravel,
  getEmissionsForAirTravel,
  getEmissionsForRailTravel,
} from "../emissionsSource.js";
import resolvePromise from "../resolvePromise.js";

const AddTransportation = {
  props: ["model"],
  data() {
    return {
      searchText: "",
      promiseState: {},
    };
  },
  created() {},
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
      function alternativeEmissionsPromiseCB(distance) {
        return [
          getEmissionsForRoadTravel(distance),
          getEmissionsForAirTravel(distance),
          getEmissionsForRailTravel(distance),
        ];
      }

      var alternatives = [travelalternatives1, 2, 3];
      //const alternativeEmissionsPromiseArray = alternatives.map(
      // alternativeEmissionsPromiseCB
      //);
      const alternativeEmissionsPromiseArray =
        alternativeEmissionsPromiseCB(distance);
      return Promise.all(alternativeEmissionsPromiseArray);
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
            //TODO implement for several activities
            results={parseActivityData(component.promiseState.data)}
            //  array of data to visualize (label, kg co2)
            //  searchResults={component.promiseState.data}
            //  onResultClicked={onResultClickedACB}
          />
        )}
      </div>
    );
  },
};

function parseActivityData(data) {
  //TODO implement for several activities
  return [[data.emission_factor.category, data.co2e]];
}

export default AddTransportation;
