import React, { useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts'
import "../App.css"

function MainMenu() {

    const {setGameState} = useContext(QuizContext);
    return (
    <div className='Menu'>
        {/* Switch to the quiz screen */}
        <button className="navButton" onClick={() => {
            setGameState("quiz");
        }}>Start Quiz</button>
    </div>
  )
}

export default MainMenu