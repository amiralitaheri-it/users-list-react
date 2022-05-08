import {useContext} from 'react';
import UsersContext from "../../context/UsersContext";
import UserItem from "./UserItem";
import TableHeader from "../layouts/TableHeader";

function UsersList() {
    const userContext = useContext(UsersContext);

    return (
        <table className="mt-10 max-w-5xl mx-auto table-auto">
            <TableHeader/>
            <tbody className="bg-gray-200">
            {
                userContext.users.length === 0
                    ? <tr>
                        <td>there isn`t any users</td>
                    </tr>
                    : userContext.users.map((user, index) => <UserItem key={user.createdAt + Math.random() * 1000}
                                                                       user={user} index={index}/>)
            }
            </tbody>
        </table>
    );
}

export default UsersList;