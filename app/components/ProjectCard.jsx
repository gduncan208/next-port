import React from "react";
import { useState } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Modal from "./Modal";
import FadeIn from "./FadeIn";
import StaggerIn from "./StaggerIn";
import { Content } from "next/font/google";

const ProjectCard = ({ imgUrl, title, description, tags, tools, gallery }) => {

   const projectTags = tags.map((tag, index) => <li key={index}>{tag}</li>);
   const projectTools = tools.map((tool, index) => <li key={index}>{tool}</li>);

   const [IsHovered, setIsHovered] = useState(false);
    

    return (
        <div className={styles.proCard}>
            <Modal render={(open) => {
                return (
                    <li className={styles.imgContainer}>
                        <div
                            className={styles.overlay}
                            style={{ opacity: IsHovered ? 0.7 : 0, pointerEvents: IsHovered ? 'auto' : 'none' }}
                            onClick={open}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        />
                        <Image
                            className={styles.cardImg}
                            onClick={open}
                            src={imgUrl}
                            alt={title}
                            layout="responsive"
                            height={400}
                            width={400}
                            cursor="pointer"
                            onError={(e) => console.error("Failed to load image:", e)}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                        />
                    </li>
                );
            }}>
                    <div className={styles.proInfo}>
                        <div className={styles.modalWrapper}>
                            <div className={styles.modalContent}>
                                <h3>{title}</h3>
                                <ul className={styles.protags}>{projectTags}</ul>

                                <h4 style={{fontWeight: 600}}>Made With</h4>
                                <ul className={styles.protools}>{projectTools}</ul>

                                <p>{description}</p>
                            </div>
                                <div className={styles.imgGallery}>
                                    {gallery && gallery.length ? gallery.map((image, index) => {
                                        console.log(image);
                                        return (
                                            <div key={index} className={styles.galleryImageContainer}>
                                            <Image 
                                            src={image.src} 
                                            fill={true}
                                            className={styles.galleryImage}
                                            />
                                        </div>
                                        )
                                    }) : null}
                            </div>
                        </div>
                    </div>
            </Modal>
        </div>
    );
};

export default ProjectCard;

