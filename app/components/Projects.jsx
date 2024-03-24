import React from "react";
import ProjectCard from "./ProjectCard";

const projectsData = [
    {
        id: 1,
        title: "Project 1",
        description:"Description for project 1",
        image: "public/images/projects/cardmockup.png",
        tag: ["All", "Graphic Design"]
    },
    // {
    //     id: 2,
    //     title: "Project 2",
    //     description:"Description for project 2",
    //     image: "",
    //     tag: ["All", "Graphic Design"]
    // },
    // {
    //     id: 2,
    //     title: "Project 2",
    //     description:"Description for project 2",
    //     image: "",
    //     tag: ["All", "Graphic Design"]
    // },
]


const Projects = () => {
    return (
        <>
            <div>
                {projectsData.map((project) => 
                <ProjectCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imgUrl={project.image} /> 
                    )} 
            </div>
        </>
    );
};

export default Projects;