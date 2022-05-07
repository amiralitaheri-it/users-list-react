import {useContext, useEffect} from 'react';
import UsersContext from "../../context/UsersContext";
import UserItem from "./UserItem";

function UsersList() {
    const userContext = useContext(UsersContext);

    useEffect(() => {
        userContext.users = [
            JSON.parse(localStorage.getItem("users"))
        ];
    }, [userContext]);

    console.log(userContext.users);
    return (
        <table className="mt-10 max-w-5xl mx-auto table-auto">
            <thead className="justify-between">
            <tr className="bg-blue-600">
                <th className="px-16 py-2">
                    <span className="text-gray-100 font-semibold">Avatar</span>
                </th>
                <th className="px-16 py-2">
                    <span className="text-gray-100 font-semibold">Name</span>
                </th>

                <th className="px-16 py-2">
                    <span className="text-gray-100 font-semibold">Date</span>
                </th>

                <th className="px-16 py-2">
                    <span className="text-gray-100 font-semibold">Time</span>
                </th>

                <th className="px-16 py-2">
                    <span className="text-gray-100 font-semibold">Setting</span>
                </th>
            </tr>
            </thead>
            <tbody className="bg-gray-200">
            {
                userContext.users.length === 0
                    ? <tr>
                        <td>there isn`t any users</td>
                    </tr>
                    : userContext.users.map(user => <UserItem user={user}/>)
            }
            </tbody>
        </table>
    );
}

export default UsersList;