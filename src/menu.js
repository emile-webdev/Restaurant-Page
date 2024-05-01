export function menu() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const menuPageContent = 
    `
    <div class='menu-container'>
        <div class='img-container'>
            <img class='menu-image1' src='../src/assets/sushi-balls.jpg' alt='image-sushi-balls'>
        </div>
        <div class='text-container'>
            <h1 class='title'>Sushi Balls</h1>
            <p class='text'>Indulge in our delectable Sushi Balls, a unique fusion of traditional sushi and playful presentation.</p>
            <p class='text'> These bite-sized morsels are crafted with tender, flavorful sushi rice and wrapped around a savory filling of your choice, including spicy tuna, crab, or classic salmon.<p>
            <p class='text'>Each Sushi Ball is carefully formed into a delicate sphere, ensuring a delightful surprise with every bite.<p> 
            <p class='text'>Served with a side of wasabi and pickled ginger for added depth of flavor, our Sushi Balls are a must-try for adventurous eaters and sushi lovers alike.</p>
        </div>
    </div>
    `
    ;
    
    content.innerHTML = menuPageContent;
}