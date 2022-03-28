import "charts.css";

//props.results should contain a 2-dim array of labels of the activity and amount of kgCo2 for each activity
function Co2VisualizationView(props) {
  //TODO: fill table with tr with each one td
  function renderData(co2Data) {

    function co2DataTableRowCB(co2DataPoint) {
      return (
        <tr>
          <th scope="row">{co2DataPoint[0]}</th>
          <td key={co2DataPoint}>{co2DataPoint[1]}
          <button onClick={() => props.onSelectTransport(co2DataPoint)}>+</button>
          </td>
        </tr>
      );
    }
  
    return co2Data.map(co2DataTableRowCB);
  }
  
  return (
    <table class="charts-css bar show-labels show-4-secondary-axes co2-chart block">
      <tbody>{renderData(props.results)}</tbody>
    </table>
  );
}


export default Co2VisualizationView;
