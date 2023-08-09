
import { Section } from './Section';
import PropTypes from "prop-types";

export const Statistic = ({ good, neutral, bad, totalFeedback, positiveFeedback }) => {



  
    return (
      <div>
        <Section title="Statistic">
        
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {totalFeedback}</p>
        <p>Positive Feedback: {positiveFeedback}%</p>
        </Section>
      </div>
      
    );
  
}


Statistic.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  totalFeedback: PropTypes.number,
  positiveFeedback: PropTypes.number,
}