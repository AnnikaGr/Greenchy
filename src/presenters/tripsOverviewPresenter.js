import Trip from "@/models/trip"
import TripOverviewView from "@/views/tripsOverviewView"
import Swal from "sweetalert2"

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
            return <TripOverviewView tripName={this.name} userName={this.userModel.displayName} tripsModel={this.userModel.tripsModel} nameChanged={changeTripName} newTrip={addTrip} tripRemoved={removeTrip}/>
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
            //me.userModel.tripsModel.removeTrip(trip)
            Swal.fire({
                title: 'Do you want to delete the trip?',
                showCancelButton: true,
                confirmButtonText: 'Delete',
              }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    me.userModel.tripsModel.removeTrip(trip)
                  Swal.fire('Delete!', '', 'info')
                }
              })
        }

        function changeTripName(name) {
            me.name = name
        }
    }
}

export default TripsOverview