import { h, Component }from 'preact';

class Field extends Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.handleChange(event, this.props.id_key);
  }

  render() {
    const mident = this.props.mindent ? 'margin-left: 30px;' : ''
    return (
      <td style="text-align: right;">
        <span>
          <label style={`float: left;${mident}`}>
            {this.props.name}:
          </label>
        </span>
        <span>
          <input
            type="text"
            style="text-align: right;
            border: none;
            background-color: yellow;
            margin-left: 30px"
            value={this.props.val}
            onChange={this.handleChange} />
        </span>
      </td>
    );
  }
}

export default Field;
