import {useContext, useState} from 'react';
import Modal from "./Modal";
import UsersContext from "../../context/UsersContext";
import {sweetalert} from "../../helpers/helpers";

function Footer() {
    // state for open and close modal
    const [modalOpen, setModalOpen] = useState(false);
    
    const userContext = useContext(UsersContext);

    return (
        <div className="mx-auto flex justify-center gap-5 mt-5">
            <span
                className="p-2 cursor-pointer rounded-md bg-gradient-to-r from-green-500 to-blue-600 hover:opacity-80 transition duration-200 text-white"
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                Create New User
            </span>

            <span
                className="p-2 cursor-pointer rounded-md bg-gradient-to-r from-rose-700 to-pink-600 hover:opacity-80 transition duration-200 text-white"
                onClick={() => {
                    localStorage.clear();

                    userContext.dispatch({type: 'reset_users'});

                    sweetalert("Table was reset successfully :)");
                }}
            >
                Reset Users
            </span>

            {modalOpen && <Modal setOpenModal={setModalOpen}/>}
        </div>
    );
}

export default Footer;