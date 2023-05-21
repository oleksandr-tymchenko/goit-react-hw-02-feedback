import { Component } from 'react';
import FeedbackOptions from './FeedBackOptions/FeedbackOptions';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bed: 0,
  };

  stateKeys() {
    console.log(Object.keys(this.state));
  }

  handleIncrement = key => {
    this.setState(prewState => ({
      [key]: prewState[key] + 1,
    }));
    this.stateKeys();
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bed;
  }

  countPositiveFeedbackPercentage() {
    return (this.state.good / this.countTotalFeedback()) * 100;
  }

  render() {
    return (
      <div className="StatSection">
        <h2>Please leave feedback</h2>

        {/* <FeedbackOptions onEncrement={this.handleIncrement} /> */}
        <button
          type="button"
          name="good"
          onClick={event => this.handleIncrement(event.target.name)}
        >
          Good
        </button>
        <button
          type="button"
          name="neutral"
          onClick={event => this.handleIncrement(event.target.name)}
        >
          Neutral
        </button>
        <button
          type="button"
          name="bed"
          onClick={event => this.handleIncrement(event.target.name)}
        >
          Bed
        </button>

        <div className="Statistics">
          <h2>Statistics</h2>
          <ul>
            <li>
              <p>Good: {this.state.good}</p>
            </li>
            <li>
              <p>Neutral: {this.state.neutral}</p>
            </li>
            <li>
              <p>Bad: {this.state.bad}</p>
            </li>
            <li>
              <p>Total: {this.countTotalFeedback()}</p>
            </li>
            <li>
              <p>
                Posinive feedback: {this.countPositiveFeedbackPercentage()}%
              </p>
            </li>
          </ul>
        </div>

        {/* <Value value={this.state.value} />
        <Controls
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
        /> */}
      </div>
    );
  }
}

export default App;
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
