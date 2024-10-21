function openTab(evt, tabName) {
    const tabContents = document.querySelectorAll('.tab-content');
    tabContents.forEach(content => {
        content.style.display = 'none';
    });

    const buttons = document.querySelectorAll('#sidebar button');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    document.getElementById(tabName).style.display = 'block';
    evt.currentTarget.classList.add('active');
}

document.addEventListener("DOMContentLoaded", function() {
    const event = new Event('click');
    openTab(event, 'home');
});

const sidebar = document.getElementById('sidebar');
sidebar.addEventListener('mouseenter', function() {
    sidebar.style.overflowY = 'auto';
});

sidebar.addEventListener('mouseleave', function() {
    sidebar.style.overflowY = 'hidden';
});

document.addEventListener('mousemove', function (e) {
    const x = e.clientX;
    const y = e.clientY;

    const particle = document.createElement('div');
    particle.classList.add('stardust');
    document.body.appendChild(particle);

    particle.style.left = `${x}px`;
    particle.style.top = `${y}px`;

    setTimeout(() => {
        particle.remove();
    }, 400);
});
