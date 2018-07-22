import { h, Component }from 'preact';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event, this.props.name);
  }

  render() {
    return (
      <tr>
        <td>
          <label>
            {this.props.name}:
          </label>
        </td>
        <td>
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </td>
      </tr>
    );
  }
}

export default Field;
