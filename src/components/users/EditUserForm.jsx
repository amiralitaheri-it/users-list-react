import React, {useContext, useState} from 'react';
import UsersContext from "../../context/UsersContext";
import {sweetalert} from "../../helpers/helpers";

function EditUserForm({userTarget, index, setEdit}) {
    const usersContext = useContext(UsersContext);

    // Edited user data that will be passed to reducer edit action to edit it
    const [user, setUserState] = useState(
        {
            name: userTarget.name,
            family: userTarget.family,
            nickname: userTarget.nickname,
            email: userTarget.email,
            gender: userTarget.gender,
            isAdmin: userTarget.isAdmin,
            isActive: userTarget.isActive,
            createdAt: userTarget.createdAt,
        }
    );

    let editUserHandler = (e) => {
        e.preventDefault();

        usersContext.dispatch({
            type: 'edit_user', payload: {index, user}
        })

        setEdit(false);

        sweetalert("User Edited successfully :)");
    }

    return (
        <tr className="bg-white border-b-2 border-gray-200 text-center">
            <td className="ml-6 text-center">
                <span className="text-center ml-3">{index + 1}</span>
            </td>
            <td>
                <input required id="name" type="text" defaultValue={user.name}
                       className="w-full border-cyan-600 border-2 text-center focus:text-cyan-600 focus:outline-none focus:border-gray-500 rounded"
                       onChange={(e) => setUserState({
                           ...user,
                           name: e.target.value
                       })}
                />
            </td>
            <td>
                <input required id="family" type="text" defaultValue={user.family}
                       className="w-full border-cyan-600 border-2 text-center focus:text-cyan-600 focus:outline-none focus:border-gray-500 rounded"
                       onChange={(e) => setUserState({
                           ...user,
                           family: e.target.value
                       })}
                />
            </td>
            <td>
                <input required id="name" type="text" defaultValue={user.nickname}
                       className="w-full border-cyan-600 border-2 text-center focus:text-cyan-600 focus:outline-none focus:border-gray-500 rounded"
                       onChange={(e) => setUserState({
                           ...user,
                           nickname: e.target.value
                       })}
                />
            </td>
            <td className="text-center">
                <input required id="name" type="text" defaultValue={user.createdAt}
                       className="w-full bg-gray-300 border-cyan-600 border-2 text-center rounded focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
                       disabled
                />
            </td>
            <td className="text-center w-full">
                <input required id="name" type="email" defaultValue={user.email}
                       className="w-full focus:text-gray-500 text-center focus:border-gray-200 border-cyan-600 border-2 rounded"
                       onChange={(e) => setUserState({
                           ...user,
                           email: e.target.value
                       })}
                />
            </td>

            <td className="text-center">
                <div className="flex justify-center items-center text-base">
                    <label className="inline-flex items-center">
                        <input type="radio" name={`user-${index}`} id="user"
                               className="form-radio text-center h-5 w-5 text-gray-600"
                               checked={!user.isAdmin}
                               onChange={(e) => setUserState({
                                   ...user,
                                   isAdmin: false
                               })}/><span
                        className="ml-2 text-gray-700 mr-3">User</span>
                    </label>

                    <label className="inline-flex items-center">
                        <input type="radio" name={`user-${index}`} id="admin"
                               className="form-radio h-5 w-5 text-red-600"
                               checked={user.isAdmin}
                               onChange={(e) => setUserState({
                                   ...user,
                                   isAdmin: true
                               })}/><span
                        className="ml-2 text-gray-700">Admin</span>
                    </label>
                </div>
            </td>
            <td className="text-center">
                <div className="flex justify-center items-center border-2 border-gray-100 rounded-md text-center">
                    <div className="flex justify-center items-center">
                        <select className="form-select appearance-none
                      text-base
                      text-center
                      font-normal
                      px-2
                      text-gray-700
                      bg-white bg-clip-padding bg-no-repeat
                      border border-solid border-cyan-600
                      rounded
                      transition
                      ease-in-out
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                aria-label="Default select example" defaultValue={user.gender}
                                onChange={(e) => setUserState({
                                    ...user,
                                    gender: e.target.value
                                })}>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                </div>
            </td>

            <td className="text-center">
                <label className="inline-flex items-center text-center">
                        <span
                            className="ml-2 text-gray-700">Active User</span>
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 ml-5"
                           checked={user.isActive}
                           onChange={(e) => setUserState({
                               ...user,
                               isActive: e.target.checked
                           })}/>
                </label>
            </td>

            <td className="px-16 text-center">
                <span
                    className="bg-cyan-500 hover:bg-cyan-500 transition duration-200 cursor-pointer text-white px-2 py-1 rounded-md"
                    onClick={(e) => editUserHandler(e)}>
                    Apply
                </span>
            </td>
        </tr>
    );
}

export default React.memo(EditUserForm);