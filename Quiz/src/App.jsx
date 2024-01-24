import { useEffect, useState } from 'react'
import './App.css'
import Quiz from './components/Quiz'
import Timer from './components/Timer/Timer'
import Start from './components/start/Start'

import Winner from './components/win/Winner'

function App() {
  const [questionNumber, setQuestionNumber] = useState(1)
  const [timeStop, setTimeStop] = useState(false)
  const [earnedMoney, setEarnedMoney] = useState('$ 0')
  const [userName, setuserName] = useState(null)
  

  const moneyListItems = [
    {id : 1 , amount : '$ 10 '},
    {id : 2 , amount : '$ 50 '},
    {id : 3 , amount : '$ 100 '},
    {id : 4 , amount : '$ 500 '},
    {id : 5 , amount : '$ 1000 '},
    {id : 6 , amount : '$ 10000 '},
    {id : 7 , amount : '$ 25000 '},
    {id : 8 , amount : '$ 50000 '},
    {id : 9 , amount : '$ 75000 '},
    {id : 10 , amount : '$ 100000 '},
  ].reverse();

  

  useEffect(()=>{

    questionNumber > 1 && setEarnedMoney(moneyListItems.find((m)=>(m.id === questionNumber-1)).amount)
   
  },[questionNumber,moneyListItems])

  return ( 
    <>
    
    {questionNumber === moneyListItems.length+1 ? <Winner earnedMoney={earnedMoney} /> :
     <div className="app ">
        {
          userName ? (<>
          <div className="main ">
        {
          timeStop ? <h1 className='timerOverText'>You earned : {earnedMoney}</h1> : ( 
        <>
        <div className="top">
          <div className="timer ">
            <Timer questionNumber={questionNumber} setTimeStop={setTimeStop} />
          </div>
          </div>
          <div className="bottom  ">
            <Quiz 
            setTimeStop={setTimeStop}
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}/>
          </div>
          </>
        )}
      </div>
    <div className="moneypramid h-100 d-flex justify-content-center align-items-center p-2 "> 
      <ul className='moneyList w-100 list-unstyled  '>
        {
          moneyListItems.map((i)=>(
            <li key={i.id} className={(questionNumber === i.id) ? 'moneyListItem active' : 'moneyListItem'}>
            <span className='moneyListItemNumber fs-6 fw-lighter '>{i.id}</span>
            <span className='moneyListItemAmount fs-5 fw-light '>{i.amount}</span>
          </li>
          ))
        }
       </ul>
      </div>
          </>) : <Start setuserName={setuserName} />
        }
      
    </div>
    }
    </>
  )
}

export default App
