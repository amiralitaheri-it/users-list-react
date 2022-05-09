import React, {useState} from 'react';
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";
import EditUserForm from "./EditUserForm";

function UserItem({user, index}) {
    const [edit, setEdit] = useState(false);

    return (
        !edit ?
            <tr className="bg-white border-b-2 border-gray-200">
                <td className="px-16 py-2 ml-6">
                    <span className="text-center ml-3">{index + 1}</span>
                </td>
                <td>
                    <span className="text-center ml-8">{user.name}</span>
                </td>

                <td className="px-16 py-2">
                    <span className="text-center">{user.createdAt}</span>
                </td>
                <td className="px-16 py-2">
                    <span className="text-center">{user.email}</span>
                </td>

                <td className="px-16 py-2">
                    <span className="text-center ml-3">{user.isAdmin ? 'Admin' : 'User'}</span>
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

export default UserItem;