import "charts.css";


const TripView = {
    props: ['trip', 'onTransportDeletion', 'onAlternativesSearch'],
    mounted (){
        this.renderChartEvents();
    },
    methods: {
        renderPieChartABC(addedTransports){
            var labels = [];
            var series = [];
    
            addedTransports.forEach(element => {
                labels.push( '' + element.modeOfTransport + ' ' + element.co2.toFixed(1) + ' kg Co2' + '<button style="font-size: 10px; margin-left: 5px;">' + 'X' + '</button>' );
                series.push(element.co2);
            });
            var options = {
                    chart: {
                        type: 'donut',
                        events: {
                            legendClick: (seriesIndex, chartContext) => {
                                this.onTransportDeletion(addedTransports[chartContext], this.trip.id);
                            }
                        },
                        legend: {
                            onItemClick: {
                                toggleDataSeries: false
                            },
                          },
                    },
                    responsive: [
                        {
                          breakpoint: 1300,
                          options: {
                            chart: {
                                width: "100%",
                                height: 380,
                                type: "donut"
                              },
                            legend: {
                              position: "bottom"
                            }
                          }
                        }
                      ],
                    tooltip: {
                        enabled: false
                    },
                labels: labels,
                
        }
            return(
                <apexchart width="500"  options={options} series={series}></apexchart> 
            )
        },
        renderChartEvents(){
            this.onAlternativesSearch(null,null);
            
        },
        calculateOverallCo2CB(sum, val){
            return sum + val.co2
        }
    },
    render (){

            return (
                <div>
                <div class="card box">
                  <h2 class="title is-4">
                    Overall Co2:{" "}
                    <b>
                      {" "}
                      {this.trip.transportations
                        .reduce(this.calculateOverallCo2CB, 0)
                        .toFixed(2)}
                    </b>{" "}
                    kg Co2{" "}
                  </h2>
                  <div  class="card-content">
                    {this.renderPieChartABC(this.trip.transportations)}
                  </div>
                  <a class="button" href="https://store.compensate.com" target="_blank">
                    Compensate{" "}
                    {this.trip.transportations
                      .reduce((prev, curr) => prev + curr.co2 / 1000, 0.0)
                      .toFixed(2)}
                    t of Co2 emissions
                  </a>
                </div>
              </div>
            );

      }
    }
   
  export default TripView;
