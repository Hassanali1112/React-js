import { useEffect, useState } from 'react';
import './Quiz.css';
import { quizdata } from './Quizdata/quizdata';
import useSound from 'use-sound';
import correct from '../assets/correctAnswer.mp3';


const Quiz = ({
  setTimeStop,
   questionNumber,
   setQuestionNumber
  }) => {
  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [className, setClassName] = useState('answer')
  const correcAnswer = useSound(correct)
  useEffect(()=>
  (setQuestion(quizdata[questionNumber-1]))
  ,[quizdata,questionNumber])
  const delayHandler = (duration, callback)=>{
    setTimeout(()=>{
      callback();
    },duration)
  }
  const clickHandler =(i)=>{
    setSelectedAnswer(i)
    
    setClassName('answer active');
    delayHandler(3000,()=>{
      setClassName(i.correct ? 'answer correct' : 'answer wrong')
      correcAnswer()
    });
    delayHandler(6000,()=>{
      if(i.correct){
        setQuestionNumber(prev=>prev+1)
        setSelectedAnswer(null)
      } else {
        setTimeStop(true)
      }
    });
  }
  
  return (
    
    <div className='quiz'>
      
        <>
        <div className="question"> {question?.question}</div>
        <div className="answers">
            {
              question?.answers.map((i)=>(
                <div className={selectedAnswer == i ? className : "answer"} onClick={()=>clickHandler(i)}>{i.text}</div>
              ))
            }
                
                
            </div>
           </>
      
    </div>
    
  )
}

export default Quiz