function projectSelected(){
    const projectsSelect= document.getElementById('projects');

    if (projectsSelect.value === 'bouncables') {
        setupScript = setupBouncables;
        drawScript = drawBouncables;
    }else if(projectsSelect.value === 'flagTemplate'){
        setupScript = () => {}
        drawScript = drawFlag()
    }
}