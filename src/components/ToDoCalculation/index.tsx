import React from 'react'
import { allDone, allNotDone, deleteDone, reset } from '../../store/slice/todoSice';
import { useAppDispatch, useAppSelector } from '../../hooks';


export default function ToDoCalculation() {

    const todos = useAppSelector(({todo}) => todo.list);
    const dispatch = useAppDispatch()

  return (
    <div>
        <p>Erledigte Aufgaben: {todos.filter(({done}) => done).length}</p>
        <p>Nicht erledigte Aufgaben: {todos.filter(({done}) => !done).length}</p>
        <button onClick={() => dispatch(reset())}>Alle Aufgaben löschen</button>
        <button onClick={() => dispatch(allDone())}>Alles erledigt</button>
        <button onClick={() => dispatch(allNotDone())}>Nichts erledigt</button>
        <button onClick={() => dispatch(deleteDone())}>Erledigte Aufgaben löschen</button>
    </div>
  )
}
