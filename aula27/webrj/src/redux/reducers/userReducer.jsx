import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import { getUsers, deleteUser, updateUser } from "../../services/userService"

export const userSlice = createSlice({
    name: "user",
    initialState: { users: [], status: 'idle', error: null, message: null },
    reducers: {
        add: (state, users) => {
            console.log('Users inside action', users)
            state.users = state.users.concat(users.payload)
        },
        remove: (state, removedUser) => {
            state.users = state.users.filter((u) => u._id !== removedUser.payload._id)
        },
        update: (state, updatedUser) => {
            state.users = state.users.map(u => u._id === updatedUser.payload.id ? updatedUser.payload : u)
        },
    },
    extraReducers: builder => {
        builder.addCase(loadUsersThunk.pending, state => {
            state.status = 'loading'
            state.message = 'Loading users...'
        })
        builder.addCase(loadUsersThunk.fulfilled, (state, action) => {
            state.status = 'succeeded'
            state.users = action.payload
            state.message = 'Users loaded successfully'
        })
        builder.addCase(loadUsersThunk.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
            state.message = 'Error loading users'
        })
        // adding new cases for delete user
        builder.addCase(deleteUserThunk.pending, state => {
            state.status = 'loading'
            state.message = 'Deleting user...'
        })
        builder.addCase(deleteUserThunk.fulfilled, state => {
            state.status = 'succeeded'
            state.message = 'User deleted successfully'
        })
        builder.addCase(deleteUserThunk.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
            state.message = 'Error deleting user'
        })
        // adding new cases for update user
        builder.addCase(updateUserThunk.pending, state => {
            state.status = 'loading'
            state.message = 'Updating user...'
        })
        builder.addCase(updateUserThunk.fulfilled, state => {
            state.status = 'succeeded'
            state.message = 'User updated successfully'
        })
        builder.addCase(updateUserThunk.rejected, state => {
            state.status = 'failed'
            state.error = action
            state.message = 'Error updating user'
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

export const removeUsersThunk = createAsyncThunk('users/remove', async (id) => {
    try {
        await deleteUser(id)
        return id
    } catch (error) {
        console.log(error)
        return error
    }
})

export const updateUsersThunk = createAsyncThunk('users/update', async (user) => {
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