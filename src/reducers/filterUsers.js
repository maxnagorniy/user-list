const initalState = '';

export default function filterUsers(state = initalState, action) {
    if (action.type === 'FIND_USERS'){
        return action.payload;
    }
    return state
}