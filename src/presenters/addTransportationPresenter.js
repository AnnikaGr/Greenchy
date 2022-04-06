import SearchTransportationView from "../views/searchTransportationView.js";
import Co2VisualizationView from "../views/co2VisualizationView.js";
import TripView from "@/views/tripView.js";
import promiseNoData from "../views/promiseNoData.js";
import {
	getEmissionsForRoadTravel,
	getEmissionsForAirTravel,
	getEmissionsForRailTravel,
} from "../emissionsSource.js";
import { resolvePromise } from "../utils.js"
import animate from "../views/animation.js";


const AddTransportation = {
	props: ["userModel"],
	data() {
		return {
			distance: "",
			passengers: "",
			promiseState: {},
		};
	},
	updated() {
		animate();
	},
	created() {
		this.trip = this.userModel.tripsModel.getTrip(+this.$route.params.tripId)
	},
	render() {
		const component = this;
		function onDistanceInputChangeACB(value) {
			component.distance = value;
		}

		function onPassengersInputChangeACB(value) {
			component.passengers = value
		}

		function onAlternativesSearchACB() {
			resolvePromise(
				getEmissionsForTravelAlternatives(parseFloat(component.distance)),
				component.promiseState
			)
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
			component.userModel.tripsModel.addTransportation(component.trip.id, parseFloat(component.distance), parseInt(component.passengers), transportSelection[0], transportSelection[1])
		}

		function parseActivityData(data, passengers) {
			function extractDetailsCB(activity) {
				if (activity.emission_factor.category === "Road Travel") {
					return [activity.emission_factor.category, activity.co2e / (passengers * 1.0)];
				} else {
					return [activity.emission_factor.category, activity.co2e];
				}
			}
			let content = data.map(extractDetailsCB);

			return content;
		}

		return (
			<div class="container is-fluid">
				<h1 class="title">{this.trip.name}</h1>
				<div class="columns is-vcentered">

					<div class="column">
						<SearchTransportationView
							onDistanceInputChange={onDistanceInputChangeACB}
							onPassengersInputChange={onPassengersInputChangeACB}
							onAlternativesSearch={onAlternativesSearchACB}
						/>
					</div>
					<div class="column is-one-half">
						<TripView overallCo2={component.trip.getOverallCo2()} />
					</div> 
				</div>
				{promiseNoData(component.promiseState) || (
					<Co2VisualizationView
						results={parseActivityData(component.promiseState.data, parseInt(component.passengers))}
						onSelectTransport={onSelectTransportACB}
					/>
				)}


			</div>
		);
	},
};

export default AddTransportation;
