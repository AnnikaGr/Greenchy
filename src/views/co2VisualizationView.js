//props.results should contain a 2-dim array of labels of the activity and amount of kgCo2 for each activity

function Co2VisualizationView(props) {
  return (
    <div class="columns is-centered">
      {renderData(
        props.results,
        Math.max.apply(
          Math,
          props.results.map((value) => value[1])
        ),
        props
      )}
    </div>
  );
}

function renderData(co2_data, activity_worst_emissions, props) {
  function visualizeCo2EmissionsCB(activity_co2_emissions) {
    return (
      <div
        key={activity_co2_emissions}
        class="column is-one-quarter has-text-centered"
      >
        <text class="subtitle is-5"> {activity_co2_emissions[0]} </text> <br />
        <button
          onClick={() => props.onSelectTransport(activity_co2_emissions)}
          class="button is-primary is-outlined"
        >
          + Add to trip
        </button>{" "}
        <br />
        <text class="subtitle is-7">{activity_co2_emissions[1]} kg Co2</text>
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
              fill={getColor(activity_co2_emissions[1])}
              points={drawBar(
                activity_co2_emissions[1],
                activity_worst_emissions
              )}
            ></polygon>
          </g>
        </svg>
      </div>
    );
  }

  return co2_data.map(visualizeCo2EmissionsCB);
}

function drawBar(emissions, activity_worst_emissions) {
  // order of point coordinates (x,y): top left   top right   bottom right  bottom left

  const max_height = 600;
  let scale_factor = normalizeNumber(emissions, activity_worst_emissions);
  let height = scale_factor * max_height;
  const shape = `0,0   200,0   200,${height}   0,${height}`;

  return shape;
}

function getColor(emissions, acitivity_worst_emissions) {
  var value = normalizeNumber(emissions, acitivity_worst_emissions);

  var hue = ((1 - value) * 120).toString(10);
  return ["hsl(", hue, ",100%, 70%)"].join("");
}

function normalizeNumber(val, max, min = 1) {
  return (val - min) / (max - min);
}

export default Co2VisualizationView;
