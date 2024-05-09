import React from "react";
import style from "./style.module.css"
import {remove} from "../../store/slice/usersSlice"
import { useAppDispatch } from "../../hooks";


interface UserItemProps {
    id: number,
    first_name: string,
    last_name: string,
    age: number,
    gender: string
}

const UserItem: React.FC<UserItemProps>=({first_name, last_name, age, gender, id})=>{

  const dispatch = useAppDispatch()
  
  return (
    
      <div className={[style.item, gender ==="f" ? style.female : style.male].join(' ')} >
        <p>{first_name}</p>
        <p>{last_name}</p>
        <p>{age}</p>
        <button onClick={()=>dispatch(remove(id))}>Löschen</button>
      </div>

      
  );
}

export default UserItem;