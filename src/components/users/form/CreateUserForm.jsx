import React, {useContext, useState} from 'react';
import UsersContext from "../../../context/UsersContext";

function CreateUserForm({setOpenModal}) {
    const {addUser} = useContext(UsersContext);

    // New user data that will be passed to reducer add action to store it
    const [user, setUserState] = useState(
        {
            name: '',
            password: '',
            nickname: '',
            email: '',
            gender: 'Male',
            isActive: false,
            isAdmin: false,
            createdAt: Date.now(),
        }
    );

    // handle create user submit form
    let createUserHandler = async (e) => {
        e.preventDefault();

        setOpenModal(false);

        if (user) {
            await addUser(user)
        }
    }

    return (
        <form className="space-y-5" onSubmit={(e) => createUserHandler(e)}>
            <div>
                <input required onChange={(e) => setUserState({
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
                <input required onChange={(e) => setUserState({
                    ...user,
                    password: e.target.value
                })}
                       id="password" type="password" placeholder="password" className="block w-full py-3 px-3 mt-2
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
                />
            </div>
            <div>
                <input required onChange={(e) => setUserState({
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
                <input required onChange={(e) => setUserState({
                    ...user,
                    email: e.target.value
                })}
                       id="email" type="email" placeholder="email" className="block w-full py-3 px-3 mt-2
                            text-gray-800 appearance-none
                            border-2 border-gray-100
                            focus:text-gray-500 focus:outline-none focus:border-gray-200 rounded-md"
                />
            </div>

            <div className="flex items-center border-2 border-gray-100 py-1 rounded-md">
                <label className="text-gray-500 ml-4">Type</label>
                <div className="flex justify-between gap-10 ml-28">
                    <label className="inline-flex items-center mt-3">
                        <input type="radio" name="typeOfUser" id="user"
                               className="form-radio h-5 w-5 text-gray-600" checked onChange={(e) => setUserState({
                            ...user,
                            isAdmin: e.target.checked
                        })}/><span
                        className="ml-2 text-gray-700">User</span>
                    </label>

                    <label className="inline-flex items-center mt-3">
                        <input type="radio" name="typeOfUser" id="admin"
                               className="form-radio h-5 w-5 text-red-600" onChange={(e) => setUserState({
                            ...user,
                            isAdmin: e.target.checked
                        })}/><span
                        className="ml-2 text-gray-700">Admin</span>
                    </label>
                </div>
            </div>

            <div className="flex items-center border-2 border-gray-100 py-1 rounded-md">
                <div className="mb-3 flex justify-between items-center">
                    <label className="ml-2 mr-24 text-gray-700">Gender</label>
                    <select className="form-select appearance-none
                      block
                      px-3
                      py-1.5
                      text-base
                      font-normal
                      text-gray-700
                      bg-white bg-clip-padding bg-no-repeat
                      border border-solid border-gray-300
                      rounded
                      transition
                      ease-in-out
                      m-0
                      focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            aria-label="Default select example" onChange={(e) => setUserState({
                        ...user,
                        gender: e.target.value
                    })}>
                        <option disabled>Open this select menu</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>
                </div>
            </div>

            <div className="flex items-center border-2 border-gray-100 py-1 rounded-md">
                <label className="inline-flex items-center mt-3">
                        <span
                            className="ml-2 text-gray-700">Active User</span>
                    <input type="checkbox" className="form-checkbox h-5 w-5 text-blue-600 ml-5"
                           onChange={(e) => setUserState({
                               ...user,
                               isActive: e.target.checked
                           })}/>
                </label>
            </div>

            <button type="submit" className="w-full py-3 mt-10 bg-[#063970] hover:opacity-90 transition duration-200 rounded-md
                        font-medium text-white uppercase
                        focus:outline-none hover:shadow-none">
                Create
            </button>
        </form>
    );
}

export default React.memo(CreateUserForm);