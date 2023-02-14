import React from 'react'
import { useAppSelector } from '../../redux/store'
import './Header.css'


function Header() {
  const totalScore = useAppSelector((state) => state.score.startScore);

  return (
    <div className='header-container'>
      <h2>Pointless Clicker!</h2>
      <div className="score-container">
        <h4>Total score: </h4>
        <span className='header-scoreBar'>{totalScore}</span>
      </div>
    </div>
  )
}

export default Header