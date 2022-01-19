export const Earth = (
    state = {
        isLoading: true,
        errMess: null,
        data: []
    }, action) => {
    switch (action.type) {
        case 'LOADING_EARTH':
            return { ...state, isLoading: true, errMess: null, data: [] }
        case 'FAILED_EARTH':
            return { ...state, isLoading: false, errMess: action.payload }
        case 'ADD_EARTH':
            return { ...state, isLoading: false, errMess: null, data: action.payload }
        case 'ADD_EARTH_IMG':
            console.log('ADD IMAGE REDUCER', action.payload)
            return { ...state, isLoading: false, errMess: null, data: state.data.concat(action.payload) }
        default:
            return state
    }
}