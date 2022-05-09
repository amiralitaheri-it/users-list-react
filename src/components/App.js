import CreateUserButton from "./layouts/CreateUserButton";
import UsersProvider from '../providers/UsersProvider';
import UsersList from "./users/UsersList";
import Header from "./layouts/Header";

export default function App() {
    return (
        <>
            <UsersProvider>
                <div className="h-screen mx-auto items-center justify-center">
                    <Header/>
                    <UsersList/>
                    <CreateUserButton/>
                </div>
            </UsersProvider>
        </>
    );
}