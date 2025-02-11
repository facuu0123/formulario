function showHearts() {
    for (let i = 0; i < 10; i++) {
        let heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "💖";
        document.body.appendChild(heart);
        
        let randomX = Math.random() * window.innerWidth;
        let randomDuration = Math.random() * 3 + 2;

        heart.style.left = `${randomX}px`;
        heart.style.animationDuration = `${randomDuration}s`;

        setTimeout(() => {
            heart.remove();
        }, randomDuration * 1000);
    }
}

function showMessage() {
    document.querySelector(".hidden-message").style.display = "block";
}

/* Mover el botón "No" */
document.getElementById("noButton").addEventListener("mouseover", function() {
    let x = Math.random() * (window.innerWidth - 100); // Evita que se salga de la pantalla
    let y = Math.random() * (window.innerHeight - 100);
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;
});
