import { h, Component }from 'preact';

class Calculator extends Component {
  render() {
    let time = new Date().toLocaleTimeString();
    /** @jsx h */
    return <span>Time: { time }</span>;
  }
}

export default Calculator;
