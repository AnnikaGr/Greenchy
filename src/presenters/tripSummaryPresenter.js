import TripSummaryView from "@/views/tripSummaryView"

const TripSummary = {
    props: ["userModel", "trip"],
    render() {
        const component = this;

        function onTransportDeletionABC(transport, id) {
            component.userModel.tripsModel.removeTransportation(id, transport);
        }
        return <TripSummaryView
            tripId={component.trip.id}
            transportations={component.trip.transportations}
            onTransportDeletion={onTransportDeletionABC}
        />
    }
}

export default TripSummary