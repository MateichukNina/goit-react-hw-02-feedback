import { Section } from "./Section";
import PropTypes from "prop-types";
import { Button } from "./FeedbackOptions.styled";




export const FeedbackOptions = ({handleClickGood, handleClickNeutral, handleClickBad}) => {
  
        return(
            <div>
              <Section title="FeedbackOptions">
              {/* <h1>Please leave Feedback</h1> */}
              <Button onClick={handleClickGood}>Good</Button>
              <Button onClick={handleClickNeutral}>Neutral</Button>
              <Button onClick={handleClickBad}>Bad</Button>
              </Section>
              
              </div>
  )
      }
    
      FeedbackOptions.propTypes = {
        handleClickGood: PropTypes.func.isRequired,
        handleClickNeutral: PropTypes.func.isRequired,
        handleClickBad: PropTypes.func.isRequired,
      };
      