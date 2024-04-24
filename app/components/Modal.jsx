import React, { useEffect } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import { useState } from "react";

const Modal = ({ children, render }) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = "hidden";
        document.nodeValue.style.visability = "hidden";
    };
    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = "auto";
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = "auto";
        };
    }, []);
    

    return (
        <>
            {render(openModal)}
            {isOpen && (
                <>
                    <div className={styles.modalBackdrop} />
                    <div className={styles.projectModal}>
                            <button onClick={closeModal}>Close</button>
                            {children}
                    </div>
                    <div onClick={closeModal} className={styles.modalBackdrop} />
                </>
            )}
        </>
    )
}
    

export default Modal;