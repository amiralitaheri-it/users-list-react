import {useContext, useState} from 'react';
import UsersContext from "../../context/UsersContext";

function CreateUser({setOpenModal}) {

    const usersContext = useContext(UsersContext);

    const [user, setUserState] = useState(
        {
            name: '',
            family: '',
            nickname: '',
            email: '',
            isAdmin: false,
            createdAt: Date.now(),
        }
    );

    let createUserHandler = (e) => {
        e.preventDefault();
        setOpenModal(false);
        usersContext.dispatch({
            type: 'add_user', payload: {user}
        })
    }

    return (
        <form className="space-y-5" onSubmit={(e) => createUserHandler(e)}>
            <div>
                <input onChange={(e) => setUserState({
                    ...user,
                    name: e.target.value
                })}
                       id="name" type="text" placeholder="name" className="block w-full py-3 px-3 mt-2
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
                />
            </div>
            <div>
                <input onChange={(e) => setUserState({
                    ...user,
                    family: e.target.value
                })}
                       id="family" type="text" placeholder="family" className="block w-full py-3 px-3 mt-2
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
                />
            </div>
            <div>
                <input onChange={(e) => setUserState({
                    ...user,
                    nickname: e.target.value
                })}
                       id="nickname" type="text" placeholder="nickname" className="block w-full py-3 px-3 mt-2
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
                />
            </div>
            <div>
                <input onChange={(e) => setUserState({
                    ...user,
                    email: e.target.value
                })}
                       id="email" type="email" placeholder="email" className="block w-full py-3 px-3 mt-2
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
                />
            </div>

            <div className="flex items-center border-2 border-gray-100">
                <span className="text-gray-500">Type: </span>
                <div className="flex justify-between gap-10 ml-28">
                    <label className="inline-flex items-center mt-3">
                        <input type="radio" name="typeOfUser" id="user" value="false"
                               className="form-radio h-5 w-5 text-gray-600" checked onChange={(e) => setUserState({
                            ...user,
                            isAdmin: e.target.value
                        })}/><span
                        className="ml-2 text-gray-700">User</span>
                    </label>

                    <label className="inline-flex items-center mt-3">
                        <input type="radio" name="typeOfUser" id="admin" value="true"
                               className="form-radio h-5 w-5 text-red-600" onChange={(e) => setUserState({
                            ...user,
                            isAdmin: e.target.value
                        })}/><span
                        className="ml-2 text-gray-700">Admin</span>
                    </label>
                </div>
            </div>

            <button type="submit" className="w-full py-3 mt-10 bg-[#063970] rounded-md
                        font-medium text-white uppercase
                        focus:outline-none hover:shadow-none">
                Login
            </button>
        </form>
    );
}

export default CreateUser;