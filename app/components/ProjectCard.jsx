import React from "react";
import styles from "../page.module.css";


const ProjectCard = ({ imgUrl, title, description }) => {
    return (
        
        <div className={styles.proCard}>
            <img src={imgUrl}  alt={title} /> 
            <div className={styles.proInfo}>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;