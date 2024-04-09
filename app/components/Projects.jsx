import React from "react";
import styles from "../page.module.css"
import ProjectCard from "./ProjectCard";
import hotshellBCard from "../images/hotshellBC.png";

const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description:"This is the description for Project 1",
        image: hotshellBCard,
        tag: ["All", "Graphic Design"],
    },
  
];

const Projects = () => {
    return (
        <section className={styles.projectsSection} id="projects">
            <div>
                {projectsData.map((project) => 
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} /> 
                    )}
            </div>
        </section>
    )
};

export default Projects;