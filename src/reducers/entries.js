const entries = (state = [] , action) => {
    switch(action.type){
        case 'LOGIN_SUCCESS':
            return action.user.entries
        default:
            return state
    }
}

export default entries; 