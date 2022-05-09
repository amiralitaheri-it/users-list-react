import React, {useContext, useState} from 'react';
import UsersContext from "../../context/UsersContext";
import Swal from "sweetalert2";

function EditUserForm({userTarget, index, setEdit}) {
    const usersContext = useContext(UsersContext);

    const [user, setUserState] = useState(
        {
            name: userTarget.name,
            family: userTarget.family,
            nickname: userTarget.nickname,
            email: userTarget.email,
            isAdmin: userTarget.isAdmin,
            createdAt: userTarget.createdAt,
        }
    );

    let editUserHandler = (e) => {
        e.preventDefault();
        usersContext.dispatch({
            type: 'edit_user', payload: {index, user}
        })
        setEdit(false);
        Swal.fire({
            title: "User Edited successfully :)",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000,
            toast: true,
            position: 'top',
        });
    }

    return (
        <tr className="bg-white border-b-2 border-gray-200">
            <td className="px-16 py-2 ml-6">
                <span className="text-center ml-3">{index + 1}</span>
            </td>
            <td>
                <input id="name" type="text" defaultValue={userTarget.name}
                       className="border-cyan-600 border-2 px-2 focus:text-cyan-600 focus:outline-none focus:border-gray-500 rounded-md"
                       onChange={(e) => setUserState({
                           ...user,
                           name: e.target.value
                       })}
                />
            </td>
            <td className="px-16 py-2">
                <input id="name" type="text" defaultValue={userTarget.createdAt}
                       className="focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md" disabled
                />
            </td>
            <td className="px-16 py-2">
                <input id="name" type="email" defaultValue={userTarget.email}
                       className="focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
                       onChange={(e) => setUserState({
                           ...user,
                           email: e.target.value
                       })}
                />
            </td>

            <td className="px-16 py-2">
                <div className="flex justify-between items-center gap-4">
                    <label className="inline-flex items-center mt-3">
                        <input type="radio" name={`user${index}`} id="user" defaultValue="false"
                               className="form-radio h-5 w-5 text-gray-600"
                               checked={!userTarget.isAdmin}
                               onChange={(e) => setUserState({
                                   ...user,
                                   isAdmin: e.target.value
                               })}/><span
                        className="ml-2 text-gray-700">User</span>
                    </label>

                    <label className="inline-flex items-center mt-3">
                        <input type="radio" name={`user${index}`} id="admin" defaultValue="true"
                               className="form-radio h-5 w-5 text-red-600" checked={!!userTarget.isAdmin}
                               onChange={(e) => setUserState({
                                   ...user,
                                   isAdmin: e.target.value
                               })}/><span
                        className="ml-2 text-gray-700">Admin</span>
                    </label>
                </div>
            </td>

            <td className="px-16 py-2 text-center">
                <svg onClick={(e) => editUserHandler(e)}
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5 text-green-700 mx-2 cursor-pointer text-center hover:text-green-500"
                     viewBox="0 0 20 20"
                     fill="currentColor"
                >
                    <path
                        d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"
                    />
                    <path
                        fillRule="evenodd"
                        d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                        clipRule="evenodd"
                    />
                </svg>
            </td>
        </tr>
    );
}

export default EditUserForm;