document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    }); 
});

const portrait = document.querySelector('.portrait');

portrait.addEventListener('click', function() {
    this.classList.toggle('clicked');
});

const projectItems = document.querySelectorAll('.project');

projectItems.forEach(project => {
    const projectImage = project.querySelector('.project-image');
    const expandButton = project.querySelector('.expand-button');

    expandButton.addEventListener('click', () => {
        projectImage.classList.toggle('show-image');
    });
});
