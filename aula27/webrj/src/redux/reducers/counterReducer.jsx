
export const ADD_COUNTER = "ADD_COUNTER"
export const DECREASE_COUNTER = "DECREASE_COUNTER"

export const addCounter = (value) => ({
    type: ADD_COUNTER,
    payload: { value }
})

export const decreaseCounter = (value) => ({
    type: DECREASE_COUNTER,
    payload: { value }
})


const initialState = { value: 0 }

export const counter = (state = initialState, action) => {
    const { type } = action
    switch (type) {
        case ADD_COUNTER: {
            return { ...state, value: state.value + 1 }
        }
        case DECREASE_COUNTER: {
            return { ...state, value: state.value - 1 }
        }
        default:
            return state
    }
}