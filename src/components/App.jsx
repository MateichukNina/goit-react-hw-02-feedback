import { Statistic } from './Statistics';
import { FeedbackOptions } from './FeedbackOptions';
import { Notification } from './Notification';
import { Component } from 'react';
import { GlobalStyles } from './GlobalStyle';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClickGood = () => {
    this.setState(prevState => {
      return {
        good: prevState.good + 1,
      };
    });
  };

  handleClickNeutral = () => {
    this.setState(prevState => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };

  handleClickBad = () => {
    this.setState(prevState => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = () => {
    const { good } = this.state;
    const totalFeedback = this.totalFeedback();
    return totalFeedback === 0 ? 0 : Math.round((good / totalFeedback) * 100);
  };

  render() {
    const total = this.totalFeedback();

    return (
      <div
        style={{
          height: '100vh',
          //  display: 'flex',
          //  alignItems: 'center',
          margin: '100px',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <FeedbackOptions style={{display: 'flex', alignItems: 'center',}}
          handleClickGood={this.handleClickGood}
          handleClickNeutral={this.handleClickNeutral}
          handleClickBad={this.handleClickBad}
         
        />
           {total > 0 ? (
          <Statistic
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            totalFeedback={total}
            positiveFeedback={this.positiveFeedback()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
        <GlobalStyles/>
      </div>
    );
  }
}
