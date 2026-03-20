import projects from './projectData.js';

const displayProject = (project) => {
    return `
    <a class="project-card" href="${project.link}">
            <img class="project-thumbnail" src="../../../src${project.thumbnail}" alt="${project.title}">
            <h3>${project.title}</h3>
    </a>
    `;
}


const display6Projects = () => {
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return; 
    // Display the 6 featured projects
    for(let i = 1; i <= 6; i++){
        const project = projects[i];
        if(project) projectsGrid.innerHTML += displayProject(project);
    }
}

export { displayProject, display6Projects };