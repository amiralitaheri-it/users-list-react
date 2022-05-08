import {useEffect, useReducer} from "react"
import UsersContext from "../context/UsersContext";
import usersReducer from "./../reducers/usersReducer";

const UsersProvider = ({children}) => {
    const initialUsersList = (function () {
        return JSON.parse(localStorage.getItem("users")) || {users: []};
    })();

    const [users, dispatch] = useReducer(usersReducer, initialUsersList);

    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    return (
        <UsersContext.Provider value={{users, dispatch}}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;