import SearchTransportationView from "../views/searchTransportationView.js";
import Co2VisualizationView from "../views/co2VisualizationView.js";
import TripView from "@/views/tripView.js";
import promiseNoData from "../views/promiseNoData.js";
import {
	getEmissionsForRoadTravel,
	getEmissionsForAirTravel,
	getEmissionsForRailTravel,
} from "../emissionsSource.js";
import resolvePromise from "../resolvePromise.js";
import animate from "../views/animation.js";


const AddTransportation = {
	props: ["userModel"],
	data() {
		return {
			searchText: "",
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
			component.userModel.tripsModel.addTransportation(component.trip.id, parseFloat(component.searchText), transportSelection[0], transportSelection[1])
		}

		return (
			<div>
				<TripView overallCo2={component.trip.getOverallCo2()} />
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
