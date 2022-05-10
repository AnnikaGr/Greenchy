import Swal from "sweetalert2";
/* eslint-disable */
function SearchTransportationView(props) {
	function distanceChangeACB(event) {
		props.onDistanceInputChange(event.target.value);
	}

	function passengerChangeACB(event) {
		props.onPassengersInputChange(event.target.value);
	}

	function getAlternatives() {
		props.onAlternativesSearch();
	}

	return (
		<div class="searchForm container is-fluid">
			<h2 class="title is-4"> Add transportation </h2>
			<div class="columns">
				<div class="column">
					<label class="subtitle is-5" for="distance-input">
						Travel distance
					</label>
					<div class="input-field-wrapper">
						<input
							class="input block"
							type="number"
							id="distance-input"
							name="distance-input"
							onChange={distanceChangeACB}
						/>
						<div class="placeholder subtitle is-6">km</div>
					</div>
				</div>
				<div class="column">
					<label class="subtitle is-5" for="passengers-input">
						Passengers
					</label>
					<div class="input-field-wrapper">
						<input
							class="input block"
							type="number"
							min="1"
							id="passengers-input"
							name="passengers-input"
							onChange={passengerChangeACB}
						/>
					</div>
				</div>

				<div class="column">
					<button class="button is-rounded" onClick={() => Swal.fire("We use Climatiq API that uses emission factors from a range of validated sources available in the Open Emission Factor Database https://www.climatiq.io/explorer")}>?</button>
				</div>

			</div>
			<button onClick={getAlternatives} class="button is-primary">
				Compare alternatives
			</button>
		</div>
	);
}

export default SearchTransportationView;
