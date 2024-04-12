import React from "react";
import styles from "../page.module.css"
import ProjectCard from "./ProjectCard";
import StaggerIn from "./StaggerIn";
import hotshellLogo from "../images/hotshell_assets/hotshellLogo_Icon for Web.png";
import hotshellhover from "../images/hotshell_assets/hotshell_businesscard_mockup.png";
import obsidianLogo from "../images/obsidian_assets/obsidian_logo_icon.png";
import obsidianhover from "../images/obsidian_assets/obsidian_businesscard_mockups.png";

const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description:"",
        image: hotshellLogo,
        hoverImg: hotshellhover,
        tag: ["All", "Graphic Design", "Logo"],
    },
    {
        id: 2,
        title: "Project 2",
        description: "project 2 desc",
        image: obsidianLogo,
        hoverImg: obsidianhover,
        tag: ["All", "Graphic Design", "Logo"],
    }
  
];


const Projects = () => {

    return (
        <section className={styles.projectsSection} id="projects">
            <div className={styles.projects}>
                {projectsData.map((project) => 
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} 
                    hover={project.hoverImg} /> 
                    )}
            </div>
        </section>
    )
};

export default Projects;