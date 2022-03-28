class tripModel {
    constructor(
      distance= null,
      modeOfTransport = {},
      overallCo2 = null
    ) {
      this.observers = [];
      this.distance = distance;
      this.modeOfTransport = modeOfTransport;
      this.overallCo2 = 0;
    }
    setDistance(distance){
      this.distance = distance;
    }
    setCO2Emission(co2){
      this.overallCo2 = this.overallCo2 + co2;
    }
    setTransportMode(vehicle){
      console.log(vehicle)
      this.modeOfTransport.query = vehicle;
    }

 
}

export default tripModel;