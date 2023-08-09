
import { Section } from './Section';

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
