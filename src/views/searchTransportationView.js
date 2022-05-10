import Swal from "sweetalert2";
/* eslint-disable */
function SearchTransportationView(props) {
  function distanceChangeACB(event) {
    props.onDistanceInputChange(event.target.value);
  }

  function passengerChangeACB(event) {
    props.onPassengersInputChange(event.target.value);
  }

  function getAlternatives() {
    props.onAlternativesSearch();
  }

  function renderSearchError() {
    if (props.searchErrorCode === 0) {
      return false;
    } else if (props.searchErrorCode === 1) {
      return (
        <article class="message is-error mt-5">
          <div class="message-body">
            <p>
              Input a valid distance and a number of passengers to look for
              transportation alternatives
            </p>
          </div>
        </article>
      );
    } else if (props.searchErrorCode === 2) {
      return (
        <article class="message is-error mt-5">
          <div class="message-body">
            <p>Please input a positive travel distance</p>
          </div>
        </article>
      );
    } else if (props.searchErrorCode === 3) {
      return (
        <article class="message is-error mt-5">
          <div class="message-body">
            <p>You have to have at least 1 passenger</p>
          </div>
        </article>
      );
    }
  }
  return (
    <div class="searchForm is-fluid">
      <span class="title is-4"> Add a journey to your trip </span>
      <button
        class="button is-rounded is-small"
        onClick={() =>
          Swal.fire(
            "We use Climatiq API that uses emission factors from a range of validated sources available in the Open Emission Factor Database https://www.climatiq.io/explorer"
          )
        }
      >
        ?
      </button>
      {renderSearchError()}
      <div class="columns">
        <div class="column mt-5">
          <label class="subtitle is-5" for="distance-input">
            Travel distance
          </label>
          <div class="input-field-wrapper">
            <input
              class="input block "
              type="number"
              id="distance-input"
              name="distance-input"
              onChange={distanceChangeACB}
            />
            <div class="placeholder subtitle is-6">km</div>
          </div>
        </div>
        <div class="column mt-5">
          <label class="subtitle is-5" for="passengers-input">
            No. of Passengers
          </label>
          <div class="input-field-wrapper">
            <input
              class="input block"
              type="number"
              min="1"
              id="passengers-input"
              name="passengers-input"
              onChange={passengerChangeACB}
            />
          </div>
        </div>
      </div>

      <button onClick={getAlternatives} class="button is-primary">
        Compare alternatives
      </button>
    </div>
  );
}

export default SearchTransportationView;
