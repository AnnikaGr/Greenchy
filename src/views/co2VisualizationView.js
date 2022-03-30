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
          height="100vh"
        >
          <g class="Bars">
            <polygon
              class="bar bar-green"
              fill="#00AD6A"
              points={drawBar(co2DataPoint[1])}
            ></polygon>
          </g>
        </svg>
      </div>
    );
  }

  return co2Data.map(visualizeCo2DataPointCB);
}

function drawBar(emissions) {
  // order of point coordinates (x,y): top left   top right   bottom right  bottom left

  const max_height = 600;
  let scale_factor = normalizeNumber(emissions, 2, 0);
  let height = scale_factor * max_height;
  const shape = `0,0   36,0   36,${height}   0,${height}`;

  return shape;
}

function normalizeNumber(val, max, min) {
  return (val - min) / (max - min);
}

export default Co2VisualizationView;
