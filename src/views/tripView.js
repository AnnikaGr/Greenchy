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
                        legendClick: (config) => {
                            props.onTransportDeletion(transports[config.dataPointIndex]);
                        }
                    },
                },
            labels: labels
    }
    
        

        return(
            <apexchart width="500"  options={options} series={series}></apexchart> 
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