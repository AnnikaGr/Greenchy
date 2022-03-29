class UserModel {
  constructor(
    displayName = null,
    email = null,
    photoURL = null,
    uid = null,
    tripModel = null
  ) {
    //Set this.observers to an empty array [] first thing in the constructor .
    //It needs to be first because some code used in the constructor may already notify observers.
    this.displayName = displayName;
    this.email = email;
    this.photoURL = photoURL;
    this.uid = uid;
    this.tripModel = tripModel;
    this.observers = [];
  }

  reset() {
    this.displayName = null
    this.email = null
    this.photoURL = null
    this.uid = null
    this.tripModel = null
    this.observers = []
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

export default UserModel;
