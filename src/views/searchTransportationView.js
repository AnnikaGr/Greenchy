function SearchTransportationView(props) {
  function searchChangeACB(event) {
    props.onSearchInputChange(event.target.value);
  }

  function getAlternatives() {
    props.onAlternativesSearch();
  }

  return (
    <div class="searchForm container is-fluid box">
      <h2 class="title is-4"> Add Transportation </h2>
      <label class="subtitle is-5" for="search-input">
        {" "}
        Distance{" "}
      </label>
      <input
        class="input block"
        type="text"
        placeholder="Enter distance"
        id="search-input"
        name="search-input"
        onChange={searchChangeACB}
      />
      <button onClick={getAlternatives} class="button is-primary">
        See alternatives!
      </button>
    </div>
  );
}

export default SearchTransportationView;
