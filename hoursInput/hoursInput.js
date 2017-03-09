import React, { Component } from 'react';
import hoursInputSubmit from './hoursInputSmart.js'

class HoursInput extends Component {
  render() {
    return (
      <div>
      <div>
      Job # <i>FAKE</i><br/>
      Show <i>FAKE SHOW</i><br/>
      Location <i>FAKE LOCATION</i><br/>
      Regular Hours: <i>FAKE HOURS</i><br/>
      </div><br/>
        <form>
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                  <td>
                    <input type='date' ref={(date) => this.date1 = date}/>
                  </td>
              </tr>
              <tr>
                <th>Reg</th>
                  <td>
                    <input ref={(reg) => this.reg1 = reg}/>
                  </td>
              </tr>
              <tr>
                <th>OT</th>
                  <td>
                    <input/>
                  </td>
              </tr>
              <tr>
                <th>DT</th>
                  <td>
                    <input/>
                  </td>
              </tr>
              <tr>
                <th>Show</th>
                  <td>
                    <input/>
                  </td>
              </tr>
              <tr>
                <th>MP</th>
                  <td>
                    <input/>
                  </td>
              </tr>   
            </tbody>
          </table>
          <input type="submit" onClick={hoursInputSubmit.bind(this)} value="Submit"/>
        </form>
      </div>
    );
  }
}

export default HoursInput;