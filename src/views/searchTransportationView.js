function SearchTransportationView(props) {
  function searchChangeACB(event) {
    props.onSearchInputChange(event.target.value);
  }

  function getAlternatives() {
    props.onAlternativesSearch();
  }

  return (
    <div class="searchForm container is-fluid box">
      <h2 class="title is-4"> Add transportation </h2>
      <label class="subtitle is-5" for="search-input">
        Travel distance
      </label>

      <div class="input-field-wrapper">
        <input
          class="input block"
          type="text"
          id="search-input"
          name="search-input"
          onChange={searchChangeACB}
        />
        <div class="placeholder subtitle is-6">km</div>
      </div>

      <button onClick={getAlternatives} class="button is-primary">
        Compare alternatives
      </button>
    </div>
  );
}

export default SearchTransportationView;
