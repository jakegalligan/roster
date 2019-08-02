const showInfoReducer = (state = false, action) => {
    switch(action.type) {
        case 'SHOW':
            return !state;
        default:
            return state;
    }
}


export default showInfoReducer;