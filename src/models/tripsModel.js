class TripsModel {
    constructor(trips = []) {
        this.trips = trips
        this.observers = []
    }

    getTrip(id) {
        if (this.trips){
            return this.trips.find(trip => trip.id === id)
        } else {
            return null
        }
    }

    addTrip(trip) {
        this.trips = [...this.trips, trip]
        this.notifyObservers({addTrip: trip})
    }

    removeTrip(trip) {
        const updatedTrips = this.trips.filter((t) => t.id !== trip.id)
        if (updatedTrips.length !== this.trips.length) {
            this.trips = updatedTrips
            this.notifyObservers({removeTrip: trip})
        }
    }

    addTransportation(tripId, distance, passengers, modeOfTransport, co2) {
        const trip = this.getTrip(tripId)
        if (trip) {
            const transportation = {
                id: Date.now(),
                distance,
                passengers,
                modeOfTransport,
                co2
            }
            trip.transportations = [...trip.transportations, transportation]
            this.notifyObservers({tripId: trip.id, addTransportation: transportation})
        }
    }

    removeTransportation(tripId, transportation) {
        const trip = this.getTrip(tripId)
        if (trip) {
            const updatedTransportations = trip.transportations.filter((transp) => transp.id !== transportation.id)
            if (updatedTransportations.length !== trip.transportations.length) {
                trip.transportations = updatedTransportations
                this.notifyObservers({tripId: trip.id, removeTransportation: transportation})
            }
        }
    }

    /* Observer stuff */
	addObserver(callback) {
		//immutable way to append x to arr
		this.observers.push(callback);
	}

	removeObserver(callback) {
		function filterObsCB(obs) {
			return obs !== callback;
		}
		this.observers = this.observers.filter(filterObsCB);
	}

	notifyObservers(payload) {
		this.observers.forEach(function invokeObserverCB(obs) {
			try {
				obs(payload);
			} catch (err) {
				console.error(err);
			}
		});
	}
}

export default TripsModel