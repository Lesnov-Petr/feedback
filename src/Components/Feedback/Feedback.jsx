import React from "react";
import Section from "./Section";
import FeedbackOptions from "./FeedbackOptions";
import Statistics from "./Statistics";

class Feedback extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onLeaveFeedback = (event) => {
    const isBtnText = event.target.textContent;
    this.countTotalFeedback();
    this.setState((prevState) => {
      if (isBtnText === "Good") {
        return { good: prevState.good + 1 };
      } else if (isBtnText === "Neutral") {
        return { neutral: prevState.neutral + 1 };
      } else {
        return { bad: prevState.bad + 1 };
      }
    });
    this.countPositiveFeedbackPercentage();
  };

  countTotalFeedback = () => {
    this.setState((prevState) => {
      return { total: prevState.total + 1 };
    });
  };
  countPositiveFeedbackPercentage = () => {
    this.setState((prevState) => {
      return {
        positivePercentage: Math.round(
          (prevState.good / prevState.total) * 100
        ),
      };
    });
  };

  render() {
    return (
      <div className="feedback">
        <Section className="section" title="Please leave feedback">
          <FeedbackOptions onIncrement={this.onLeaveFeedback} />
        </Section>
        <Section className="section" title="Statistics">
          <Statistics
            good={this.state.good}
            neutral={this.state.neutral}
            bad={this.state.bad}
            total={this.state.total}
            positivePercentage={this.state.positivePercentage}
          />
        </Section>
      </div>
    );
  }
}

export default Feedback;
