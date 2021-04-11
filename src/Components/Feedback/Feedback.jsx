import React from "react";
import Section from "../Section";
import FeedbackOptions from "../FeedbackOptions";
import Statistics from "../Statistics";
import Notification from "../Notification";

class Feedback extends React.Component {
  state = {
    Good: 0,
    Neutral: 0,
    Bad: 0,
  };

  onLeaveFeedback = (event) => {
    const isBtnText = event.target.textContent;
    this.setState((prevState) => {
      if (isBtnText === "Good") {
        return { Good: prevState.Good + 1 };
      } else if (isBtnText === "Neutral") {
        return { Neutral: prevState.Neutral + 1 };
      } else {
        return { Bad: prevState.Bad + 1 };
      }
    });
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    const { Good, Neutral, Bad } = this.state;
    return Good + Neutral + Bad;
  };
  countPositiveFeedbackPercentage = (total) => {
    return Math.round((this.state.Good / total) * 100);
  };

  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage(total);
    const options = Object.keys(this.state);
    return (
      <div className="feedback">
        <Section className="section" title="Please leave feedback">
          <FeedbackOptions
            onIncrement={this.onLeaveFeedback}
            options={options}
          />
        </Section>
        <Section className="section" title="Statistics">
          {total === 0 ? (
            <Notification />
          ) : (
            <Statistics
              good={this.state.Good}
              neutral={this.state.Neutral}
              bad={this.state.Bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}

export default Feedback;
