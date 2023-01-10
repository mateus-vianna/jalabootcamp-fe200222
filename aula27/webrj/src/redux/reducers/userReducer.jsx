import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getUsers } from "../../services/userService"

export const userSlice = createSlice({
    name: "user",
    initialState: { users: [], status: 'idle', error: null },
    reducers: {
        add: (state, users) => {
            console.log('Users inside action', users)
            state.users = state.users.concat(users.payload)
        },
        remove: (state, user) => {
            state = state.filter((u) => u.id !== user.payload.id)
        }
    },
    extraReducers: builder => {
        builder.addCase(loadUsersThunk.pending, state => {
            state.status = 'loading'
        })
        builder.addCase(loadUsersThunk.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.users = action.payload
        })
        builder.addCase(loadUsersThunk.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action
        })
    }
})


// {
// Multiple possible status enum values
// status: 'idle' | 'loading' | 'succeeded' | 'failed',
// error: string | null
// type : pending | fulfilled | rejected
// }

export const loadUsersThunk = createAsyncThunk('users/load', async () => {
    try {
        const users = await getUsers()
        return users
    } catch (error) {
        console.log(error)
        return error
    }
})



export const { add, remove } = userSlice.actions
export default userSlice.reducer