import Trip from "@/models/trip"
import TripOverviewView from "@/views/tripsOverviewView"

const TripsOverview = {
    props: ["userModel"],
    data() {
        return {
            name: ""
        }
    },
    render() {
        const me = this;
        return <TripOverviewView tripName={this.name} tripsModel={this.userModel.tripsModel} nameChanged={changeTripName} newTrip={addTrip} tripRemoved={removeTrip}/>
        
        function addTrip() {
            if (me.name !== "") {
                const newTrip = new Trip(me.name)
                me.name = ""
                me.userModel.tripsModel.addTrip(newTrip)
            }
        }
        
        function removeTrip(trip) {
            me.userModel.tripsModel.removeTrip(trip)
        }

        function changeTripName(name) {
            me.name = name
        }
    }
}

export default TripsOverview