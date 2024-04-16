import React, { useState } from 'react';
import styles from "../page.module.css";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react";


const Carousel = ({ gallery }) => {
    return (
        <div >
            <BsArrowLeftCircleFill className={styles.arrowLeft}/>
            {gallery && gallery.length ? gallery.map((image, index) => {
                console.log(image);
                return (
                    <img key={index} src={image} alt={`Image ${index}`} className={styles.slide}/>
                );
            }) : null}
            <BsArrowRightCircleFill className={styles.arrowRight} />
            <span className={styles.indicators}>{gallery.map((_, index) => {
                return <button key={index} onClick={null}></button>
            })}</span>
        </div>
    );
};

export default Carousel;

