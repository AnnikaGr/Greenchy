# Welcome to Greenchy!

Hi! **Greenchy** is your first sustainable trip planner. If you want to learn about Greenchy, keep reading. **Greenchy** is an online app that calculates how much CO2 you spend on a trip. From distance to meals, you can plan your perfect sustainable trip.

## What have we done

For the time being we have developed our first MVP in which you can start calculating how much CO2 your spend in distance. Simply introducing the amount of kilometers, you will have different options such as plane, train or bus to choose which one is best suitable for you order by less pollutant.
After seen the different options, you just have to press in the plus button to add that option to your trip.

## What we still plan to do

We plan to keep adding features in terms of less pollution accommodations and meals options. At the end you will have a view of your CO2 spend in your whole trip. You will have a record of each trip and stimate your annual CO2 spending.

## Project file structure

**Greenchy code** is split in two main folders: **src** and **public**. Inside src we have the MVP architecture splitting the project in: 

- Source folder

|                |Description                                                   
|----------------|-------------------------------
|emissionsSource|`Retriew data from Climatiq API`
|firebaseModel|`Firebase connection for authentication and persistance`
|main |`Initialize the app`
|router|`Definition of routes for Vue Router`
|utils|`Utility functions`

- Model: Layer for storing data. It is responsible for handling the domain logic(real-world business rules) and communication with the database and network layers.

|                |Description                                                   
|----------------|-------------------------------
|userModel|`Contains information about the user & tripsModel`
|tripsModel	|`Contains a collection and logic of trips`
|trip	|`Contains information about a single trip`

- Views: UI(User Interface) layer. It provides the visualization of the data and keep a track of the user’s action in order to notify the Presenter.

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
