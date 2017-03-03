import React, { Component } from 'react';
import hoursInputSubmit from './hoursInputSmart.js'

class HoursInput extends Component {
  render() {
    return (
      <div>
        <form>
          <table>
            <tbody>
              <tr>
                <th>Date</th>
                  <td>
                    <input type='date' ref={(date) => this.date1 = date}/>
                    <input type='date'ref={(date) => this.date2 = date}/>
                    <input type='date'/>
                    <input type='date'/>
                    <input type='date'/>
                    <input type='date'/>
                    <input type='date'/>
                  </td>
              </tr>
              <tr>
                <th>Reg</th>
                  <td>
                    <input ref={(reg) => this.reg1 = reg}/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                  </td>
              </tr>
              <tr>
                <th>OT</th>
                  <td>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                  </td>
              </tr>
              <tr>
                <th>DT</th>
                  <td>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                  </td>
              </tr>
              <tr>
                <th>Show</th>
                  <td>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                  </td>
              </tr>
              <tr>
                <th>MP</th>
                  <td>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
                    <input/>
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