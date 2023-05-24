import { Component } from 'react';
import FeedbackOptions from './FeedBackOptions/FeedbackOptions';
import Section from './Section/Section';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
    return this.state.good + this.state.neutral + this.state.bad;
  }

  positivePercentage() {
    return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className="StatSection">
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleIncrement}
          />
        </Section>
        <Section title="Statistics">
          {this.countTotalFeedback() === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.positivePercentage()}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default App;
