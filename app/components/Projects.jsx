import React from "react";
import styles from "../page.module.css"
import ProjectCard from "./ProjectCard";
import StaggerIn from "./StaggerIn";
import hotshellLogo from "../images/hotshell_assets/hotshellLogo_Icon for Web.png";
import hotshellhover from "../images/hotshell_assets/hotshell_businesscard_mockup.png";
import obsidianLogo from "../images/obsidian_assets/obsidian_logo_icon.png";
import obsidianhover from "../images/obsidian_assets/obsidian_businesscard_mockups.png";
import anomaliLogo from "../images/anomali_assets/GDES_221_SPRING2022_MYDIGITAL_BRAND_GRACIE_DUNCAN (1)-20.png"
import FadeIn from "./FadeIn";

const projectsData = [
    {
        id: 1,
        title: "Hotshell Cloud Service",
        description:"",
        image: hotshellLogo,
        tag: ["Graphic Design", "Logo Design"],
        tool: ["Adobe Illustator", "Blender"],
        gallery: [],
    },
    {
        id: 2,
        title: "Project 2",
        description: "project 2 desc",
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

// const projectTools = tools.map((tool, index) => <li key={index}>{tool}</li>
const Projects = () => {

    return (
        <section className={styles.projectsSection} id="projects">
            <FadeIn>
            <ul className={styles.projects}>
                {projectsData.map((project) => 
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