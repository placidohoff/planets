export const Saturn = (
    state = {
        isLoading: true,
        errMess: null,
        data: []
    }, action) => {
    switch (action.type) {
        case 'LOADING_SATURN':
            return { ...state, isLoading: true, errMess: null, data: [] }
        case 'FAILED_SATURN':
            return { ...state, isLoading: false, errMess: action.payload }
        case 'ADD_SATURN':
            return { ...state, isLoading: false, errMess: null, data: action.payload }
        case 'ADD_SATURN_IMG':
            return { ...state, isLoading: false, errMess: null, data: state.data.concat(action.payload) }
        default:
            return state
    }
}