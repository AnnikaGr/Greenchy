
const AboutUsView = {
	render() {
		return (
			<div class="page-wrapper">
				<div class="container block is-fluid">
					<section class="box mt-5">
						<p class="title">
							Welcome to Greenchy!
						</p>
						<p>
							Hi! Greenchy is your first sustainable trip planner. If you want to learn about Greenchy, keep reading.
							Greenchy is an online app that calculates how much CO2 you spend on a trip. From distance to meals,
							you can plan your perfect sustainable trip.
							Greenchy nurtures its data from https://www.climatiq.io/.
							The app sends information about distance and it returns CO2 spend in different formats.
						</p>

					</section>
					<section class="box content">
						<p class="title is-size-4">What have we done </p>
							<p>
								For the time being we have developed our first MVP in which you can start calculating
								how much CO2 you spend during a trip with multiple journeys. You can create multiple
								trips and edit them individually. Simply after inputting the amount of kilometers,
								you will have different options such as plane, train or bus to choose from.
								After seeing the different options, you just have to press the plus button to add that
								option to your trip.
								The trips are persisted and connected to your account for which you can sign up on our
								Welcome Page.
							</p>
					</section>
					<section class="box content">
						<p class="title is-size-4">What we still plan to do </p>
							<p>
								We plan to keep adding features in terms of less pollution by accommodations and meal options
								during your trip. At the end you will have a view of your CO2 spend in your whole trip.
								You will have a record of each trip and an estimate of how much of your annual CO2 budget
								you used for this trip. We also want to move from a simple distance input to a input via map
								and route planning to make it more intuitive. Finally the goal until the end of the project is
								now to make the App more beautiful and easier to use.
							</p>
					</section>
				</div>
			</div>
		);
	}
}

export default AboutUsView;
