import {useEffect, useReducer} from "react"
import UsersContext from "../context/UsersContext";
import usersReducer from "./../reducers/usersReducer";

const UsersProvider = ({children}) => {
    // fetch initialUsersList from the localstorage
    const initialUsersList = (function () {
        return JSON.parse(localStorage.getItem("users")) || [];
    })();

    // call reducer and take updated users state
    const [users, dispatch] = useReducer(usersReducer, initialUsersList);

    // set users data into the localstorage
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