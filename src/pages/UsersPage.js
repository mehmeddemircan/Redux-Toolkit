import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUser } from '../redux-toolkit/actions/UserActions'

const UsersPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllUser())
    }, [dispatch])

    const user = useSelector((state => state.user))
  return (
    <Fragment>
        {user.data.map((item) => (
            <h4>{item.username}</h4>
        ) )}
    </Fragment>
  )
}

export default UsersPage