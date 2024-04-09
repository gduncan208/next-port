import React, { useState, useRef, useEffect } from "react";
import { gsap } from "gsap";
import styles from "../page.module.css";

function StaggerIn(props) {
    const [isVisible, setVisible] = useState(false);
    const domRef = useRef();

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => setVisible(entry.isIntersecting));
        });

        observer.observe(domRef.current);

        return () => {
            if (domRef.current) {
                observer.unobserve(domRef.current)
            }
        };
    }, [domRef.current]);

    useEffect(() => {
        if (isVisible) {
            gsap.from(domRef.current.children, {
                opacity: 0,
                y: 100,
                stagger: 0.1,
                duration: 1
            });
        }
    }, [isVisible]);

    return (
        <ul
            className={`${styles["fade-in-section"]} ${isVisible ? styles["is-visible"] : ''}`}
            ref={domRef}
        >
            {props.children}
        </ul>
    );
}

export default StaggerIn;
