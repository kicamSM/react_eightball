import React, { useDebugValue, useState } from 'react';
import './Eightball.css'

const Eightball = (props) => {
    let answers = props.answers

    const genRandAnswr = () => answers[Math.floor(Math.random() * answers.length)];

    const genResp = () => {
        setAnswer(genRandAnswr().msg)
        setColor(genRandAnswr().color)
        if(color === 'red') {
            setccRed(ccRed + 1)
        }
        if(color === 'green') {
            setccGreen(ccGreen + 1)
        }
        if(color === 'goldenrod') {
            setccGoldenrod(ccGoldenrod + 1)
        }
    }

    const reset = () => {
        setColor("white")
        setAnswer("Think of a question.");
        setccGreen(0)
        setccRed(0)
        setccGoldenrod(0)
      };

    
    
    const [answer, setAnswer] = useState("Think of a question.")
    const [color, setColor] = useState("white")
    const [ccGreen, setccGreen] = useState(0)
    const [ccRed, setccRed] = useState(0)
    const [ccGoldenrod, setccGoldenrod] = useState(0)
    return (
        <div className="Eightball-stage">
            <span className="Eightball-shadow">
                <div className='Eightball'>
                    <div className='Eightball-inner' onClick={genResp} style={{backgroundColor: color}}>
                        <p className='Eightball-answer'>{answer}</p>
                    </div>
                </div>
            </span>
            <button className='Eightball-button' onClick={reset} style={{borderColor: color}}>Reset Game</button>
            <div className='Eightball-colors'>
                <h3>Color Counts</h3>
                <div style={{color: 'green'}}>Green: {ccGreen}</div>
                <div style={{color: 'red'}}>Red: {ccRed}</div>
                <div style={{color: 'goldenrod'}}>Goldenrod: {ccGoldenrod}</div>
            </div>
        </div>
    )
}


Eightball.defaultProps = {
    answers: [
    { msg: "It is certain.", color: "green" },
    { msg: "It is decidedly so.", color: "green" },
    { msg: "Without a doubt.", color: "green" },
    { msg: "Yes - definitely.", color: "green" },
    { msg: "You may rely on it.", color: "green" },
    { msg: "As I see it, yes.", color: "green" },
    { msg: "Most likely.", color: "green" },
    { msg: "Outlook good.", color: "green" },
    { msg: "Yes.", color: "green" },
    { msg: "Signs point to yes.", color: "goldenrod" },
    { msg: "Reply hazy, try again.", color: "goldenrod" },
    { msg: "Ask again later.", color: "goldenrod" },
    { msg: "Better not tell you now.", color: "goldenrod" },
    { msg: "Cannot predict now.", color: "goldenrod" },
    { msg: "Concentrate and ask again.", color: "goldenrod" },
    { msg: "Don't count on it.", color: "red" },
    { msg: "My reply is no.", color: "red" },
    { msg: "My sources say no.", color: "red" },
    { msg: "Outlook not so good.", color: "red" },
    { msg: "Very doubtful.", color: "red" },
  ]
}

export default Eightball