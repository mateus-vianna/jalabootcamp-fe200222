import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getUsers } from "../../services/userService"

export const userSlice = createSlice({
    name: "user",
    initialState: { users: [], status: 'idle', error: null, message: null},
    reducers: {
        add: (state, users) => {
            console.log('Users inside action', users)
            state.users = state.users.concat(users.payload)
        },
        remove: (state, user) => {
            state.users = state.users.filter((u) => u._id !== user.payload._id)
        },
        update: (state, user) => {
            state.users = state.users.map(u => u._id === user.payload.id ? user.payload : u)
        },
    },
    extraReducers: builder => {
        builder.addCase(loadUsersThunk.pending, state => {
            state.status = 'loading'
            state.message = 'Loading'
        })
        builder.addCase(loadUsersThunk.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.users = action.payload
            state.message = 'Completed'
        })
        builder.addCase(loadUsersThunk.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
            state.message = 'Error!'
        })
        builder.addCase(removeUserThunk.pending, state => {
            state.status = 'loading'
            state.message = 'Deleting'
        })
        builder.addCase(removeUserThunk.fulfilled, state => {
            state.status = 'succeeded'
            state.message = 'Deleted'
        })
        builder.addCase(removeUserThunk.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
            state.message = 'Error'
        })
        builder.addCase(updateUserThunk.pending, state => {
            state.status = 'loading'
            state.message = 'Updating'
        })
        builder.addCase(updateUserThunk.fulfilled, state => {
            state.status = 'succeeded'
            state.message = 'Updated'
        })
        builder.addCase(updateUserThunk.rejected, state => {
            state.status = 'failed'
            state.error = action
            state.message = 'Updating Failed'
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

export const removeUserThunk = createAsyncThunk('users/remove', async (id) => {
    try {
        await deleteUser(id)
        return id
    } catch (error) {
        console.log(error)
        return error
    }
})

export const updateUserThunk = createAsyncThunk('users/update', async (user) => {
    try {
        const updatedUser = await updateUser(user._id, user)
        return updatedUser
    } catch (error) {
        console.log(error)
        return error
    }
})



export const { add, remove, update } = userSlice.actions
export default userSlice.reducer