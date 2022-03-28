import SearchTransportationView from "../views/searchTransportationView.js";
import Co2VisualizationView from "../views/co2VisualizationView.js";
import promiseNoData from "../views/promiseNoData.js";
import {
  getEmissionsForRoadTravel,
  getEmissionsForAirTravel,
  getEmissionsForRailTravel,
} from "../emissionsSource.js";
import resolvePromise from "../resolvePromise.js";
import tripModel from "@/tripModel.js";

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
      const emissionsPromiseArray = [
        getEmissionsForRoadTravel(distance),
        getEmissionsForAirTravel(distance),
        getEmissionsForRailTravel(distance),
      ];
      return Promise.all(emissionsPromiseArray);
    }

    function onSelectTransportACB(transportSelection) {
      console.log(transportSelection);
      component.model.setTransportMode(transportSelection[0]);
      component.model.setCO2Emission(transportSelection[1]);
      console.log(component.model);
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
            onSelectTransport={onSelectTransportACB}
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
