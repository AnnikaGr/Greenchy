import Transportation from "./transportationPresenter";
import TripSummary from "./tripSummaryPresenter";

const Trip = {
    props: ["userModel"],
    render() {
        const component = this;
        const trip = this.userModel.tripsModel.getTrip(+this.$route.params.tripId)

        function onTransportDeletionABC(transport, id) {
            component.userModel.tripsModel.removeTransportation(id, transport);
        }

        return (
            <div class="page-wrapper container is-fluid">
                <div class="box mt-5 has-text-centered">
                    <h1 class="title">{trip.name}</h1>
                </div>
                <div class="columns">
                    <div class="column">
                        <Transportation userModel={component.userModel} trip={trip}/>
                    </div>
                    <div class="column is-one-half">
                        <TripSummary onTransportDeletion={onTransportDeletionABC} trip={trip}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Trip