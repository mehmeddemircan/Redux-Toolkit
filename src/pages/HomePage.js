import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux-toolkit/features/counter/counterSlice'

const HomePage = () => {
    
    const dispatch = useDispatch()

    const handleDecrement = () => {
        dispatch(decrement())
    }
    const handleIncrement = () => {
        dispatch(increment())
    }
    const {counter}  = useSelector((state) => state.counter)
  return (
    <Fragment>
    <button onClick={handleDecrement}>-</button>
    <h4>{counter}</h4>
    <button onClick={handleIncrement}>+</button>
 </Fragment>
  )
}

export default HomePage