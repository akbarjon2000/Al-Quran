
const initialState = {
    read: false,
    recitation: true,
    translation: false,
    setting: false
}

export function navReducer(state = initialState, action) {
    switch (action.type) {
        case "CHANGE": {
            return {

                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}
export function surahReducer(state = { id: null }, action) {
    switch (action.type) {
        case "MOVE": {
            return {
                ...action.payload
            }
        }
        default: {
            return state;
        }
    }
}

