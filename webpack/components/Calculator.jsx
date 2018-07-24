import { h, Component } from 'preact';
import Field from './Field.jsx';
import val_to_money from '../utilities/val_to_money.js';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = this.defaults();
    this.handleChange = this.handleChange.bind(this);
  }

  defaults() {
    return {
      fe: 10000*100,
      m: 122000*100,
      cc: 5000*100,
      al: 2000*100,
      o: 0*100,
      msi: 1000*100,
      lpli: 120000*100,
    };
  }

  handleChange(event, id_key) {
    const value = parseInt(event.target.value.replace(/[^0-9]/g, '')) || 0
    this.setState({
      [id_key]: value
    });
  }

  totalSurvivorIncome() {
    return this.state.msi * 12 * 20
  }

  totalLifeInsurance() {
    return this.state.fe +
      this.state.m +
      this.state.cc +
      this.state.al +
      this.state.o +
      this.totalSurvivorIncome()
  }

  newLifeInsurance() {
    return this.totalLifeInsurance() - this.state.lpli
  }

  render() {
    return (
      <table class='no-border'>
        <tbody>
          <tr>
            <Field
              name='Funeral Expense'
              val={val_to_money(this.state.fe)}
              id_key='fe'
              handleChange={this.handleChange} />
            <td>
            </td>
          </tr>
          <tr>
            <td>
              Debts you want paid off
            </td>
            <td>
            </td>
          </tr>
          <tr>
            <Field
              mindent={true}
              name='Mortgage'
              val={val_to_money(this.state.m)}
              id_key='m'
              handleChange={this.handleChange} />
            <td>
            </td>
          </tr>
          <tr>
            <Field
              mindent={true}
              name='Credit Cards'
              val={val_to_money(this.state.cc)}
              id_key='cc'
              handleChange={this.handleChange} />
            <td>
            </td>
          </tr>
          <tr>
            <Field
              mindent={true}
              name='Auto Loans'
              val={val_to_money(this.state.al)}
              id_key='al'
              handleChange={this.handleChange} />
            <td>
            </td>
          </tr>
          <tr>
            <Field
              mindent={true}
              name='Other'
              val={val_to_money(this.state.o)}
              id_key='o'
              handleChange={this.handleChange} />
            <td>
            </td>
          </tr>
          <tr>
            <Field
              name='Monthly Survivor Income'
              val={val_to_money(this.state.msi)}
              id_key='msi'
              handleChange={this.handleChange} />
            <td>
              <input readonly
                style="border: none;
                background-color: #27ff99;
                text-align: right"
                value={val_to_money(this.totalSurvivorIncome())}
              />
            </td>
          </tr>
          <tr>
            <td>
              Total Life Insurance Needed
            </td>
            <td>
              <input readonly
                style="border: none;
                background-color: #27ff99;
                text-align: right"
                value={val_to_money(this.totalLifeInsurance())}
              />
            </td>
          </tr>
          <tr>
            <Field
              name='Less Present Life Insurance'
              val={val_to_money(this.state.lpli)}
              id_key='lpli'
              handleChange={this.handleChange} />
            <td>
            </td>
          </tr>
          <tr>
            <td>
              New Life Insurance Needed
            </td>
            <td>
              <input readonly
                style="border: none;
                background-color: #27ff99;
                text-align: right"
                value={val_to_money(this.newLifeInsurance())}
              />
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Calculator;
