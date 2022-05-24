import React, {useCallback, useReducer} from "react"
import UsersContext from "../context/UsersContext";
import usersReducer from "./../reducers/usersReducer";
import usersApi from "./../api/usersApi";
import {sweetalert} from "../helpers/helpers";

const UsersProvider = ({children}) => {

    // call reducer and take updated usersApi state
    const [users, dispatch] = useReducer(usersReducer, []);
    
    // get usersApi from endapi.io
    const getUsers = useCallback(async () => {
        try {
            const res = await usersApi.get("/users");

            dispatch(
                {type: "load_users", payload: res.data.data}
            );
        } catch (err) {
            console.log(err)
        }
    }, []);

    // send new user to endapi.io
    const addUser = async (user) => {
        try {
            const res = await usersApi.post("/users", user);

            dispatch({
                type: 'add_user', payload: res.data
            });

            sweetalert("User created successfully :)");

        } catch (err) {
            console.log(err)
        }
    }

    // remove user from endapi.io
    const removeUser = async (userId) => {
        try {
            await usersApi.delete(`/users/${userId}`);

            dispatch({type: "delete_user", payload: userId});

            sweetalert("User deleted successfully :)");
        } catch (err) {
            console.log(err)
        }
    }

    // update user
    const updateUser = async (index, user) => {
        try {
            const res = await usersApi.put(`/users/${index}`, user);

            dispatch({
                type: 'edit_user', payload: res.data
            })

            sweetalert("User Edited successfully :)");
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <UsersContext.Provider value={{users, getUsers, addUser, removeUser, updateUser}}>
            {children}
        </UsersContext.Provider>
    )
}

export default React.memo(UsersProvider);