import ApexCharts from "apexcharts";

const TripSummaryView = {
	props: ['tripId', 'transportations', 'onTransportDeletion'],
	mounted() {
		var labels = [];
		var series = [];

		this.transportations.forEach(element => {
			labels.push(element.co2.toFixed(1) + 'km of ' + element.modeOfTransport + ' - ' + element.co2.toFixed(1) + 'kg Co2 X');
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
			labels.push(element.co2.toFixed(1) + 'km of ' + element.modeOfTransport + ' - ' + element.co2.toFixed(1) + 'kg Co2 X');
			series.push(element.co2);
		});

		if (this.chart) {
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
				<div class="card box p-6 container">
					<p class="title is-4">
						Overall Co2:{" "}
						<b>
							{" "}
							{this.transportations
								.reduce(calculateOverallCo2CB, 0)
								.toFixed(2)}
						</b>{" "}
						kg Co2{" "} per passenger
						<p class={this.transportations && this.transportations.length > 0 ? "help" : "hidden"}> To delete a journey click on the corresponding element in the legend </p>
					</p>
					<div class="card-content">

						<div id="chart" class={this.transportations && this.transportations.length > 0 ? "" : "hidden"}></div>
					</div>
					<div class="columns is-centered">

						{this.transportations && this.transportations.length > 0 ?
							(
								<a class="button is-primary is-inverted is-title icon-text" href="https://store.compensate.com" target="_blank">
									<span>Compensate {this.transportations.reduce(calculateOverallCo2CB, 0.0).toFixed(2)}kg of Co2 emissions</span>
									<span class="icon">
										<i class="fa-solid fa-arrow-right"></i>
									</span>
								</a>
							) : false}
					
					</div>
				</div>
			</div>
		);

	}
}

export default TripSummaryView;
