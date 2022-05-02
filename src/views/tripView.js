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
                </div>
            </div>
        );
    }
  }
  
  export default TripView;