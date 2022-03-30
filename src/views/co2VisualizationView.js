//props.results should contain a 2-dim array of labels of the activity and amount of kgCo2 for each activity

function Co2VisualizationView(props) {
  return <div class="columns is-centered">{renderData(props.results)}</div>;
}

function renderData(co2Data) {
  function visualizeCo2DataPointCB(co2DataPoint) {
    return (
      <div key={co2DataPoint} class="column is-one-quarter has-text-centered">
        <text class="subtitle is-5"> {co2DataPoint[0]} </text> <br />
        <button class="button is-primary is-outlined">
          + Add to trip
        </button>{" "}
        <br />
        <text class="subtitle is-7">{co2DataPoint[1]}</text>
        <br />
        <svg
          class="bar"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          height="100vh"
          width="25%"
        >
          <g class="Bars">
            <polygon
              class="bar bar-green"
              fill={getColor(co2DataPoint[1])}
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
  let scale_factor = normalizeNumber(emissions);
  let height = scale_factor * max_height;
  const shape = `0,0   200,0   200,${height}   0,${height}`;

  return shape;
}

function getColor(emissions) {
  var value = normalizeNumber(emissions);

  var hue = ((1 - value) * 120).toString(10);
  return ["hsl(", hue, ",100%, 70%)"].join("");
}

function normalizeNumber(val, max = 1.8, min = 1) {
  return (val - min) / (max - min);
}

export default Co2VisualizationView;
