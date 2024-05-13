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




// import React, { useState } from 'react';
// import { useAppDispatch } from '../../hooks';
// import { addTodo } from '../../store/slice/todoSice';


// const AddTodo: React.FC = () => {
//     const dispatch = useAppDispatch();
//     const [title, setTitle] = useState('');

//     const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
//         setTitle(e.target.value);
//     };

//     const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
//         e.preventDefault();
//         dispatch(addTodo(title));
//         setTitle(''); // Очищаем значение после добавления задачи
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <input 
//                 type="text" 
//                 name='title' 
//                 value={title} // Привязываем значение инпута к состоянию title
//                 onChange={handleChange} // Обработчик изменения для обновления состояния title
//             />
//             <button type="submit">Hinzufügen</button>
//         </form>
//     );
// };

// export default AddTodo;