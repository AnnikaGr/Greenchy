import SearchTransportationView from "../views/searchTransportationView.js";
import Co2VisualizationView from "../views/co2VisualizationView.js";
import tripView from "@/views/tripView.js";
import promiseNoData from "../views/promiseNoData.js";
import {
  getEmissionsForRoadTravel,
  getEmissionsForAirTravel,
  getEmissionsForRailTravel,
} from "../emissionsSource.js";
import resolvePromise from "../resolvePromise.js";
import animate from "../views/animation.js";
import tripModel from "@/tripModel.js";


const AddTransportation = {
  props: ["model"],
  data() {
    return {
      searchText: "",
      promiseState: {},
      tripModel: new tripModel()
      
    };
  },
  updated() {
    animate();
  },
  render() {
    const component = this;
    console.log(component.model)
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
      console.log(component.tripModel)
      component.tripModel.setTransportMode(transportSelection[0]);
      component.tripModel.setCO2Emission(transportSelection[1]);

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
        <tripView overallCo2={component.tripModel.overallCo2} />
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
