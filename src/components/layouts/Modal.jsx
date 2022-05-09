import React from "react";
import "../../styles/modal.css";
import CreateUserForm from "../users/CreateUserForm";

function Modal({setOpenModal}) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn items-center justify-between">
                    <span className="font-semibold text-green-700">Create New User</span>
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                        className="hover:text-rose-500 transition duration-200"
                    >
                        x
                    </button>
                </div>
                <CreateUserForm setOpenModal={setOpenModal}/>
            </div>
        </div>
    );
}

export default Modal;