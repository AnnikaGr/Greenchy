class TripModel {
  constructor(
    distance = null,
    modeOfTransport = null,
    overallCo2 = 0
  ) {
    this.observers = [];
    this.distance = distance;
    this.modeOfTransport = modeOfTransport;
    this.overallCo2 = overallCo2;
  }

  setDistance(distance) {
    this.distance = distance;
    this.notifyObservers({distance: this.distance})
  }

  setOverallCo2(co2) {
    this.overallCo2 = co2;
    this.notifyObservers({overallCo2: this.overallCo2})
  }

  setModeOfTransport(vehicle) {
    console.log(vehicle)
    this.modeOfTransport = vehicle;
    this.notifyObservers({modeOfTransport: this.modeOfTransport})
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

export default TripModel;