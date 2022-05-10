import TripSummaryView from "@/views/tripSummaryView"

const TripSummary = {
    props: ["onTransportDeletion", "trip"],
    render() {
        const component = this;

        return <TripSummaryView
            tripId={component.trip.id}
            transportations={component.trip.transportations}
            onTransportDeletion={component.onTransportDeletion}
        />
    }
}

export default TripSummary