export const Jupiter = (
    state = {
        isLoading: true,
        errMess: null,
        data: []
    }, action) => {
    switch (action.type) {
        case 'LOADING_JUPITER':
            return { ...state, isLoading: true, errMess: null, data: [] }
        case 'FAILED_JUPITER':
            return { ...state, isLoading: false, errMess: action.payload }
        case 'ADD_JUPITER':
            return { ...state, isLoading: false, errMess: null, data: action.payload }
        case 'ADD_JUPITER_IMG':
            return { ...state, isLoading: false, errMess: null, data: state.data.concat(action.payload) }
        default:
            return state
    }
}