export function manageFriends(state = {friends: []}, action){
    switch(action.type){
        case 'ADD_FRIEND':
            // return {...state, hometown: state.hometown, id: state.id, name: state.name}
            return ({...state, friends: [...state.friends, action.friend]})
        case 'REMOVE_FRIEND':
                // find the matching friend by id, comparing friend.id to action.friend.id
                let foundFriend = state.friends.findIndex(friend => friend.id === action.id)
                return (
                    {...state, friends:[...state.friends.slice(0, foundFriend), ...state.friends.slice(foundFriend + 1)]})
        default:
            return state;
    }

}
