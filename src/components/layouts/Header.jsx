import {useState} from 'react';
import Modal from "./Modal";

function Header() {
    const [modalOpen, setModalOpen] = useState(false);


    return (
        <>
            <button
                className="p-2 cursor-pointer border-4 bg-green-700 hover:bg-green-500"
                onClick={() => {
                    setModalOpen(true);
                }}
            >
                Create New User
            </button>

            {modalOpen && <Modal setOpenModal={setModalOpen}/>}
        </>
    );
}

export default Header;