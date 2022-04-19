import "charts.css";
import VueApexCharts from 'vue-apexcharts'


function TripView(props) {


    function renderPieChartABC(addedTransport){
        console.log(addedTransport)
        var labels = [];
        var series = [];
        addedTransport.forEach(element => {
            console.log(element)
            labels.push('' + element.modeOfTransport + ' ' + element.distance + ' km');
            series.push(element.co2)
        });
        console.log(labels)
        console.log(series)
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
                        <h1>Overall Co2 Emission: {props.overallCo2.toFixed(3)}</h1>
                    </div>
                <div class="card-content">
                     {renderPieChartABC(props.transportations)}
                </div>
                <footer class="card-footer">
                    <a href="#" class="card-footer-item">Save</a>
                    <a href="#" class="card-footer-item">Edit</a>
                    <a href="#" class="card-footer-item">Delete</a>
                 </footer>
                </div>
        </div>
    );
  }
  
  export default TripView;