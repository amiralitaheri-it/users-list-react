import React, {useContext, useState} from 'react';
import UsersContext from "../../context/UsersContext";

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
    }

    return (
        <tr className="bg-white border-b-2 border-gray-200">
            <td className="px-16 py-2 ml-6">
                <span className="text-center ml-3">{index + 1}</span>
            </td>
            <td>
                <input id="name" type="text" defaultValue={userTarget.name}
                       className="focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
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
                        <input type="radio" name="user" id="user" defaultValue="false"
                               className="form-radio h-5 w-5 text-gray-600"
                               checked={!userTarget.isAdmin}
                               onChange={(e) => setUserState({
                                   ...user,
                                   isAdmin: e.target.value
                               })}/><span
                        className="ml-2 text-gray-700">User</span>
                    </label>

                    <label className="inline-flex items-center mt-3">
                        <input type="radio" name="admin" id="admin" defaultValue="true"
                               className="form-radio h-5 w-5 text-red-600" checked={!!userTarget.isAdmin}
                               onChange={(e) => setUserState({
                                   ...user,
                                   isAdmin: e.target.value
                               })}/><span
                        className="ml-2 text-gray-700">Admin</span>
                    </label>
                </div>
            </td>

            <td className="px-16 py-2">
                <button className="bg-green-300 text-white"
                        onClick={(e) => editUserHandler(e)}>Apply
                </button>
            </td>
        </tr>
    );
}

export default EditUserForm;