class Trip {
    constructor(name = "new Trip", transportations = []) {
        this.id = Date.now()
        this.name = name
        this.transportations = transportations
        this.notifyObservers = () => console.error("Trip " + this.id + " has not notifyObserver method");
    }

    addTransportation(distance, modeOfTransport, overallCo2) {
        const transportation = {
            id: Date.now(),
            distance,
            modeOfTransport,
            overallCo2
        }
        this.transportations = [...this.transportations, transportation]
        this.notifyObservers({trip: this, addTransportation: transportation})
    }

    removeTransportation(transportation) {
        const updatedTransportations = this.transportations.filter((transp) => transp.id !== transportation.id)
        if (updatedTransportations.length !== this.transportations.length) {
            this.transportations = updatedTransportations
            this.notifyObservers({trip: this, removeTransportation: transportation})
        }
    }
}

export default Trip