import "charts.css";

//props.results should contain a 2-dim array of labels of the activity and kgCo2 for each result activity
function Co2VisualizationView(props) {
  //TODO: fill table with tr with each one td
  return (
    <table class="charts-css bar show-labels show-4-secondary-axes co2-chart block">
      <tbody>{renderData(props.results)}</tbody>
    </table>
  );
}

function renderData(co2Data) {
  function co2DataTableRowCB(co2DataPoint) {
    return (
      <tr>
        <th scope="row">{co2DataPoint[0]}</th>
        <td key={co2DataPoint}>{co2DataPoint[1]}</td>;
      </tr>
    );
  }

  return co2Data.map(co2DataTableRowCB);
}

export default Co2VisualizationView;
