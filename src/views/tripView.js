import "charts.css";


function TripView(props) {


    function renderPieChartABC(addedTransports){
    console.log(addedTransports)
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
          {console.log(props)}
          <h1>Your trip</h1>
          <div class="card">
                    <div class="card-header">
                       
                    </div>
                <div class="card-content">
                     {renderPieChartABC(props.trip.transportations)}
                </div>
                
                </div>
        </div>
    );
  }
  
  export default TripView;