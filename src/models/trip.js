class Trip {
    constructor(name = "new Trip", transportations = [], id = Date.now()) {
        this.id = id
        this.name = name
        this.transportations = transportations
    }

    getOverallCo2() {
        return this.transportations.reduce((prev, curr) => prev + curr.co2, 0)
    }
}

export default Trip