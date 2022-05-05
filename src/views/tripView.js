import "charts.css";

function TripView(props) {
  function renderPieChartABC(addedTransports) {
    var labels = [];
    var series = [];
    var transports = [];

    addedTransports.forEach((element) => {
      labels.push(
        "" +
          element.modeOfTransport +
          " " +
          element.co2.toFixed(1) +
          " kg Co2" +
          '<button style="font-size: 10px; margin-left: 5px;">' +
          "X" +
          "</button>"
      );
      series.push(element.co2);
      transports.push(element);
    });
    var options = {
      plotOptions: {
        pie: {
          expandOnClick: false,
        },
      },
      chart: {
        type: "donut",
        events: {
          legendClick: (seriesIndex, chartContext, config) => {
            props.onTransportDeletion(transports[chartContext], props.trip.id);
          },
        },
      },
      tooltip: {
        enabled: false,
      },
      labels: labels,
    };
    return (
      <apexchart width="500" options={options} series={series}></apexchart>
    );
  }
  function calculateOverallCo2CB(sum, val) {
    return sum + val.co2;
  }
  if (props.trip.transportations.length > 0) {
    return (
      <div>
        <div class="card box">
          <h2 class="title is-4">
            Overall Co2:{" "}
            <b>
              {" "}
              {props.trip.transportations
                .reduce(calculateOverallCo2CB, 0)
                .toFixed(2)}
            </b>{" "}
            kg Co2{" "}
          </h2>
          <div class="card-content">
            {renderPieChartABC(props.trip.transportations)}
          </div>
          <a class="button" href="https://store.compensate.com" target="_blank">
            Compensate{" "}
            {props.trip.transportations
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
