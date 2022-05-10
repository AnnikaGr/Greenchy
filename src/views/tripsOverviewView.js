function TripsOverviewView(props) {
	function nameChangeACB(event) {
		props.nameChanged(event.target.value);
	}

	//<div class="title is-1 block">All of your Trips</div>
	return (
		<div class="page-wrapper">
			<div class="container block is-fluid">
				<section class="box mt-5">
					<p class="title">
						Welcome{" "}
						{props.userName !== null ? "back " + props.userName : "to Greenchy"}
						!
					</p>
					<p>{renderProgressBar(props.tripsModel)}</p>
				</section>
				<div class="box">
					<label class="title is-size-4">Plan a new trip </label>
					<div class="field has-addons mt-3">
						<p class="control">
							<input
								class="input"
								type="text"
								onChange={nameChangeACB}
								value={props.tripName}
								placeholder='Stockholm'
							/>
						</p>
						<p class="control">
							<div class="button is-primary" onClick={() => props.newTrip()}>
								Add
							</div>
						</p>
					</div>
				</div>
				<div class="box">
					<p class="title is-size-4">Your trips </p>
					<div class="columns is-vcentered is-multiline">
						{renderTripTiles(props.tripsModel)}
					</div>
				</div>
			</div>
		</div>
	);
	function renderProgressBar(tripsModel) {
		if (tripsModel) {
			return (
				<div class="block is-flex-direction-row">
					<div>
						<span class="icon-text">
							<span>Your planned trips have used {tripsModel.getCompleteEmission().toFixed(2)} kg Co2 out of a 2300kg
							yearly budget to have a reasonable chance of limiting global heating
							to 1.5°C.</span>
							<a class="icon" href="https://www.oxfam.org/en/press-releases/carbon-emissions-richest-1-set-be-30-times-15degc-limit-2030" target="_blank">
							<i class="fa-solid fa-circle-question"></i>
							</a>
						</span>

					</div>
					<progress
						class="progress is-danger is-large"
						value={Math.min(
							100,
							100 * (tripsModel.getCompleteEmission() / 2300)
						)}
						max="100"
					></progress>
				</div>
			);
		}
	}

	function renderTripTiles(tripsModel) {
		if (tripsModel && tripsModel.trips) {
			return tripsModel.trips.map(renderTripTile);
		}
		function renderTripTile(trip) {
			return (
				<div class="column is-narrow is-centered">
					<button class="delete is-pulled-right" onClick={() => props.tripRemoved(trip)}> Remove
					</button>
					<router-link to={"/trips/" + trip.id} class="box trip-card has-background-primary">
						<a class="title has-text-white">{trip.name}</a>
						<p class="has-text-white">
							{trip.getOverallCo2().toFixed(2)}kg Co2
						</p>
					</router-link>
				</div>
			);
		}
	}
}

export default TripsOverviewView;
