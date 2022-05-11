import Swal from "sweetalert2"

function TripsOverviewView(props) {
	function nameChangeACB(event) {
		props.nameChanged(event.target.value);
	}

	function renderProgressBar() {
			return (
				<div class="block is-flex-direction-row">
					<div>
						<span class="icon-text">
							<span>Your planned trips have used {props.completeEmission.toFixed(2)} kg Co2 out of a 2300kg
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
							100 * (props.completeEmission / 2300)
						)}
						max="100"
					></progress>
				</div>
			);
	}
	
	function renderTripTiles() {
		if (props.trips) {
			return props.trips.map(renderTripTile);
		}
		function renderTripTile(trip) {
			function deleteTrip() {
				Swal.fire({
					title: 'Are you sure?',
					text: "You won't be able to revert this!",
					icon: 'warning',
					showCancelButton: true,
					confirmButtonColor: '#3085d6',
					cancelButtonColor: '#d33',
					confirmButtonText: 'Yes, delete it!'
				}).then((result) => {
					if (result.isConfirmed) {
						props.tripRemoved(trip)

						Swal.fire(
							'Deleted!',
							'Your trip has been deleted.',
							'success'
						)
					}
				})
			}
			return (
				<div class="column is-narrow is-centered">
					<button class="delete is-pulled-right" onClick={deleteTrip}> Remove
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

	return (
		<div class="page-wrapper">
			<div class="container block is-fluid">
				<section class="box mt-5">
					<p class="title">
						Welcome{" "}
						{props.userName !== null ? "back " + props.userName : "to Greenchy"}
						!
					</p>
					<p>{renderProgressBar()}</p>
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
						{renderTripTiles()}
					</div>
				</div>
			</div>
		</div>
	);
}

export default TripsOverviewView;
