let images = document.getElementById("pics");
const imageList = imageDatabase;

function createCard(src){
    const image = document.createElement("img");
    image.src = src;
    return image;
}

for (let i = 0; i < imageList.length; i++) {
    const photoSrc = imageList[i];
    const card = createCard(photoSrc);
    images.appendChild(card);
}