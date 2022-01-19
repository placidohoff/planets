export const Uranus = (
    state = {
        isLoading: true,
        errMess: null,
        data: []
    }, action) => {
    switch (action.type) {
        case 'LOADING_URANUS':
            return { ...state, isLoading: true, errMess: null, data: [] }
        case 'FAILED_URANUS':
            return { ...state, isLoading: false, errMess: action.payload }
        case 'ADD_URANUS':
            return { ...state, isLoading: false, errMess: null, data: action.payload }
        case 'ADD_URANUS_IMG':
            return { ...state, isLoading: false, errMess: null, data: state.data.concat(action.payload) }
        default:
            return state
    }
}