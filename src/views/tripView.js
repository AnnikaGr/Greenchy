import "charts.css";


function TripView(props) {


    function renderPieChartABC(addedTransports){
        var labels = [];
        var series = [];
        var transports = [];

        addedTransports.forEach(element => {
            labels.push('' + element.modeOfTransport + ' ' + element.distance + ' km' + ' [X]' );
            series.push(element.co2);
            transports.push(element);
        });
        var options = {
                chart: {
                    type: 'donut',
                    events: {
                        legendClick: (seriesIndex) => {
                            props.onTransportDeletion(transports[seriesIndex]);
                        }
                    },
                },
            labels: labels
    }
    
        

        return(
            <apexchart width="500"  options={options} series={series}></apexchart> 
        )
 
    }

    function calculateOverallCo2CB(sum, val){
        console.log(sum)
        console.log(val.co2)
        return sum + val.co2
    }




    return (
        
      <div>
          <h1>Your trip</h1>
          <div class="card">
                    <div class="card-header">
                       <h1>Overall Co2: <b> {props.trip.transportations.reduce(calculateOverallCo2CB, 0).toFixed(2)}</b> kg Co2</h1>
                    </div>
                <div class="card-content">
                     {renderPieChartABC(props.trip.transportations)}
                </div>
                
                
                </div>
        </div>
    );
  }
  
  export default TripView;