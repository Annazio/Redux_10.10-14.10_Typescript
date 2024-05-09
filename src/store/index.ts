import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./slice/todoSice";
import usersReducer from "./slice/usersSlice"

const store = configureStore({
    reducer:{
        todo: todoReducer,   
        users: usersReducer     
    }
})


export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;