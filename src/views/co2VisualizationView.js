//props.results should contain a 2-dim array of labels of the activity and amount of kgCo2 for each activity

function Co2VisualizationView(props) {
  return <div class="columns is-centered">{renderData(props.results)}</div>;
}

function renderData(co2Data) {
  function visualizeCo2DataPointCB(co2DataPoint) {
    return (
      <div key={co2DataPoint} class="column is-one-quarter">
        <button>+</button>
        <text class="subtitle is-6"> {co2DataPoint[0]} </text>
        <text class="subtitle is-7">{co2DataPoint[1]}</text>;
        <svg
          class="bar"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <g class="Bars">
            <polygon
              class="bar bar-green"
              fill="#00AD6A"
              points="0 2.84217094e-14 36 2.84217094e-14 36 225.828125 0 225.828125"
            ></polygon>
          </g>
        </svg>
      </div>
    );
  }

  return co2Data.map(visualizeCo2DataPointCB);
}

export default Co2VisualizationView;
