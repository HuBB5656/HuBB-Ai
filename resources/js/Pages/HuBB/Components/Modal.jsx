import React, { useState } from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="modal-overlay">
            <div className="modal">
                <button className="close-button" onClick={onClose}>
                    Close
                </button>
                {children}
            </div>
        </div>
    );
};

function Modal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <h1>React Modal Example</h1>
            <button onClick={openModal}>Open Modal</button>

            <Modal isOpen={isModalOpen} onClose={closeModal}>
                <h2>This is a Modal</h2>
                <p>Modal content goes here.</p>
            </Modal>
        </div>
    );
}

export default Modal;
