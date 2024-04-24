import React from "react";
import styles from "../page.module.css";

const ProjectTag = ({tag, onClick, isSelected}) => {
    const buttonStyles = isSelected

    return (
        <button
        className={`${buttonStyles}`}
        onClick={() => onClick(tag)}
        >
            {tag}
        </button>
    );
};

export default ProjectTag;