import React from 'react';
import { Component } from 'react';

// const [total, setTotal] = useState(0);
//   const handleClickIncrement = () => setTotal(prev => prev + 1);

class Feedback extends Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0,
    };

    handleFeedback = () =>
        this.setState(prevState => ({
            good: prevState.good + 1,
            // neutral: prevState.neutral + 1,
            // bad: prevState.bad + 1,
        }));

  countTotalFeedback = () => {
      this.setState(prevState => ({
          good: prevState.good + 1,
          neutral: prevState.neutral + 1,
          bad: prevState.bad + 1,
      }));

    render() { 
        return (<div>
          <h2>Please leave feedback</h2>
          <button onClick={() => this.handleFeedback('good')}>Good</button>
          <button onClick={() => this.handleFeedback('neutral')}>
            Neutral
          </button>
          <button onClick={() => this.handleFeedback('bad')}>Bad</button>
          <h2>Statistics</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback}</p>
          <p>Positive feedback: {this.state.positive}%</p>
          </div>
          );
      }
    }
  }


export default Feedback;

//  countTotalFeedback = () => {
// const { good, neutral, bad } = this.state;
// return good + neutral + bad;
//     };

// countPositiveFeedbackPercentage = () => {
// const total = this.countTotalFeedback();
// if (total === 0) {
// return 0;
// }
// return Math.round((this.state.good / total) * 100);
// };
