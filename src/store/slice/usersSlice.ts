import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit"

type User ={
    id: number, 
    first_name: string;
    last_name: string;
    age: number;
    gender: string;
}

type Userslist ={
    list: User[],
    loading: boolean;
    error: string | null;
}

const initialState: Userslist ={
    list: [
        {id: 1, first_name: 'Theresa', last_name: 'Mannell', age: 13, gender: "f"},
        {id: 2, first_name: 'Andrea', last_name: 'Fischer', age: 20, gender: "f"},
        {id: 3, first_name: 'Tobias', last_name: 'Reisinger', age: 15, gender: "m"},
        {id: 4, first_name: 'Johann', last_name: 'Molk', age: 1, gender: "m"},
        {id: 5, first_name: 'Maria', last_name: 'Bunte', age: 3, gender: "f"},
        {id: 6, first_name: 'Maximilian', last_name: 'Seifert', age: 63, gender: "m"},
    ],
    loading: false,
    error: null
} 

export const fetchUsers = createAsyncThunk<User[], undefined, {rejectValue: {message: string}}>(
    'user/fetchUsers',
    async (_, {rejectWithValue}) => {
        try{
        const response = await fetch('http://127.0.0.1:5500/data.json')
        const data = await response.json()
        return data
    }catch (error){
        console.error(error)
        return rejectWithValue({message: "error fetch users"})
    }
}
)


const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers:{
        remove(state, action: PayloadAction<number>){
            state.list=state.list.filter(({id}) => id !== action.payload)
        },
        clear(state){
            state.list = []
        }

    },
    extraReducers: (builder) => {
        builder
           .addCase(fetchUsers.pending, (state) => {
                 state.loading = true
                 state.error=null
           })
           .addCase(fetchUsers.fulfilled, (state, action) =>{
                 state.list = [...state.list, ...action.payload]
                state.loading = false;
            })
            .addCase(fetchUsers.rejected, (state) => {
                state.error = "error"
            })
    }
})


export const {remove, clear} = usersSlice.actions;
export default usersSlice.reducer;