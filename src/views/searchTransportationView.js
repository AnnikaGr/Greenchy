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

	function renderSearchError() {
		if (props.searchErrorCode === 0) {
			return false;
		} else if (props.searchErrorCode === 1) {
			return (
				<article class="message is-error mt-5">
					<div class="message-body">
						<p>
							Input a valid distance and a number of passengers to look for
							transportation alternatives
						</p>
					</div>
				</article>
			);
		} else if (props.searchErrorCode === 2) {
			return (
				<article class="message is-error mt-5">
					<div class="message-body">
						<p>Please input a positive travel distance</p>
					</div>
				</article>
			);
		} else if (props.searchErrorCode === 3) {
			return (<article class="message is-error mt-5">
				<div class="message-body">
					<p>You have to have at least 1 passenger</p>
				</div>
			</article>)
		}
	}
	return (
		<div class="searchForm is-fluid">
			<div class="icon-text title is-4">
					<span>Add a journey to your trip</span>
					
					<a class="icon" onClick={() => 
					Swal.fire({
						title: 'How do we calculate your emissions?',
						text: 'We use Climatiq, an open database that allows you to collect emissions data, automate carbon emission calculations, and ultimately, to make data-supported sustainability decisions',
						html:
							'We use <a href="https://www.climatiq.io/" target="_blank">Climatiq.io</a>, ' +
							'an open database that allows you to collect emissions data, automate carbon emission calculations, and ultimately, to make data-supported sustainability decisions.<br>'+
							'<br>'+
							'<b>Greenchy</b> shows you three kind of traveling alternatives:<br>' +
							'<br>'+
							'<i>Road Travel: </i> Emission intensity of average passenger car long distance. Updated April 2020. Provided by the HBEFA & Yearly Compte des Transports. <br>'+
							'<br>'+
							'<i>Air Travel: </i> Emission intensity of domestic flight in a passenger jet including emissions from combustion and radiative forcing (RF) effect reflecting impact of contrails and high-altitude release of GHGs but not upstream fuel emissions. No distance uplift required as based on fuel delivery data. <br>'+
							'<br>'+
							'<i>Rail Travel: </i> Emission intensity for international rail passenger train including fuel consumption. The international rail factor is based on a passenger-km weighted average of the conversion factors for different Eurostar routes.',
						imageUrl: 'https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/fu3npy69gwxg0geh7us1',
						imageWidth: 100,
						imageHeight: 100,
						width: 800,
						imageAlt: 'Climatiq Logo',
					  })}>
						<i class="fa-solid fa-circle-question"></i>
					</a>
			</div>
			{renderSearchError()}
			<div class="columns">
				<div class="column mt-5">
					<label class="subtitle is-5" for="distance-input">
						Travel distance
					</label>
					<div class="input-field-wrapper">
						<input
							class="input block "
							type="number"
							id="distance-input"
							name="distance-input"
							onChange={distanceChangeACB}
						/>
						<div class="placeholder subtitle is-6">km</div>
					</div>
				</div>
				<div class="column mt-5">
					<label class="subtitle is-5" for="passengers-input">
						No. of Passengers
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
			</div>
			<button onClick={getAlternatives} class="button is-primary">
				<span class="icon">
					<i class="fa-solid fa-magnifying-glass"></i>
				</span>
				<span> Compare alternatives</span>
			</button>
		</div>
	);
}

export default SearchTransportationView;
