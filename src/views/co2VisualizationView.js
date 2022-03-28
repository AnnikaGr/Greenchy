//props.results should contain a 2-dim array of labels of the activity and amount of kgCo2 for each activity

function Co2VisualizationView(props) {
  return (
    <div class="bar-chart">
      <svg
        class="bar-graph"
        width="2183px"
        height="608px"
        viewBox="0 0 2183 608"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <title>Bar Graph</title>

        <g
          class="hero-animation"
          stroke="none"
          stroke-width="1"
          fill="none"
          fill-rule="evenodd"
        >
          <g
            class="months"
            transform="translate(1.000, 183.171875)"
            fill="#969696"
            font-family="WorkSans-Regular, Work Sans"
            font-size="13"
            font-weight="normal"
          >
            <text id="Aug">
              <tspan x="1190" y="12">
                Aug
              </tspan>
            </text>
            <text id="Jul">
              <tspan x="1020" y="12">
                Jul
              </tspan>
            </text>
            <text id="Jun">
              <tspan x="850" y="12">
                Jun
              </tspan>
            </text>
          </g>
          <g transform="translate(1.000000, 1.828125)">
            <g class="Bars" transform="translate(456.000000, 104.171875)">
              <g
                class="bars bars-jan"
                transform="translate(0.000000, 274.000000)"
              >
                <polygon
                  class="bar bar-green"
                  fill="#00AD6A"
                  points="0 2.84217094e-14 36 2.84217094e-14 36 225.828125 0 225.828125"
                ></polygon>
                <polygon
                  class="bar bar-red"
                  fill="#F68787"
                  points="39 28 75 28 75 225.828125 39 225.828125"
                ></polygon>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}

function renderData(co2Data) {
  function co2DataTableRowCB(co2DataPoint) {
    return (
      <tr>
        <th scope="row">{co2DataPoint[0]}</th>
        <td key={co2DataPoint}>{co2DataPoint[1]}</td>;
        {/* <button onClick={() => props.onSelectTransport(co2DataPoint)}>+</button> */}
      </tr>
    );
  }

  return co2Data.map(co2DataTableRowCB);
}

export default Co2VisualizationView;
