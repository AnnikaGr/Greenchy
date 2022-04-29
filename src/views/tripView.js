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




    return (
        
      <div>
          <h1>Your trip</h1>
          <div class="card">
                    <div class="card-header">
                       <h1>Overall Co2: </h1>
                    </div>
                <div class="card-content">
                     {renderPieChartABC(props.trip.transportations)}
                </div>
                
                </div>
        </div>
    );
  }
  
  export default TripView;