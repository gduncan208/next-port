import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import styles from "../page.module.css";

const TabButton = ({ active, selectTab, children }) => {
    
    const buttonClasses = {
        all: "unset",
        margin: "1rem 4rem",
        padding: ".25rem .25rem -1px",
        color: "white",
        cursor: "pointer",
        fontFamily: "kanit, sans-serif",
        letterSpacing: 1,
        opacity: active ? 1 : 0.5,
    };

    const isMobile = useMediaQuery({ maxWidth: 500 });

    if (isMobile) {
        buttonClasses.margin = "1.5rem";
    }

    const [hovered, setHovered] = useState(false);

    const handleHover = () => {
        setHovered(!hovered);
    };

    const underlineStyles = {
        height: "2px",
        width: active || hovered ? "100%" : "0",
        bottom: "0",
        transition: ".2s ease-in-out",
        backgroundColor: "white",
        position: "relative", 
        zIndex: "1", 
    };

  
    return (
        <button 
        onClick={selectTab}
        onMouseEnter={handleHover}
        onMouseLeave={handleHover} 
        style={buttonClasses}>
            {children}
            <div className={styles.underlineAnimation} style={underlineStyles} />
        </button>
    )
} 

export default TabButton;