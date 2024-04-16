import React from "react";
import { useState } from "react";
import styles from "../page.module.css";
import Image from "next/image";
import Modal from "./Modal";
import FadeIn from "./FadeIn";
import StaggerIn from "./StaggerIn";
// import Carousel from "../components/Carousel";
import { CCarousel, CCarouselItem, CImage } from '@coreui/react'

const ProjectCard = ({ imgUrl, title, description, tags, tools, gallery }) => {

   const projectTags = tags.map((tag, index) => <li key={index}>{tag}</li>);
   const projectTools = tools.map((tool, index) => <li key={index}>{tool}</li>);


    return (
        <div className={styles.proCard}>
            <Modal render={(open) => {
                return (
                    <li className={styles.imgContainer}>
                        <Image
                            onClick={open}
                            src={imgUrl}
                            alt={title}
                            layout="responsive"
                            height={400}
                            width={400}
                            cursor="pointer"
                            onError={(e) => console.error("Failed to load image:", e)}
                        />
                    </li>
                );
            }}>
                    <div className={styles.proInfo}>
                        <div className={styles.modalWrapper}>

                            <h3>{title}</h3>
                            <ul className={styles.protags}>{projectTags}</ul>

                            <h4 style={{fontWeight: 600}}>Made With</h4>
                            <ul className={styles.protools}>{projectTools}</ul>

                            <p>{description}</p>
                                <div className={styles.imgGallery}>
                                    {gallery && gallery.length ? gallery.map((image, index) => {
                                        console.log(image);
                                        return (
                                                <img src={image.src} className={styles.galleryImage}/>
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

