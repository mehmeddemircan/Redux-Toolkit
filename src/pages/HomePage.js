import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux-toolkit/features/counter/counterSlice'
import { getAllPost } from '../redux-toolkit/actions/PostActions'

const HomePage = () => {
    
    const dispatch = useDispatch()




    useEffect(() => {
        dispatch(getAllPost())
    }, [dispatch])
    const post = useSelector((state) => state.post)
  return (
    <Fragment>
        {post.data.map((item) => (
            <h4>{item.title}</h4>
        ))}
 </Fragment>
  )
}

export default HomePage