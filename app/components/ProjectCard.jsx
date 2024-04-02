import React from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Modal from "./Modal";
import { render } from "react";




const ProjectCard = ({ imgUrl, title, description }) => {
    return (
        
        <div className={styles.proCard}>
            <Modal render={(open) => {
                return (
                    <Image
                        onClick={open}
                        src={imgUrl}
                        alt={title}
                        height={400}
                        width={400}
                        onError={(e) => console.error("Failed to load image:", e)}
                    />
                );
            }}>
                <div className={styles.proInfo}>
                    <h5>{title}</h5>
                    <p>{description}</p>
                </div>
            </Modal>
        </div>
    );
};

export default ProjectCard;

