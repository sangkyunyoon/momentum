const images = [
    "0.jpeg",
    "1.jpeg",
    "2.jpeg"
]

const choosenImage = images[Math.floor(Math.random() * images.length)];

const bgImg = document.createElement("img");
bgImg.src = `img/${choosenImage}`;
bgImg.id = "bgImage";

document.body.appendChild(bgImg);