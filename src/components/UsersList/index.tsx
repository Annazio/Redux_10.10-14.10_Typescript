import React, { useEffect } from 'react'
import UserItem from '../UserItem'
import style from "./style.module.css"
import { fetchUsers } from '../../store/slice/usersSlice'
import { useAppDispatch, useAppSelector } from '../../hooks'

export default function UsersList() {
  const users = useAppSelector((state) => state.users.list )

const dispatch = useAppDispatch()
useEffect(()=> {
  dispatch(fetchUsers())
},[])

  return (
    <div className={style.container} >
       
      {
        users.map(el => <UserItem key={el.id} {...el}/>)
      }
   
    </div>
  )
}
