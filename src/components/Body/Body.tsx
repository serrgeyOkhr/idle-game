import React from 'react'
import { increaseMoney } from '../../redux/slices/money/money-slice';
import { increaseScore } from '../../redux/slices/score/score-slice';
import { AppState, useAppDispatch, useAppSelector } from '../../redux/store'
import Shop from '../Shop/Shop';

function Body() {
  const dispatch = useAppDispatch();
  const money = useAppSelector((state: AppState) => state.money.startMoney)
  const additionalAmount = useAppSelector((state: AppState) => state.money.oneClickAddAmount);

  const handleIncreaseMoney = (amount: number) => {
    dispatch(increaseScore(amount));
    dispatch(increaseMoney(amount));
  }

  return (
    <div className='container'>
      <div></div>
      <h1>Количество денег:<span>{money}</span></h1>
      <button onClick={() => handleIncreaseMoney(additionalAmount)}>Click!</button>
      <Shop />
    </div>
  )
}

export default Body