import React from "react";
import "../../styles/modal.css";
import CreateUser from "../users/CreateUser";

function Modal({setOpenModal}) {
    return (
        <div className="modalBackground">
            <div className="modalContainer">
                <div className="titleCloseBtn">
                    <button
                        onClick={() => {
                            setOpenModal(false);
                        }}
                    >
                        X
                    </button>
                </div>
                <CreateUser setOpenModal={setOpenModal}/>
            </div>
        </div>
    );
}

export default Modal;