import "charts.css";

function tripView(props) {
    console.log(props)
    const style = {
        '--start': 0.0,
        '--size': props.overallCo2/100,
    }
    return (
      <div>
          <h1>Your trip</h1>
          <div class="card">
                    <div class="card-header">
                        <h1>Overall Co2 Emission</h1>
                    </div>
                <div class="card-content">
                    <h1>{props.overallCo2}</h1>
                    <table class="charts-css area" style={{height: '200px', maxWidth: '400px', margin:' 0 auto'}}>
                    <caption> Overall Co2 Emission </caption>
                    <tbody>
                            <tr>
                            <td style={style} > <span class="data"> {props.overallCo2} </span> </td>
                            </tr>
                        </tbody>
                    </table>                
                </div>
                <footer class="card-footer">
                    <a href="#" class="card-footer-item">Save</a>
                    <a href="#" class="card-footer-item">Edit</a>
                    <a href="#" class="card-footer-item">Delete</a>
                 </footer>

                </div>
        </div>
    );
  }
  
  export default tripView;