class TripsModel {
    constructor(trips = []) {
        this.trips = trips
        this.observers = []
    }

    getTrip(id) {
        return this.trips.find(trip => trip.id === id)
    }

    addTrip(trip) {
        trip.notifyObservers = this.notifyObservers
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