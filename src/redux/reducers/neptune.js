export const Neptune = (
    state = {
        isLoading: true,
        errMess: null,
        data: []
    }, action) => {
    switch (action.type) {
        case 'LOADING_NEPTUNE':
            return { ...state, isLoading: true, errMess: null, data: [] }
        case 'FAILED_NEPTUNE':
            return { ...state, isLoading: false, errMess: action.payload }
        case 'ADD_NEPTUNE':
            return { ...state, isLoading: false, errMess: null, data: action.payload }
        case 'ADD_NEPTUNE_IMG':
            return { ...state, isLoading: false, errMess: null, data: state.data.concat(action.payload) }
        default:
            return state
    }
}