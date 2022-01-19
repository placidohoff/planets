export const Mercury = (
    state = {
        isLoading: true,
        errMess: null,
        data: []
    }, action) => {
    switch (action.type) {
        case 'LOADING_MERCURY':
            return { ...state, isLoading: true, errMess: null, data: [] }
        case 'FAILED_MERCURY':
            return { ...state, isLoading: false, errMess: action.payload }
        case 'ADD_MERCURY':
            return { ...state, isLoading: false, errMess: null, data: action.payload }
        case 'ADD_MERCURY_IMG':
            return { ...state, isLoading: false, errMess: null, data: state.data.concat(action.payload) }
        default:
            return state
    }
}