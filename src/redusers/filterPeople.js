const initalState = '';

export default function filterPeople(state = initalState, action) {
    if (action.type === 'FIND_PEOPLE'){
        return action.payload;
    }
    return state
}