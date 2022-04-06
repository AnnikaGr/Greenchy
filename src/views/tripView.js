import "charts.css";

function TripView(props) {
    const style = {
        '--start': 0.0,
        '--size': props.overallCo2/100,
    }
    return (
      <div>
          <div class="box">
                <h2 class="title is-4">Overall Co2 Emission</h2>
                <div>
                    <h1>{props.overallCo2.toFixed(4)} kgCo2 </h1>
                    <table class="charts-css area" style={{height: '200px', maxWidth: '400px', margin:' 0 auto'}}>
                    <caption> Overall Co2 Emission </caption>
                    <tbody>
                            <tr>
                            <td style={style} > <span class="data"> {props.overallCo2.toFixed(2)} kg Co2 </span> </td>
                            </tr>
                        </tbody>
                    </table>                
                </div>
                
                </div>
        </div>
    );
  }
  
  export default TripView;