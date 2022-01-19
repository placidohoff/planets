export const Pluto = (
    state = {
        isLoading: true,
        errMess: null,
        data: []
    }, action) => {
    switch (action.type) {
        case 'LOADING_PLUTO':
            return { ...state, isLoading: true, errMess: null, data: [] }
        case 'FAILED_PLUTO':
            return { ...state, isLoading: false, errMess: action.payload }
        case 'ADD_PLUTO':
            return { ...state, isLoading: false, errMess: null, data: action.payload }
        case 'ADD_PLUTO_IMG':
            return { ...state, isLoading: false, errMess: null, data: state.data.concat(action.payload) }
        default:
            return state
    }
}