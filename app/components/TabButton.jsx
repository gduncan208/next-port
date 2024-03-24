import React from "react";

const TabButton = ({ active, selectTab, children }) => {
    const buttonClasses = {
        all: "unset",
        margin: "1rem 4rem",
        padding: ".25rem",
        color: "white",
        cursor: "pointer",
        opacity: active ? 1 : 0.5,
        borderBottom: active ? "1px solid white" : "none",
    };
    return (
        <button onClick={selectTab} style={buttonClasses}>
            {children}
        </button>
    )
} 

export default TabButton;