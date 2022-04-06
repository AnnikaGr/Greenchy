# Welcome to Greenchy!

Hi! **Greenchy** is your first sustainable trip planner. If you want to learn about Greenchy, keep reading. **Greenchy** is an online app that calculates how much CO2 you spend on a trip. From distance to meals, you can plan your perfect sustainable trip.

## What have we done

For the time being we have developed our first MVP in which you can start calculating how much CO2 your spend during a trip with multiple journeys. You can create multiple trips and edit them individually. Simply after inputting the amount of kilometers, you will have different options such as plane, train or bus to choose from.
After seeing the different options, you just have to press the plus button to add that option to your trip.
The trips are persisted and connected to your account for which you can sign up on our Welcome Page.

## What we still plan to do

We plan to keep adding features in terms of less pollution by accommodations and meal options during your trip. At the end you will have a view of your CO2 spend in your whole trip. You will have a record of each trip and an estimate of how much of your annual CO2 budget you used for this trip. We also want to move from a simple distance input to a input via map and route planning to make it more intuitive. Finally the goal until the end of the project is now to make the App more beautiful and easier to use.

## Project file structure

**Greenchy code** is split in two main folders: **src** and **public**. Inside src we have the MVP architecture splitting the project in: 

- Source folder

|                |Description                                                   
|----------------|-------------------------------
|emissionsSource|`Retrieve data from Climatiq API`
|firebaseModel|`Firebase connection for authentication and persistance`
|main |`Initialize the app`
|router|`Definition of routes for Vue Router`
|utils|`Utility functions`

- Model: Layer for storing data. It is responsible for handling the domain logic(real-world business rules).

|                |Description                                                   
|----------------|-------------------------------
|userModel|`Contains information about the user & tripsModel`
|tripsModel	|`Contains a collection and logic of trips`
|trip	|`Contains information about a single trip`

- Views: UI(User Interface) layer. It provides the visualization of the data and keep a track of the user’s action in order to notify the Presenters.

|                |Description                                                   
|----------------|-------------------------------
| authenticationView|`Contains the view of Authentification`
|co2VisualizationView|`Contains the view of co2Visualitazion`
|navBarView |`Contains the view of navBar`
|promiseNoData|`Contains the view of promiseNoData`
|searchTransportationView|`Contains the view of searchTransportation`
|tripView |`Contains the view of trip`
|welcomePageView|`Contains the view of welcomePage`           

- Presenters: Fetch the data from the model and applies the UI logic to decide what to display. It manages the state of the View and takes actions according to the user’s input notification from the View.

|                |Description                                                   
|----------------|-------------------------------
|addTransportationPresenter|`Presents co2VisualizationView and searchTransportationView`
|authenticationPresenter|`Presents authenticationView`
|navBarPresenter |`Presents NavBarView`
|welcomePagePresenter|`Presents welcomePageView`
