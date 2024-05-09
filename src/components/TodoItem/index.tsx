import React from 'react'
import s from "./style.module.css"
// import * as styles from './style.module.css'

import { changeDone, remove } from '../../store/slice/todoSice';
import { useAppDispatch } from '../../hooks';

interface TodoItemProps {
    id: number,
    title: string,
    done: boolean
}

const TodoItem: React.FC<TodoItemProps>=({title, id, done}) => {
    const dispatch = useAppDispatch();
  return (
    <div className={s.item}>
        <input checked ={done} onChange={() => {
            dispatch(changeDone(id))}} type="checkbox" />
        <p>{title}</p>
        <button onClick={() => dispatch(remove(id))}>Löschen</button>
    </div>
    )
  }


  export default  TodoItem