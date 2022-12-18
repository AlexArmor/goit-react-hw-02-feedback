import { Component } from 'react';
import { FeedbackOptions } from './FeedbackOptions';
import { Statistics } from './Statistics';
import { Section } from './Section';
import { Notification } from './Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = buttonName => {
    this.setState(prevState => ({
      [buttonName]: prevState[buttonName] + 1,
    }));
  };

  render() {
    const options = Object.keys(this.state);
    return (
      <>
        <FeedbackOptions
          options={options}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <div>
          <h2>Statistics</h2>
          <ul>
            <p>Good:{this.state.good}</p>
            <p>Neutral:{this.state.neutral}</p>
            <p>Bad:{this.state.bad}</p>
            <p>Positive feedback:</p>
          </ul>
        </div>
      </>
    );
  }
}
