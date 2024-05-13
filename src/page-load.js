//import restaurantImage from './assets/restaurant.png';

export function pageLoad() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const homePageContent = 
    `
    <h1 class='title'>Welcome to Sushi Heaven!</h1>
    <img class='main-image' src='../src/assets/restaurant.png' alt='image-restaurant'>
    <p class='text'>Immerse yourself in a culinary journey of exquisite flavors and artful presentations as you step into our serene and elegant sushi restaurant. Sushi Heaven is a haven for sushi enthusiasts and food connoisseurs alike, offering an unparalleled dining experience that celebrates the art of Japanese cuisine.</p>
    <br>
    <p class='text'>Our skilled sushi chefs, trained in the traditional methods of sushi making, meticulously craft each dish using the freshest and highest-quality ingredients. From the delicate tuna sashimi to the perfectly balanced California rolls, every bite is a symphony of flavors that will tantalize your taste buds and transport you to a world of gastronomic bliss.</p>
    <br>
    <p class='text'>Sushi Heaven's inviting atmosphere, with its warm lighting, sleek decor, and serene ambiance, creates the perfect setting for intimate gatherings, business lunches, or simply indulging in the art of sushi appreciation. Our attentive staff is dedicated to ensuring your dining experience is nothing short of exceptional, catering to your every need and providing recommendations to help you navigate our extensive menu.</p>
    <br>
    <p class='text'>Whether you're a sushi connoisseur or a newcomer to the world of Japanese cuisine, Sushi Heaven welcomes you with open arms. Prepare to embark on a culinary adventure that will leave you craving for more. We look forward to serving you and sharing our passion for sushi with you.</p>
    <br>
    <p class='footer-text'>Itadakimasu! (Let's eat!)</p>
    `
    ;

    content.innerHTML = homePageContent;
}