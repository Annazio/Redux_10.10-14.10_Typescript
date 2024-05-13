import TodoItem from "./components/TodoItem";
import AddTodo from "./components/AddTodo";
import UsersContainer from "./components/UsersConatiner";
import { useEffect } from "react";
import { fetchTodos } from "./store/slice/todoSice";
import { useAppDispatch, useAppSelector } from "./hooks";
import ToDoCalculation from "./components/ToDoCalculation";



function App() {

  const todos = useAppSelector(({todo}) => todo.list)

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch])

  return (
    <div>
       <AddTodo/> 
      <div>

      </div>
    <div>
      {
        todos.map(todo => <TodoItem key={todo.id} {...todo}/>)
      }
    </div>
    <ToDoCalculation/>
    <UsersContainer/> 
    </div>
  );
}


export default App;
