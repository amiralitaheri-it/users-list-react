import {useContext} from 'react';
import UsersContext from "../../context/UsersContext";
import UserItem from "./UserItem";
import TableHeader from "../layouts/TableHeader";

function UsersList() {
    const userContext = useContext(UsersContext);

    return (
        <table className="mt-10 max-w-5xl mx-auto table-auto border-4 rounded-lg">
            <TableHeader/>
            <tbody className="bg-gray-200 border-2 border-4 rounded-lg">
            {
                userContext.users.length === 0
                    ? <tr>
                        <td colSpan="6" className="text-center text-rose-800 p-5 text-3xl">There isn`t any users</td>
                    </tr>
                    : userContext.users.map((user, index) => <UserItem key={index + Math.random() * 1000}
                                                                       user={user} index={index}/>)
            }
            </tbody>
        </table>
    );
}

export default UsersList;