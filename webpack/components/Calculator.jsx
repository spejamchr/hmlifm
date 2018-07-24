import { h, Component } from 'preact';
import Field from './Field.jsx';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = this.defaults();
    this.handleChange = this.handleChange.bind(this);
  }

  defaults() {
    return {
      fe: 10000,
      m: 122000,
      cc: 5000,
      al: 2000,
      o: 0,
      msi: 1000,
      lpli: 120000,
    };
  }

  handleChange(event, id_key) {
    this.setState({
      [id_key]: (parseInt(event.target.value) || 0)
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
      <table style="border-collapse:collapse;">
        <tbody>
          <tr>
            <Field
              name='Funeral Expense'
              val={this.state.fe}
              id_key='fe'
              handleChange={this.handleChange} />
          </tr>
          <tr>
            <td>
              Debts you want paid off
            </td>
          </tr>
          <tr>
            <Field
              mindent={true}
              name='Mortgage'
              val={this.state.m}
              id_key='m'
              handleChange={this.handleChange} />
          </tr>
          <tr>
            <Field
              mindent={true}
              name='Credit Cards'
              val={this.state.cc}
              id_key='cc'
              handleChange={this.handleChange} />
          </tr>
          <tr>
            <Field
              mindent={true}
              name='Auto Loans'
              val={this.state.al}
              id_key='al'
              handleChange={this.handleChange} />
          </tr>
          <tr>
            <Field
              mindent={true}
              name='Other'
              val={this.state.o}
              id_key='o'
              handleChange={this.handleChange} />
          </tr>
          <tr>
            <Field
              name='Monthly Survivor Income'
              val={this.state.msi}
              id_key='msi'
              handleChange={this.handleChange} />
            <td>
              {this.totalSurvivorIncome()}
            </td>
          </tr>
          <tr>
            <td>
              Total Life Insurance Needed
            </td>
            <td>
              {this.totalLifeInsurance()}
            </td>
          </tr>
          <tr>
            <Field
              name='Less Present Life Insurance'
              val={this.state.lpli}
              id_key='lpli'
              handleChange={this.handleChange} />
          </tr>
          <tr>
            <Field
              name='Less Present Life Insurance'
              val={this.state.lpli}
              id_key='lpli'
              handleChange={this.handleChange} />
          </tr>
          <tr>
            <td>
              New Life Insurance Needed
            </td>
            <td>
              {this.newLifeInsurance()}
            </td>
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Calculator;
