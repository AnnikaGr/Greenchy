
function TripsOverviewView(props) {

    function nameChangeACB(event) {
        props.nameChanged(event.target.value)
    }

    return (
        <div class="container block is-fluid">
            <div class="title is-1 block">All of your Trips</div>
            <div class="block">
                <label class="subtitle is-5" for="tripName-input">
                    Trip Name
                </label>
                <div class="input-field-wrapper">
                    <input
                        class="input block"
                        type="text"
                        id="tripName-input"
                        name="tripName-input"
                        onChange={nameChangeACB}
                        value={props.tripName}
                    />
                </div>
                <div class="button block" onClick={() => props.newTrip()}>Add new Trip</div>
            </div>

            <div class="columns is-vcentered is-multiline">
                {props.tripsModel.trips.map(renderTripTile)}
            </div>
    </div>);

    function renderTripTile(trip) {
        return (
            <div class="column is-one-quarter is-centered">
                <div class="box has-background-primary">
                    <button class="delete is-pulled-right" onClick={() => props.tripRemoved(trip)}>Remove</button>
                    <router-link to={("/trips/" + trip.id)} class="title has-text-white">{trip.name}</router-link>
                </div>
            </div>
        );
    }
}

export default TripsOverviewView