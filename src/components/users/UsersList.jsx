import React, {useContext, useEffect, useState} from 'react';
import UsersContext from "../../context/UsersContext";
import TableHeader from "../layouts/TableHeader";
import UserItem from "./UserItem";
import Loading from "../layouts/loading";

function UsersList() {
    const {users, getUsers} = useContext(UsersContext);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        (async () => {
            await getUsers();
            setLoading(false);
        })()
    }, [getUsers]);

    const loadUsersSection = () => {
        if (users.length === 0) {
            return <tr>
                <td colSpan="10" className="text-center text-rose-800 p-5 text-2xl font-semibold">There aren`t any users :(</td>
            </tr>
        }

        return users.map((user) => <UserItem key={user.id}
                                             user={user} index={user.id} setLoading={setLoading}/>)
    };
    return (
        <div className="overflow-auto">
            <table className="mt-10 max-w-5xl mx-auto table-auto rounded-lg">
                <TableHeader headerFields={['#id', 'Name', 'Password', 'NickName', 'Date', 'Email', 'Type', 'Gender ', 'Type', 'Settings']}/>
                <tbody className="bg-gray-200 border-2 rounded-lg">
                {
                    loading
                        ? <Loading/>
                        : loadUsersSection()
                }
                </tbody>
            </table>
        </div>

    );
}

export default React.memo(UsersList);