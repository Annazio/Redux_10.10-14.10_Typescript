import React from 'react'
import { useAppDispatch } from '../../hooks';
import { addTodo } from '../../store/slice/todoSice';




const AddTodo: React.FC =() => {
    const dispatch = useAppDispatch()
   
    const handler: React.ChangeEventHandler<HTMLFormElement> = (e) => {
       e.preventDefault();
       const title = (e.target as HTMLFormElement).elements.namedItem('title') as HTMLInputElement;
       if (title) {
       dispatch(addTodo(title.value));
       e.target.reset();
    }
}
    
      return (
       <form onSubmit={handler}>
            <input type="text" name='title' />
            <button>Hinzufügen</button>
        </form>
      )
    }


  export default  AddTodo