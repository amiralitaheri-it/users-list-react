import React from 'react';
import EditUser from "./EditUser";
import DeleteUser from "./DeleteUser";

function UserItem(props) {
    const {user, index} = props;

    return (
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
                  <EditUser/>
                  <DeleteUser/>
              </span>
            </td>
        </tr>
    );
}

export default UserItem;