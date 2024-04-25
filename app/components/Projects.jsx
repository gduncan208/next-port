"use client";
import React from "react";
import { useState } from "react";
import styles from "../page.module.css";
import ProjectCard from "./ProjectCard";
import ProjectTag from "../components/ProjectTag";
import StaggerIn from "./StaggerIn";
import hotshellLogo from "../images/hotshell_assets/hotshellLogo_Icon for Web.png";
import hotshellcards from "../images/hotshell_assets/cardmockupedited.png";
import hotshellletters from "../images/hotshell_assets/hotshellletterrender - Copy.png";
import hotshellphone from "../images/hotshell_assets/phones400.png";
import obsidianLogo from "../images/obsidian_assets/obsidian_logo_icon.png";
import obsidianhover from "../images/obsidian_assets/obsidian_businesscard_mockups.png";
import anomaliLogo from "../images/anomali_assets/GDES_221_SPRING2022_MYDIGITAL_BRAND_GRACIE_DUNCAN (1)-20.png"
import FadeIn from "./FadeIn";


const projectsData = [
    {
        id: 1,
        title: "Hotshell Cloud Service",
        description:"School Project: We started with 99 doodles and had to narrow it down to two, which we then had to combine in a logo. I had narrowed it down to a snail and a hot air balloon. The end result reminded me of a browser logo like Firefox. But because snails are associated with being slow, I decided that the logo was for a cloud service. Hot air balloons float amongst the clouds and snails use their shells as a safe space, so it fits nicely.",
        image: hotshellLogo,
        tag: ["Featured","Graphic Design", "Logo Design"],
        tool: ["Adobe Illustator", "Blender"],
        gallery: [hotshellcards, hotshellletters, hotshellphone],
    },
    {
        id: 2,
        title: "Obsidian Design and Build",
        description: "Client wanted a geometric logo that said Obsidian Design Build for his start up construction business.",
        image: obsidianLogo,
        tag: ["Graphic Design", "Logo Design"],
        tool: ["Adobe Illustator", "Photoshop"],
        gallery: [],
    },
    {
        id: 3,
        title: "Anomali Logo",
        description:"School Project: create a personal brand.",
        image: anomaliLogo,
        tag: ["Graphic Design", "Logo Design"],
        tool: ["Adobe Illustator", "Photoshop"],
        gallery: [],
    }
  
];


const Projects = () => {
    const [tag, setTag] = useState("Featured");

    const handleTagChange = (newTag) => {
        console.log("Now displaying", newTag, "projects");
        setTag(newTag);
    }

    const filterProjects = projectsData.filter((project) => 
        project.tag.includes(tag)
    );

    return (
        <section className={styles.projectsSection} id="projects">
            <h2 className={styles.headings}>Projects</h2>
            <div className={styles.proFilter}>
                <ProjectTag onClick={handleTagChange} tag="Featured" isSelected={tag === "Featured"} />
                <ProjectTag onClick={handleTagChange} tag="Graphic Design" isSelected={tag === "Graphic Design"} />
                {/* <ProjectTag onClick={handleTagChange} tag="Web" isSelected={tag === "Web"} /> */}
            </div>
            <div className={styles.proFilterSub}>
                <ProjectTag onClick={handleTagChange} tag="Poster" isSelected={tag === "Poster"} />
                <ProjectTag onClick={handleTagChange} tag="Logo Design" isSelected={tag === "Logo Design"} />
            </div>
            <FadeIn>
                <ul className={styles.projects}>
                    {filterProjects.map((project) => 
                    <ProjectCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imgUrl={project.image} 
                        tags={project.tag}
                        tools={project.tool}
                        gallery={project.gallery} /> 
                        )}
                </ul>
            </FadeIn>
        </section>
    )
};

export default Projects;