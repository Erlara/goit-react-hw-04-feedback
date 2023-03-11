import { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { GlobalStyle } from './GlobalStyle';
import { Layout } from './Layout';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import { Statistics } from './Statistics/Statistics';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const options = ['good', 'neutral', 'bad'];

  const onLeaveFeedBack = option => {
    switch (option) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  // onLeaveFeedBack = option => {
  //   this.setState(state => ({
  //     [option]: state[option] + 1,
  //   }));
  // };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / countTotalFeedback()) * 100);
  };

  return (
    <Layout>
      <Section title="Please leave feedback">
        <FeedbackOptions options={options} onLeaveFeedBack={onLeaveFeedBack} />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
      <GlobalStyle />
    </Layout>
  );
}
// state = {
//   good: 0,
//   neutral: 0,
//   bad: 0,
// };

// countTotalFeedback = () => {
//   return this.state.good + this.state.neutral + this.state.bad;
// };

// countPositiveFeedbackPercentage = () => {
//   return Math.round((this.state.good / this.countTotalFeedback()) * 100);
// };

//   render() {
//     return (
//       <Layout>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedBack={this.onLeaveFeedBack}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() !== 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//         <GlobalStyle />
//       </Layout>
//     );
//   }
// }

// import { Component } from 'react';
// import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
// import { GlobalStyle } from './GlobalStyle';
// import { Layout } from './Layout';
// import { Notification } from './Notification/Notification';
// import { Section } from './Section/Section';
// import { Statistics } from './Statistics/Statistics';

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   onLeaveFeedBack = option => {
//     this.setState(state => ({
//       [option]: state[option] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     return this.state.good + this.state.neutral + this.state.bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     return Math.round((this.state.good / this.countTotalFeedback()) * 100);
//   };

//   render() {
//     return (
//       <Layout>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={['good', 'neutral', 'bad']}
//             onLeaveFeedBack={this.onLeaveFeedBack}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() !== 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//         <GlobalStyle />
//       </Layout>
//     );
//   }
// }
