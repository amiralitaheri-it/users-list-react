import {useEffect, useReducer} from "react"
import UsersContext from "../context/UsersContext";
import usersReducer from "./../reducers/usersReducer";
import axios from "axios";
import {sweetalert} from "../helpers/helpers";

const UsersProvider = ({children}) => {
    // fetch initialUsersList from the localstorage
    const initialUsersList = (function () {
        return JSON.parse(localStorage.getItem("users")) || [];
    })();

    // call reducer and take updated users state
    const [users, dispatch] = useReducer(usersReducer, initialUsersList);

    // send users to endapi.io
    useEffect(() => {
        localStorage.setItem("users", JSON.stringify(users));
    }, [users]);

    const addUser = async (user) => {
        try {
            const res = await axios.post("https://6288dd87abc3b5e327cc0280.endapi.io/users", {
                ...user
            });

            dispatch({
                type: 'add_user', payload: res.data
            });

            sweetalert("User created successfully :)");

        } catch (err) {

            console.log(err)

        }
    }

    return (
        <UsersContext.Provider value={{users, dispatch, addUser}}>
            {children}
        </UsersContext.Provider>
    )
}

export default UsersProvider;