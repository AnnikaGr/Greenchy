
function TripsOverviewView(props) {

    function nameChangeACB(event) {
        props.nameChanged(event.target.value)
    }

    return (
        <div class="container block is-fluid">
            <div class="title is-1 block">All of your Trips</div>
            {renderProgressBar(props.tripsModel)}
            <label class="label">Plan a new Trip!</label>
            <div class="field has-addons">
                <p class="control">
                    <input
                        class="input"
                        type="text"
                        onChange={nameChangeACB}
                        value={props.tripName}
                    />
                </p>
                <p class="control">
                    <div class="button is-primary" onClick={() => props.newTrip()}>Add</div>
                </p>
            </div>

            <div class="columns is-vcentered is-multiline">
                {renderTripTiles(props.tripsModel)}
            </div>
    </div>);

    function renderProgressBar(tripsModel) {
        if (tripsModel) {

            return (
                <div class="block">
                    <progress class="progress is-danger is-large" value={Math.min(100, 100 * (tripsModel.getCompleteEmission() / 1000))} max="100"></progress>
                    <p>You spent {tripsModel.getCompleteEmission().toFixed(2)}kg Co2 of 1t budget for one year</p>
                </div>
            );
        }
    }

    function renderTripTiles(tripsModel) {
        if (tripsModel && tripsModel.trips) {
            return tripsModel.trips.map(renderTripTile)
        }

        function renderTripTile(trip) {
            return (
                <div class="column is-one-quarter is-centered">
                    <div class="box has-background-primary">
                        <button class="delete is-pulled-right" onClick={() => props.tripRemoved(trip)}>Remove</button>
                        <router-link to={("/trips/" + trip.id)} class="title has-text-white">{trip.name}</router-link>
                        <p class="has-text-white">{trip.getOverallCo2().toFixed(2)}kg Co2</p>
                    </div>
                </div>
            );
        }
    }
}

export default TripsOverviewView