import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllTodo } from '../redux-toolkit/actions/TodoActions'

const TodoPage = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllTodo())
  }, [dispatch])
  const todo = useSelector((state) => state.todo)
  return (
    <Fragment>
      {todo.data.map((item) => (
        <h2>{item.title}</h2>
      ))}
    </Fragment>
  )
}

export default TodoPage