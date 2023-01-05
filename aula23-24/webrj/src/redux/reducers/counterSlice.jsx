import { createSlice } from "@reduxjs/toolkit"


export const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 },
    reducers: {
        add: (state) => { state.value += 1 },
        decrease: (state) => { state.value -= 1 }
    }
})

export const { add, decrease } = counterSlice.actions

export default counterSlice.reducer