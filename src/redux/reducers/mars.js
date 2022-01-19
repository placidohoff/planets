export const Mars = (
    state = {
        isLoading: true,
        errMess: null,
        data: []
    }, action) => {
    switch (action.type) {
        case 'LOADING_MARS':
            return { ...state, isLoading: true, errMess: null, data: [] }
        case 'FAILED_MARS':
            return { ...state, isLoading: false, errMess: action.payload }
        case 'ADD_MARS':
            return { ...state, isLoading: false, errMess: null, data: action.payload }
        case 'ADD_MARS_IMG':
            return { ...state, isLoading: false, errMess: null, data: state.data.concat(action.payload) }
        default:
            return state
    }
}