const originalText = "I am a software engineering student passionate about programming, problem-solving, and building useful applications.";
const newText = "I enjoy learning new technologies and building real-world projects.";

function changeText() {
    const element = document.getElementById("about-text");
    if (element.innerText === originalText) {
        element.innerText = newText;
    } else {
        element.innerText = originalText;
    }
}
