import React, {useContext, useEffect} from 'react';
import UsersContext from "../../context/UsersContext";
import TableHeader from "../layouts/TableHeader";
import UserItem from "./UserItem";

function UsersList() {
    const {users, getUsers} = useContext(UsersContext);

    useEffect(() => {
        (async () => {
            await getUsers();
        })()
    }, [getUsers]);

    return (
        <div className="overflow-auto">
            <table className="mt-10 max-w-5xl mx-auto table-auto rounded-lg">
                <TableHeader headerFields={['#id', 'Name', 'Password', 'NickName', 'Date', 'Email', 'Type', 'Gender ', 'Type', 'Settings']}/>
                <tbody className="bg-gray-200 border-2 rounded-lg">
                {
                    users.length === 0
                        ? <tr>
                            <td colSpan="10" className="text-center text-rose-800 p-5 text-2xl font-semibold">There aren`t any
                                users :(
                            </td>
                        </tr>
                        : users.map((user, index) => <UserItem key={index + Math.random() * 1000}
                                                               user={user} index={index}/>)
                }
                </tbody>
            </table>
        </div>

    );
}

export default React.memo(UsersList);