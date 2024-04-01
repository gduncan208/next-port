import React from "react";
import styles from "../page.module.css";
import Image from "next/image";




const ProjectCard = ({ imgUrl, title, description }) => {
    return (
        
        <div className={styles.proCard}>
                <Image 
                src={imgUrl} 
                alt={title} 
                height={400}
                width={400}
                onError={(e) => console.error("Failed to load image:", e)} />
            <div className={styles.proInfo}>
                <h5>{title}</h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default ProjectCard;

