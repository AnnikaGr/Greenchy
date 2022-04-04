
function TripsOverviewView(props) {
        return <div>
            <div class="title is-1 block">All of your Trips :)</div>
            <div class="button block" onClick={() => props.tripAdded("test")}>Add new Trip</div>
            <div class="tile is-ancestor block">
                {props.tripsModel.trips.map(renderTripTile)}
            </div>
        </div>

        function renderTripTile(trip) {
            return (<div class="tile is-parent">
                <div class="tile is-child box is-primary">
                    <router-link to={("/trips/" + trip.id)} class="title">{trip.name}</router-link>
                    <button class="delete" onClick={() => props.tripRemoved(trip)}>Remove</button>
                </div>
            </div>);
        }
    }

export default TripsOverviewView