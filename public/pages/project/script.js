import projects from "../../../src/data/projectData.js";
import { displayProject } from "../../../src/scripts/displayProject.js";

let projectSection = document.getElementById("projects-section")

for(const key in projects){
    const project = projects[key];
    projectSection.innerHTML += displayProject(project);
}