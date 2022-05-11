import "charts.css";
import ApexCharts from "apexcharts";

const TripSummaryView = {
	props: ['tripId', 'transportations', 'onTransportDeletion'],
	mounted() {
		var labels = [];
		var series = [];

		this.transportations.forEach(element => {
			labels.push('' + element.modeOfTransport + ' ' + element.co2.toFixed(1) + ' kg Co2' + '<button style="font-size: 10px; margin-left: 5px;">' + 'X' + '</button>');
			series.push(element.co2);
		});

		var options = {
			chart: {
				type: 'donut',
				width: '500',
				events: {
					legendClick: (seriesIndex, chartContext) => {
						this.onTransportDeletion(this.transportations[chartContext], this.tripId);
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
			series: series,
			labels: labels
		}

		this.chart = new ApexCharts(document.querySelector("#chart"), options)
		this.chart.render()
	},
	updated() {
		var labels = [];
		var series = [];

		this.transportations.forEach(element => {
			labels.push('' + element.modeOfTransport + ' ' + element.co2.toFixed(1) + ' kg Co2' + '<button style="font-size: 10px; margin-left: 5px;">' + 'X' + '</button>');
			series.push(element.co2);
		});

		if (this.chart){
			const newOptions = {
				series: series,
				labels: labels
			}
			this.chart.updateOptions(newOptions, true)
		}
	},
	beforeUnmount() {
		if (this.chart) {
			this.chart.destroy()
		}
	},
	render() {
		function calculateOverallCo2CB(sum, val) {
			return sum + val.co2
		}
		return (
			<div>
				<div class="card box p-6">
					<h2 class="title is-4">
						Overall Co2:{" "}
						<b>
							{" "}
							{this.transportations
								.reduce(calculateOverallCo2CB, 0)
								.toFixed(2)}
						</b>{" "}
						kg Co2{" "} per passenger
					</h2>
					<div class="card-content">
						<div id="chart" class={this.transportations && this.transportations.length > 0 ? "" : "hidden"}></div>
					</div>
					{this.transportations && this.transportations.length > 0 ?
					(
					<a class="button" href="https://store.compensate.com" target="_blank">
						Compensate{" "}
						{this.transportations
							.reduce(calculateOverallCo2CB, 0.0)
							.toFixed(2)}
						kg of Co2 emissions
					</a>) : false}
				</div>
			</div>
		);

	}
}

export default TripSummaryView;