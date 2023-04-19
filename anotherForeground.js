function animateSpaceship() {
    const spaceship = document.createElement("img");
    spaceship.src =
        "https://i.ibb.co/LJVY3TX/rocket-Img-removebg-preview-min.png";

    spaceship.style.position = "fixed";
    spaceship.style.width = "120px";
    spaceship.style.left = "-100px";
    spaceship.style.bottom = "0px";
    spaceship.style.zIndex = "9999";

    const moonImg = document.createElement("img");
    moonImg.src =
        "https://i.ibb.co/d7hzxhD/extra-Moon-Img-removebg-preview-min.png";

    moonImg.style.position = "fixed";
    moonImg.style.width = "350px";
    moonImg.style.maxWidth = "350px";
    moonImg.style.height = "350px";
    moonImg.style.top = "200px";
    moonImg.style.left = "50%";
    moonImg.style.transform = "translateX(-50%)";
    moonImg.style.zIndex = "99999";

    document.body.appendChild(spaceship);
    document.body.appendChild(moonImg);

    var i = 0;
    let temp;
    var intervalId = setInterval(function () {
        temp = i * 2;
        spaceship.style.left = i * 2 + "px";
        spaceship.style.bottom = i * 1 + "px";
        i++;
        if (temp >= window.innerWidth / 2.3) {
            clearInterval(intervalId);
            explodeSpaceship(spaceship, moonImg);
        }
    }, 5);
}

function explodeSpaceship(spaceship, moonImg) {
    //spaceship.style.width = "400px";
    spaceship.parentNode.removeChild(spaceship);
    moonImg.src = "https://media.tenor.com/wMHJk-5S334AAAAC/explosion.gif";

    /* var audio = new Audio("explosion.mp3"); */
    /* audio.play(); */
    setTimeout(function () {
        moonImg.parentNode.removeChild(moonImg);
    }, 3000);
}

animateSpaceship();
