import React from "react";
import styles from "../page.module.css";
import Image from "next/image";
import { useState } from "react";

const Modal = ({ children, render }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
    };
    const closeModal = () => {
        setIsOpen(false);
    };

    return (
        <>
            {render(openModal)}
            {isOpen && (
                <div className={styles.projectModal}>
                    <div>
                        <button onClick={closeModal}>Close</button>
                        {children}
                    </div>
                </div>
            )}
        </>
    )
}
    

export default Modal;