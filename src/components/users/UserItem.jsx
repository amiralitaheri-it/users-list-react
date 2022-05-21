import React, {useState} from 'react';
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import EditUserForm from "./EditUserForm";
import {ConvertGregorianToPersianDate} from '../../helpers/helpers'

function UserItem({user, index}) {
    // state for show edit component
    const [edit, setEdit] = useState(false);

    return (
        !edit ?
            <tr className="bg-white border-b-2 border-gray-200 hover:text-blue-600 hover:bg-gray-200 transition ease-out duration-200 cursor-pointer">
                <td className="px-16 py-2 ml-6 text-center">
                    <span className="text-center ml-3">{index + 1}</span>
                </td>

                <td className="text-center">
                    <span className="text-center ml-8">{user.name}</span>
                </td>

                <td className="text-center">
                    <span className="text-center ml-8">{user.password}</span>
                </td>

                <td className="text-center">
                    <span className="text-center ml-8">{user.nickname}</span>
                </td>

                <td className="px-16 py-2 text-center">
                    <span
                        className="text-center ">
                        {ConvertGregorianToPersianDate(user.createdAt)}
                    </span>
                </td>

                <td className="px-16 py-2 text-center">
                    <span className="text-center">{user.email}</span>
                </td>

                <td className="px-16 py-2 text-center">
                    <span className="text-center ml-3">{user.isAdmin ? 'Admin' : 'User'}</span>
                </td>

                <td className="px-16 py-2 text-center">
                    <span className="text-center">{user.gender}</span>
                </td>

                <td className="px-16 py-2 text-center">
                    <span className="text-center">
                        {
                            user.isActive
                                ? <div className="text-green-600 font-semibold">Active</div>
                                : <div className="text-rose-600 font-semibold">Disabled</div>
                        }
                    </span>
                </td>

                <td className="px-16 py-2">
              <span className="text-yellow-500 flex">
                  <EditUser setEdit={setEdit}/>
                  <DeleteUser index={index}/>
              </span>
                </td>
            </tr> : <EditUserForm userTarget={user} index={index} edit={edit} setEdit={setEdit}/>
    );
}

export default React.memo(UserItem);