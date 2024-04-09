import { react } from "react";
import React, { useState, useRef, useEffect } from "react";
import ReactDOM from 'react-dom';
import styles from "../page.module.css";

function FadeIn(props) {
    const [isVisible, setVisible] = React.useState(false);
    const domRef = React.useRef();

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });
        observer.observe(domRef.current);
        return () => {
            if (domRef.current) {
                observer .unobserve(domRef.current)
            }
        };
    }, [domRef.current]);

    return (
        <div
            className={`${styles["fade-in-section"]} ${isVisible ? styles["is-visible"] : ''}`} // Use CSS module class names
            ref={domRef}
        >
            {props.children}
        </div>
    );
}

export default FadeIn;
