import {useState} from 'react';
import Modal from "./Modal";

function CreateUserButton() {
    const [modalOpen, setModalOpen] = useState(false);


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
                className="p-2 cursor-pointer rounded-md bg-gradient-to-r from-rose-500 to-pink-600 hover:opacity-80 transition duration-200 text-white"
                onClick={() => {
                    localStorage.clear();
                }}
            >
                Reset Users
            </span>

            {modalOpen && <Modal setOpenModal={setModalOpen}/>}
        </div>
    );
}

export default CreateUserButton;