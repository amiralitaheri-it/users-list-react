import Header from "./components/layouts/Header";
import UsersProvider from './providers/UsersProvider';
import UsersList from "./components/users/UsersList";

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