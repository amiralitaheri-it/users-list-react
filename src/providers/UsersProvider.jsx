import {useEffect, useReducer} from "react"
import UsersContext from "../context/UsersContext";
import usersReducer from "./../reducers/usersReducer";

const UsersProvider = (props) => {
    const [users, dispatch] = useReducer(usersReducer, {
        users: []
    });

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users.users));
    }, [users.users]);

    console.log(users.users);

    return (
        <UsersContext.Provider value={{users: users.users, dispatch}}>
            {props.children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;