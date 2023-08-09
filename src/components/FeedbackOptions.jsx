import { Section } from "./Section";




export const FeedbackOptions = ({handleClickGood, handleClickNeutral, handleClickBad}) => {
  
        return(
            <div>
              <Section title="FeedbackOptions">
              {/* <h1>Please leave Feedback</h1> */}
              <button onClick={handleClickGood}>Good</button>
              <button onClick={handleClickNeutral}>Neutral</button>
              <button onClick={handleClickBad}>Bad</button>
              </Section>
              
              </div>
  )
      }
    

  