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
        if (this.userModel.loaded) {
            return <TripOverviewView tripName={this.name} userName={this.userModel.displayName} completeEmission={this.userModel.tripsModel.getCompleteEmission()} trips={this.userModel.tripsModel.trips} nameChanged={changeTripName} newTrip={addTrip} tripRemoved={removeTrip} />
        } else {
            return <div class="pageloader is-active"><span class="title">Loading Trips...</span></div>
        }

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