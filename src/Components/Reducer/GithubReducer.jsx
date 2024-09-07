const GithubReducer = (state, action) => {
    switch (action.type) {
        case 'GETUSERS':
            return{
                ...state, users: action.payload,
                loading: false
            }
    
        default:
            return state;
    }
}

export default GithubReducer