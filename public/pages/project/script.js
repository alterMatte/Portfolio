import projects from "./projectData.js";
import { displayProject } from "./displayProject.js";

let projectSection = document.getElementById("projects-section")

for(const key in projects){
    const project = projects[key];
    projectSection.innerHTML += displayProject(project);
}