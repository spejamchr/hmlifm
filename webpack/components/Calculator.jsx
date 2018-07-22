import { h, Component }from 'preact';

class Calculator extends Component {
  render() {
    let time = new Date().toLocaleTimeString();
    return <span>Time: { time }</span>;
  }
}

export default Calculator;
