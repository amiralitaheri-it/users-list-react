import React, {useContext} from 'react';
import UsersContext from "../../context/UsersContext";
import {sweetalert} from "../../helpers/helpers";

function DeleteUser({index}) {
    const userContext = useContext(UsersContext);

    // deleting user handler
    let deleteHandler = () => {
        userContext.dispatch({type: 'delete_user', payload: index});

        sweetalert("User deleted successfully :)");
    }

    return (
        <svg onClick={deleteHandler}
             xmlns="http://www.w3.org/2000/svg"
             className="h-5 w-5 text-red-700 cursor-pointer hover:text-red-500 transition ease-out duration-200"
             viewBox="0 0 20 20"
             fill="currentColor"
        >
            <path
                fillRule="evenodd"
                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                clipRule="evenodd"
            />
        </svg>
    );
}

export default DeleteUser;