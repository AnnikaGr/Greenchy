import SearchTransportationView from "../views/searchTransportationView.js";
import Co2VisualizationView from "../views/co2VisualizationView.js";
import TripView from "@/views/tripView.js";
import promiseNoData from "../views/promiseNoData.js";
import {
  getEmissionsForRoadTravel,
  getEmissionsForAirTravel,
  getEmissionsForRailTravel,
} from "../emissionsSource.js";
import { resolvePromise } from "../utils.js";

const AddTransportation = {
  props: ["userModel"],
  data() {
    return {
      errorCode: 0,
      distance: "",
      passengers: "",
      promiseState: {},
      exampleModalActive: false,
    };
  },
  created() {
    this.trip = this.userModel.tripsModel.getTrip(+this.$route.params.tripId);
  },
  render() {
    const component = this;

    function onDistanceInputChangeACB(value) {
      component.distance = value;
    }

    function onPassengersInputChangeACB(value) {
      if(parseFloat(value) < 1) {
        component.errorCode = 3
      } else {
        component.passengers = value;
      }
    }

    function onAlternativesSearchACB() {
      //Check empty parameters
      if(component.passengers === "" || component.distance === ""){
        component.errorCode = 1
        component.promiseState = {}
      //Check negative paramenters
      } else if(parseFloat(component.distance) < 0){
        component.errorCode = 2
        component.promiseState = {}
      } else{
        component.errorCode = 0
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

    function onSelectTransportACB(transportSelection) {
      component.userModel.tripsModel.addTransportation(
        component.trip.id,
        parseFloat(component.distance),
        parseInt(component.passengers),
        transportSelection[0],
        transportSelection[1]
      );
      component.promiseState = {};
    }

    function onTransportDeletionABC(transport, id) {
      component.userModel.tripsModel.removeTransportation(id, transport);
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

    return (
      <div class="page-wrapper container is-fluid">
        <div class="box mt-5 has-text-centered">
          <h1 class="title">{this.trip.name}</h1>
        </div>
        {}
        <div class="columns">
          <div class="column">
            <div class="box p-6">
              <SearchTransportationView
                onDistanceInputChange={onDistanceInputChangeACB}
                onPassengersInputChange={onPassengersInputChangeACB}
                onAlternativesSearch={onAlternativesSearchACB}
                searchErrorCode={component.errorCode}
              />

              {promiseNoData(component.promiseState) || (
                <Co2VisualizationView
                  class="mt-5"
                  results={parseActivityData(
                    component.promiseState.data,
                    parseInt(component.passengers)
                  )}
                  onSelectTransport={onSelectTransportACB}
                />
              )}
            </div>
          </div>
          <div class="column is-one-half">
            <TripView
              trip={component.trip}
              onTransportDeletion={onTransportDeletionABC}
              onAlternativesSearch={onAlternativesSearchACB}
            />
          </div>
        </div>
      </div>
    );
  },
};

export default AddTransportation;
