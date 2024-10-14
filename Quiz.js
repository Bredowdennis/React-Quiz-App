import React, { useState , useContext} from "react"
import {Questions} from "../Helpers/QuestionBank"
import { QuizContext } from '../Helpers/Contexts'
import "../App.css"


function Quiz() {
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");
    const {score, setScore, setGameState} = useContext(QuizContext);
  

    const nextQuestion = () => {
        //Add to the score if the answer was correct
        if (Questions[currQuestion].answer === optionChosen){
            setScore(score + 1);
        }

        //display the next question
        setCurrQuestion(currQuestion + 1);
    }

    const finishQuiz = () => {
        // Add to the score if the answer was correct
        if (Questions[currQuestion].answer === optionChosen){
            setScore(score + 1);
        }

        // move to the end screen
        setGameState("endScreen");
    }


  return (
    <div className='Quiz'>
        <h1>{Questions[currQuestion].prompt}</h1>
        <div className="options">
            
            <button className="optionButton" onClick={() => setOptionChosen("A")}>{Questions[currQuestion].optionA}</button>
            <button className="optionButton" onClick={() => setOptionChosen("B")}>{Questions[currQuestion].optionB}</button>
            <button className="optionButton" onClick={() => setOptionChosen("C")}>{Questions[currQuestion].optionC}</button>
            <button className="optionButton" onClick={() => setOptionChosen("D")}>{Questions[currQuestion].optionD}</button>
        </div>
        {/* Determine what button to display if we're on the last question or not */}
        {currQuestion === Questions.length - 1 ? (
            <button className="navButton" onClick={finishQuiz}>Finish Quiz</button>) : (
    <button className="navButton" onClick={nextQuestion}>Next Question</button>
        )}
        
    </div>
  )
}

export default Quiz
