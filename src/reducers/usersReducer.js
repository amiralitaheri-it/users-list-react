const usersReducer = (state, action) => {
    switch (action.type) {
        case 'add_user':
            return addUser(state, action);
        case 'decrement':
            return state - 1
        case 'reset':
            return 0
        default:
            return state
    }
}

export default usersReducer;

let addUser = (state, action) => {
    let {user} = action.payload;

    return {
        users: [
            state.users,
            user
        ]
    }
}

let deleteTodo = (state, action) => {
    let {key} = action.payload;

    return {
        ...state,
        todos: state.todos.filter(item => item.key !== key)
    }
}

let toggleTodo = (state, action) => {
    let {key} = action.payload;

    let item = state.todos.find(item => item.key === key);
    item.done = !item.done;

    let newTodos = state.todos.filter(item => item.key !== key)

    return {
        ...state,
        todos: [
            ...newTodos,
            item
        ]
    }
}

let editTodo = (state, action) => {
    let {key, text} = action.payload;

    let item = state.todos.find(item => item.key === key);
    item.text = text;

    let newTodos = state.todos.filter(item => item.key !== key)

    return {
        ...state,
        todos: [
            ...newTodos,
            item
        ]
    }
}