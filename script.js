function projectSelected() {
    const projectsSelect = document.getElementById('projects');
    frameRate(60);
    if (projectsSelect.value === 'bouncables') {
        setupScript = setupBouncables;
        drawScript = drawBouncables;
    } else if (projectsSelect.value === 'flags') {
        setupScript = function() {};
        drawScript = drawFlags;
    } else if (projectsSelect.value === 'snake') {
        frameRate(4);
        setupScript = setupSnake;
        drawScript = drawSnake;
        keyPressedScript = keyPressedSnake;
    }

    setupScript();
}