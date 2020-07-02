const defaultState = {
    currentUser: {id: 2, name: 'Mocha', password: 123},
    trees: [],
    score: 10
}

function reducer(state = defaultState, action) {
    switch (action.type) {
        case 'INCREASE_SCORE':
            return { ...state, score: state.score += 10 }
        case 'DECREASE_SCORE':
            return { ...state, score: state.score -= 5 }
        case 'ASSIGN_USER':
            return { ...state, currentUser: action.payload }
        case 'REMOVE_USER':
            return { ...state, currentUser: null }
        default:
            return state
    }
}

export default reducer