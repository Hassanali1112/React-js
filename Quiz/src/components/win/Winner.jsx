import React from 'react'
import './Winner.css'

const Winner = ({earnedMoney}) => {
  return (
    <div className=' container-fluid bg-success text-capitalize  text-white h1'>
        <h3 >Congratulations</h3>
        <p>you have achieve this mile stone </p>
        <h3>you earned : {earnedMoney}</h3>
    </div>
  )
}

export default Winner