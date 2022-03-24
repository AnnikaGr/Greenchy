class tripModel {
    constructor(
      distance= null,
      modeOfTransport = '',
    ) {
      //Set this.observers to an empty array [] first thing in the constructor .
      //It needs to be first because some code used in the constructor may already notify observers.
      this.distance = distance;
      this.modeOfTransport = modeOfTransport;
      this.observers = [];
    }
}

export default tripModel;