import React from "react";
import { useState } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Modal from "./Modal";
import FadeIn from "./FadeIn";
import StaggerIn from "./StaggerIn";

const ProjectCard = ({ imgUrl, title, description, hover }) => {

    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <StaggerIn>
        <div className={styles.proCard}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}>
            <Modal render={(open) => {
                return (
                    <div className={styles.imgContainer}>
                        <Image
                            onClick={open}
                            src={isHovered ? hover : imgUrl}
                            alt={title}
                            layout="fill"
                            objectFit="contain"
                            cursor="pointer"
                            onError={(e) => console.error("Failed to load image:", e)}
                        />
                    </div>
                );
            }}>
                    <div className={styles.proInfo}>
                        <div className={styles.modalWrapper}>
                            <h5>{title}</h5>
                            <p>{description}</p>
                        </div>
                    </div>
            </Modal>
        </div>
        </StaggerIn>
    );
};

export default ProjectCard;

