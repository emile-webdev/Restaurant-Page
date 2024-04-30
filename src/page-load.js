export function pageLoad() {
    const content = document.querySelector('#content');

    // --- H1 ---
    const heading = document.createElement('h1');
    heading.textContent = "Welcome to Sushi Heaven!";
    heading.classList.add('title');
    content.appendChild(heading);

    // --- IMG ---
    const mainImage = document.createElement('img');
    mainImage.src = "../src/assets/restaurant.png";
    mainImage.alt = "image-restaurant";
    mainImage.classList.add('main-image');
    content.appendChild(mainImage);

    // --- P ---
    const text1 = document.createElement('p');
    text1.textContent = "Sushi Heaven is the home of fresh Japanese cuisine.";
    text1.classList.add('text');
    content.appendChild(text1);

    const text2 = document.createElement('p');
    text2.textContent = "We have a wide variety of sushi and sashimi dishes on our menu.";
    text2.classList.add('text');
    content.appendChild(text2);
}