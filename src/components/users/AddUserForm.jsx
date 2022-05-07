import {useContext, useState} from 'react';
import UsersContext from "../../context/UsersContext";

function AddUserForm() {

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


    let formHandler = (e) => {
        e.preventDefault();
        usersContext.dispatch({
            type: 'add_user', payload: {user}
        })
        setUserState({
            name: '',
            family: '',
            nickname: '',
            email: '',
            isAdmin: false,
            createdAt: Date.now(),
        });
    }

    return (
        <form className="space-y-5" onSubmit={formHandler}>
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

            <button type="submit" className="w-full py-3 mt-10 bg-[#063970] rounded-md
                        font-medium text-white uppercase
                        focus:outline-none hover:shadow-none">
                Login
            </button>
        </form>
    );
}

export default AddUserForm;