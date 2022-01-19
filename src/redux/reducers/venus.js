export const Venus = (
    state = {
        isLoading: true,
        errMess: null,
        data: []
    }, action) => {
    switch (action.type) {
        case 'LOADING_VENUS':
            return { ...state, isLoading: true, errMess: null, data: [] }
        case 'FAILED_VENUS':
            return { ...state, isLoading: false, errMess: action.payload }
        case 'ADD_VENUS':
            return { ...state, isLoading: false, errMess: null, data: action.payload }
        case 'ADD_VENUS_IMG':
            return { ...state, isLoading: false, errMess: null, data: state.data.concat(action.payload) }
        default:
            return state
    }
}