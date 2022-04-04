import Trip from "@/models/trip"
import TripOverviewView from "@/views/tripsOverviewView"

const TripsOverview = {
    props: ["userModel"],
    render() {
        const me = this;
        return <TripOverviewView tripsModel={this.userModel.tripsModel} tripAdded={addTrip} tripRemoved={removeTrip}/>
        
        function addTrip(name) {
            const newTrip = new Trip(name)
            me.userModel.tripsModel.addTrip(newTrip)
        }
        
        function removeTrip(trip) {
            me.userModel.tripsModel.removeTrip(trip)
        }
    }
}

export default TripsOverview