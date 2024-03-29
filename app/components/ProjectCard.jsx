import React from "react";
import styles from "../page.module.css";



const ProjectCard = ({ imgUrl, title, description }) => {
    return (
        
        <div className={styles.proCard}>
            <div style={{height: 400, width: "50%", backgroundColor: "grey"}}><img src={imgUrl}  alt={title} /></div> 
            <div className={styles.proInfo}>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    )
}

export default ProjectCard;