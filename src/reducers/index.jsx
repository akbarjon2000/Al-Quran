
const initialState = {
    read: false,
    recitation: true,
    translation: false,
    setting: false
}

export default function navReducer(state = initialState, action) {
    switch (action.type) {
        case "READ": {
            return {
                ...state,
                ...action.payload
            }
        }
        case "RECITATION": {
            return {
                ...state,
                ...action.payload
            }
        }
        case "TRANSLATION": {
            return {
                ...state,
                ...action.payload
            }
        }
        case "Settings": {
            return {
                ...state,
                ...action.payload
            }
        }
    }
}

