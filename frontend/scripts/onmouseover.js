const buttons = ['onmouseover_home', 'onmouseover_projects', 'onmouseover_certifications', 'linkedin', 'github'];



function myFunction(button){
    const button1 = document.getElementById(button);

    // 👇️ Change text color on mouseover
    button1.addEventListener('mouseover', function handleMouseOver() {
        button1.style.color = 'lightgrey';
        
    });

    // 👇️ Change text color back on mouseout
    button1.addEventListener('mouseout', function handleMouseOut() {
        button1.style.color = 'grey';
    });
}
buttons.forEach(myFunction);