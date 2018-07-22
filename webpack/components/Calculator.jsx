import { h, Component } from 'preact';
import Field from './Field.jsx';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      'Funeral Expense': 10000,
      'Mortgage': 122000,
      'Credit Cards': 5000,
      'Auto Loans': 2000,
      'Other': 0,
      'Monthly Survivor Income': 1000,
      'Less Present Life Insurance': 120000,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, name) {
    this.setState({ [name]: event.target.value });
  }

  render() {
    return (
      <table style="border-collapse:collapse;">
        <tbody>
          <Field name='Funeral Expense' handleChange={this.handleChange} />
          <Field name='Mortgage' handleChange={this.handleChange} />
          <Field name='Credit Cards' handleChange={this.handleChange} />
          <Field name='Auto Loans' handleChange={this.handleChange} />
          <Field name='Other' handleChange={this.handleChange} />
          <Field name='Monthly Survivor Income' handleChange={this.handleChange} />
          <Field name='Less Present Life Insurance' handleChange={this.handleChange} />
        </tbody>
      </table>
    )
  }
}

export default Calculator;
