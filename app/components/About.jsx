"use client";
import React, { useTransition, useState } from "react";
import styles from "../page.module.css"
import { useMediaQuery } from "react-responsive";
import TabButton from "./TabButton";

const TAB_DATA = {
   skills: {
        id: "skills",
        content: (
            <>
                <div>Coding Skills</div>
                <div>Design Skills</div>
            </>
    )},
    experience: {
        id: "experience",
        content: (
            <>
            
            </>
    )},
}

const About = () => {
    const [tab, setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    }
    return (
        <section className={styles.aboutSection}>
            <div className={styles.aboutGrid}>
                <div style={{height: 500, width: 500, backgroundColor: "grey"}}>Image Placeholder</div>
                <div className={styles.aboutMe}>
                    <h2 style={{paddingBottom: "1rem", fontSize: 21}}>
                        Hey there I'm Gracie
                    </h2>
                    <p>
                        Anim dolor proident ut ea velit aute. Do est fugiat esse culpa commodo reprehenderit quis adipisicing minim pariatur duis officia excepteur. Laborum ipsum nostrud ullamco Lorem dolore consequat pariatur commodo sunt non Lorem quis irure. In irure eiusmod anim sunt eu officia veniam incididunt quis ut magna enim et. Amet proident aute exercitation do nostrud non. Exercitation eu laboris id excepteur ut adipisicing.
                    </p>
                </div>
                <div className={styles.infoTabs}>
                    <div>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>

                        <TabButton selectTab={() => handleTabChange("experience")} active={tab === "experience"}>Experience</TabButton>
                    </div>
                    <div>{TAB_DATA[tab].content}</div>
                </div>
            </div>
        </section>
    )
}

export default About