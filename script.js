document.addEventListener("DOMContentLoaded", function() {
    console.log("Cyber Symposium Loaded!");
});

console.log("Mouse detector script loaded!"); // This should appear in the browser console
document.addEventListener("mousemove", function(event) {
    console.log(`Mouse moved: X=${event.pageX}, Y=${event.pageY}`);
});
document.addEventListener("DOMContentLoaded", function () {
    // Create the Cyber Ball
    let cyberBall = document.createElement("div");
    cyberBall.id = "cyber-ball";
    document.body.appendChild(cyberBall);

    // Update position smoothly
    document.addEventListener("mousemove", function (event) {
        let x = event.clientX;
        let y = event.clientY;

        // Move the cyber ball with smooth transition
        cyberBall.style.left = `${x}px`;
        cyberBall.style.top = `${y}px`;
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Hide the loading screen after 2 seconds (adjust if needed)
    setTimeout(() => {
        document.getElementById("loading").classList.add("hidden");
    }, 2000);
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.classList.contains("responsive")) {
        x.classList.remove("responsive");
    } else {
        x.classList.add("responsive");
    }
}
