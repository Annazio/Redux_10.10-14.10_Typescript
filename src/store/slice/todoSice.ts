import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

type Todo ={
    id: number, 
    title: string;
    done: boolean;
    completed?: boolean
}

type TodoState ={
    list: Todo[];
    loading: boolean;
    error: string | null;
}

const initialState: TodoState ={
    list: [
        {id: 1001, title: 'essen', done: true},
        {id: 1002, title: 'lernen', done: false},
        {id: 1003, title: 'Projekt schreiben', done: true},
        {id: 1004, title: 'laufen', done: false},

    ],
    loading: false,
    error: null
}

export const fetchTodos = createAsyncThunk<Todo[], undefined,{ rejectValue: { message: string } }>(
    'todo/fetchTodos',
    async (_, {rejectWithValue}) => {
        try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const data = await response.json()
        return data
        } catch(error) {
            console.error(error)
            return rejectWithValue({ message: "error fetch all products" });
        }
    }
)

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
            remove(state, action: PayloadAction<number>){
                state.list = state.list.filter(({id}) => id !== action.payload);
            },
            changeDone(state, action: PayloadAction<number>){
                const target = state.list.find(({id}) => id === action.payload);
                if(target){
                target.done = !target.done
                }
            },
            reset(state){
                state.list = []
            },
            allDone(state){
                state.list = state.list.map(elem => ({...elem, done: true}));
             },
            allNotDone(state){
                state.list = state.list.map(elem => ({...elem, done: false}))
             },
             deleteDone(state){
                state.list = state.list.filter(({done}) => !done);
             },
             addTodo(state, action: PayloadAction<string>){
                state.list.push({id: Date.now(), title: action.payload, done: false})
             }
        },
    extraReducers: (builder) => {
        builder
           .addCase(fetchTodos.pending, (state) => {
                 state.loading = true;
                 state.error = null;
           })     
           .addCase(fetchTodos.fulfilled, (state, action) => {
            state.list = [...state.list, ...action.payload.map(({ id, title, completed }) => ({
                id,
                title,
                done: completed ?? false
            }))];
            state.loading = false;
        })
        
            .addCase(fetchTodos.rejected, (state) => {
                state.error = "error"
            })
    }
    })

export const {remove, changeDone, reset, allDone, allNotDone, deleteDone, addTodo} = todoSlice.actions
export default todoSlice.reducer;