import { useState } from "react";

import Section from "./Section";
import Statistics from "./Statistics";
import Notification from "./Notification";
import FeedbackOptions from "./FeedbackOptions";

export function App() {
  const [good, setGoodFeedback] = useState(0);
  const [neutral, setNeutralFeedback] = useState(0);
  const [bad, setBadFeedback] = useState(0);

  const onFeedbackClick = (feedbackName) => {
    switch (feedbackName) {
      case "good":
        setGoodFeedback(good + 1);
        break;
      case "neutral":
        setNeutralFeedback(neutral + 1);
        break;
      case "bad":
        setBadFeedback(bad + 1);
        break;
      default: return;
    } 
  }

  const countTotalFeedback = () => {
    const total = good + neutral + bad;
    return total;
  }

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();

    if (total === 0) {
      return false;
    }

    return ( Math.round((good / total * 100) * 100) / 100);
  }

  return (
    <div
      style={{
        height: '100vh',
        // display: 'flex',
        // justifyContent: 'center',
        // alignItems: 'center',
        fontSize: 20,
        // textTransform: 'uppercase',
        color: '#010101',
      }}
      >
        <h1>Welcome to Expresso</h1>
        <p>Your feedback is crucial to us and we absolutely totally positively don't throw it out of the window. <br></br> We don't even have windows! That being said...</p>
        <Section title="How do you like our coffee?">
          <FeedbackOptions
            options={[
              { name: "good", title: "Yum!"},
              { name: "neutral", title: "Okay" },
              { name: "bad", title: "Yuck" },
            ]}
            onLeaveFeedback={onFeedbackClick}
          ></FeedbackOptions>
        </Section>   

        <Section title="Coffee statistics">
          {countTotalFeedback() === 0 ?
            <Notification message="There is no feedback"></Notification> :
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}>
            </Statistics>
          }
        </Section>
    </div>
  );
}