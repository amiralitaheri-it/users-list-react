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
        case 'reset':
            return 0
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
    changeLastUserToNew(lastUser, editedUserData.user);
    const usersList = state.filter((_user, index) => index !== editedUserData.index);
    console.log(editedUserData.user);
    return [
        ...usersList,
        editedUserData.user
    ];
}

let changeLastUserToNew = (lastUser, newUser) => {
    lastUser.name = newUser.name;
    lastUser.family = newUser.family;
    lastUser.nickname = newUser.nickname;
    lastUser.email = newUser.email;
    lastUser.isAdmin = newUser.isAdmin;
}