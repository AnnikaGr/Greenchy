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
            /*Swal.fire({
                title: 'Do you want to delete the trip?',
                showCancelButton: true,
                confirmButtonText: 'Delete',
              }).then((result) => {
                if (result.isConfirmed) {
                    me.userModel.tripsModel.removeTrip(trip)
                  Swal.fire('Delete!', '', 'info')
                }
              })*/

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
                    me.userModel.tripsModel.removeTrip(trip)

                    Swal.fire(
                        'Deleted!',
                        'Your trip has been deleted.',
                        'success'
                    )
                }
              })
        }

        function changeTripName(name) {
            me.name = name
        }
    }
}

export default TripsOverview