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
      distance: "",
      passengers: "",
      promiseState: {},
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
      component.passengers = value;
    }

    function onAlternativesSearchACB() {
      resolvePromise(
        getEmissionsForTravelAlternatives(parseFloat(component.distance)),
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
        <div class="box mt-5">
          <h1 class="title">{this.trip.name}</h1>
        </div>
        <div class="columns">
          <div class="column box">
            <SearchTransportationView
              onDistanceInputChange={onDistanceInputChangeACB}
              onPassengersInputChange={onPassengersInputChangeACB}
              onAlternativesSearch={onAlternativesSearchACB}
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
          <div class="column is-one-half">
            <TripView
              trip={component.trip}
              onTransportDeletion={onTransportDeletionABC}
            />
          </div>
        </div>
      </div>
    );
  },
};

export default AddTransportation;
