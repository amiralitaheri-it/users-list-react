import Header from "./layouts/Header";
import UsersProvider from '../providers/UsersProvider';
import UsersList from "./users/UsersList";

export default function App() {
    return (
        <>
            <UsersProvider>
                <div className="h-screen mx-auto items-center justify-center">
                    <Header/>
                    <UsersList/>
                </div>
            </UsersProvider>
        </>
    );
}