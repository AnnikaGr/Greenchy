import "charts.css";


function TripView(props) {
    function renderPieChartABC(addedTransports){
        var labels = [];
        var series = [];
        addedTransports.forEach(element => {
            console.log(element)
            labels.push('' + element.modeOfTransport + ' ' + element.distance + ' km');
            series.push(element.co2)
        });
        var options = {
            labels: labels
        }
        return(
            <apexchart width="500" type="donut" options={options} series={series}></apexchart> 
        )
    }
    if (props.trip.transportations.length > 0) {
        return (
            <div>
                <div class="card box">
                    <h2 class="title is-4"> Overall Co2 </h2>
                    <div class="card-content">
                        {renderPieChartABC(props.trip.transportations)}
                    </div>
                    <a class="button" href="https://store.compensate.com" target="_blank">
                        Compensate {props.trip.transportations.reduce((prev, curr) => prev + curr.co2/1000, 0.0).toFixed(2)}t of Co2 emissions
                    </a>
                </div>
            </div>
        );
    }
  }
  
  export default TripView;