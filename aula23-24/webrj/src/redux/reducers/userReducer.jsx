import { createSlice } from "@reduxjs/toolkit"
import { getUsers } from "../../services/userService"

export const userSlice = createSlice({
    name: "user",
    initialState: { users: [] },
    reducers: {
        add: (state, users) => {
            console.log('Users inside action', users)
            state.users = state.users.concat(users.payload)
        },
        remove: (state, user) => {
            state = state.filter((u) => u.id !== user.payload.id)
        }
    }
})


export const loadUsersThunk = () => async (dispatch, getState) => {
    try {
        const users = await getUsers()
        console.log('Users inside thunks', users)
        dispatch(add(users))
    } catch (error) {
        console.log('Error on load users thunks', error)
    }

}



export const { add, remove } = userSlice.actions
export default userSlice.reducer