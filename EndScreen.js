
import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import { Questions } from '../Helpers/QuestionBank'
import "../App.css"

function EndScreen() {

    const {score, setGameState, setScore} = useContext(QuizContext);

    const restartQuiz = () => {
        setGameState("menu");
        setScore(0);
    }
  return (
    <div className='EndScreen'>
        <h1>Quiz Finished</h1>
        <h3>{score} / {Questions.length}</h3>
        <button className="navButton" onClick={restartQuiz}>Restart Quiz</button>

    </div>
  )
}

export default EndScreen