const usersReducer = (state, action) => {
    switch (action.type) {
        case 'add_user':
            return addUser(state, action.payload);
        case 'load_users':
            return loadUsers(action.payload);
        case 'delete_user':
            return deleteUser(state, action.payload);
        case 'edit_user':
            return editUser(state, action.payload);
        case 'reset_users':
            return resetUsers()
        default:
            return state
    }
}

export default usersReducer;

let addUser = (state, {user}) => {

    return [
        ...state,
        user
    ]
}

let loadUsers = (usersData) => {
    return {
        users: usersData
    }
}

let deleteUser = (state, key) => {
    return state.filter((_user, index) => index !== key)
}

let editUser = (state, editedUserData) => {
    let lastUser = state.find((_user, index) => index === editedUserData.index);
    let updatedUser = changeLastUserToNew(lastUser, editedUserData.user);
    state[lastUser] = updatedUser

    return state
}

let changeLastUserToNew = (lastUser, newUser) => {
    lastUser.name = newUser.name;
    lastUser.family = newUser.family;
    lastUser.nickname = newUser.nickname;
    lastUser.email = newUser.email;
    lastUser.gender = newUser.gender;
    lastUser.isActive = newUser.isActive;
    lastUser.isAdmin = newUser.isAdmin;

    return lastUser;
}

let resetUsers = () => {
    return [];
}