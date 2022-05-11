function AboutUsView() {
	return (
		<div class="page-wrapper block">
			<div class="container is-fluid">
				<section class="box mt-5">
					<p class="title">
						Welcome to Greenchy!
					</p>
					<p>
						Hi! Greenchy is your first sustainable trip planner.
						Greenchy is an online app that calculates how much CO2 you spend on a trip, so you can plan your perfect sustainable trip.
						Greenchy obtains its data from <a href="https://www.climatiq.io/" target="_blank">Climatiq</a> to calculate co2 emissions of
						each activity during your trip.
					</p>
				</section>
				<section class="box content">
					<p class="title is-size-4">How to use Greenchy </p>
					<p>
						It's easy! After creating an account, start by creating your next trip on the "My Trips" page.
						By clicking on the corresponding card you can edit the trip. Then you simply input the distance
						you plan to travel and how many people are on this journey. Click on "Compare alternatives" to
						see the impact of different modes of transportation. Add the journey to the trip by clicking on
						"Add to Trip" for your preferred option. That's it!
					</p>
				</section>
				<section class="box content">
					<p class="title is-size-4">What have we done </p>
					<p>
						For the time being we have developed our first version in which you can start calculating how
						much CO2 your spend during a trip with multiple journeys. You can create multiple trips and edit
						them individually. Simply after inputting the amount of kilometers, you will have different
						options such as plane, train or car to choose from.
					</p>
					<p>
						After seeing the different options, you just have to press the plus button to add that option to your trip.
						The trips are persisted and connected to your account for which you can sign up on our Welcome Page.
					</p>

				</section>
				<section class="box content">
					<p class="title is-size-4">What we still plan to do </p>
					<p>
						We plan to keep adding features to foster less pollution by
						comparing accommodations and meal options during your trip. At the
						end you will have a view of your CO2 spent in your whole trip with
						all its activities. You will have a full emission record of each
						trip. We also want to move from a simple distance input to a input
						via map and route planning to make it more intuitive.
					</p>
				</section>
			</div>
		</div>
	);
}

export default AboutUsView;
