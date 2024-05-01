export function pageLoad() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const homePageContent = 
    `
    <h1 class='title'>Welcome to Sushi Heaven!</h1>
    <img class='main-image' src='../src/assets/restaurant.png' alt='image-restaurant'>
    <p class='text'>Sushi Heaven is the home of fresh Japanese cuisine.</p>
    <p class='text'>We have a wide variety of sushi and sashimi dishes on our menu.</p>
    `
    ;

    content.innerHTML = homePageContent;
}