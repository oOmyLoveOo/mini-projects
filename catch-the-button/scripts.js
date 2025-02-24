const redirection = document.querySelector(".yesButton");
const noButton = document.querySelector(".noButton");

redirection.addEventListener("click", () => {
    let profile = prompt("Enter your Github profile name");
    if (profile) {
        window.location.href = `https://github.com/${profile}`;
    }
});

noButton.addEventListener("mouseover", () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    const maxWidth = windowWidth - buttonWidth;
    const maxHeight = windowHeight - buttonHeight;

    const newX = Math.floor(Math.random() * maxWidth);
    const newY = Math.floor(Math.random() * maxHeight);

    noButton.style.position = 'fixed';
    noButton.style.left = newX + 'px';
    noButton.style.top = newY + 'px';
});
