# Welcome to Greenchy!

Hi! **Greenchy** is your first sustainable trip planner. 
**Greenchy** is an online app that calculates how much CO2 you spend on a trip, so you can plan your perfect sustainable trip.
**Greenchy** obtains its data from [Climatiq.io](https://www.climatiq.io/). to calculate co2 emissions of
each activity during your trip.

## How to use Greenchy

It's easy! After creating an account, start by creating your next trip on the "My Trips" page. By clicking on the corresponding card you can edit the trip. Then you simply input the distance you plan to travel and how many people are on this journey. Click on "Compare alternatives" to see the impact of different modes of transportation. Add the journey to the trip by clicking on "Add to Trip" for your preferred option. That's it!


## What have we done

For the time being we have developed our first version in which you can start calculating how much CO2 your spend during a trip with multiple journeys. You can create multiple trips and edit them individually. Simply after inputting the amount of kilometers, you will have different options such as plane, train or car to choose from.

After seeing the different options, you just have to press the plus button to add that option to your trip.
The trips are persisted and connected to your account for which you can sign up on our Welcome Page.

## What we still plan to do

We plan to keep adding features to foster less pollution by
comparing accommodations and meal options during your trip. At the
end you will have a view of your CO2 spent in your whole trip with
all its activities. You will have a full emission record of each
trip. We also want to move from a simple distance input to a input
via map and route planning to make it more intuitive.

## Project file structure

**Greenchy code** is split in two main folders: **src** and **public**. Inside src we have the MVP architecture splitting the project in: 

- Source folder

|                 | Description                                              |
| --------------- | -------------------------------------------------------- |
| emissionsSource | `Retrieve data from Climatiq API`                        |
| firebaseModel   | `Firebase connection for authentication and persistance` |
| main            | `Initialize the app`                                     |
| router          | `Definition of routes for Vue Router`                    |
| utils           | `Utility functions`                                      |

- Model: Layer for storing data. It is responsible for handling the domain logic(real-world business rules).

|            | Description                                        |
| ---------- | -------------------------------------------------- |
| userModel  | `Contains information about the user & tripsModel` |
| tripsModel | `Contains a collection and logic of trips`         |
| trip       | `Contains information about a single trip`         |

- Views: UI(User Interface) layer. It provides the visualization of the data and keep a track of the user’s action in order to notify the Presenters.

|                          | Description                                                       |
| ------------------------ | ----------------------------------------------------------------- |
| aboutUsView              | `Contains the view of "About Us"`                                 |
| animateBars              | `Contains the Bar animation for co2VisualizationView`             |
| animateBike              | `Contains the Planet animation for the Welcome Page`              |
| authenticationView       | `Contains the view of Authentication`                             |
| co2VisualizationView     | `Contains the view for displaying impact of transportation modes` |
| navBarView               | `Contains the view of Navigation Bar`                             |
| promiseNoData            | `Contains the promiseNoData function`                             |
| searchTransportationView | `Contains the view of searchTransportation`                       |
| tripsOverviewView        | `Contains the view for "My Trips"`                                |
| tripSummaryView          | `Contains the view for the Trip Summary`                          |
| welcomePageView          | `Contains the view of welcomePage`                                |

- Presenters: Fetch the data from the model and applies the UI logic to decide what to display. It manages the state of the View and takes actions according to the user’s input notification from the View.

|                         | Description                                                             |
| ----------------------- | ----------------------------------------------------------------------- |
| aboutUsPresenter        | `Presents the AboutUsView`                                              |
| authenticationPresenter | `Presents authenticationView`                                           |
| navBarPresenter         | `Presents NavBarView`                                                   |
| transportationPresenter | `Presents co2VisualizationView and searchTransportationView`            |
| tripPresenter           | `Parent presenter for transportationPresenter and tripSummaryPresenter` |
| tripsOverviewPresenter  | `Presents tripsOverviewView`                                            |
| tripSummaryPresenter    | `Presents tripSummaryView`                                              |
| welcomePagePresenter    | `Presents welcomePageView`                                              |
