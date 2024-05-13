//import sushiBalls from './assets/sushi-balls.jpg';

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
    <div class='menu-container'>
        <div class='img-container'>
            <img class='menu-image2' src='../src/assets/sushi-maki.jpg' alt='image-sushi-maki'>
        </div>
        <div class='text-container'>
            <h1 class='title'>Sushi Maki</h1>
            <p class='text'>Indulge in the exquisite flavors of our Sushi Maki, a traditional Japanese delicacy expertly crafted to tantalize your taste buds.</p>
            <p class='text'> Each roll is a perfect harmony of premium sushi rice, fresh seafood, crisp vegetables, and creamy avocado, all wrapped in delicate nori seaweed and served with a side of soy sauce, wasabi, and pickled ginger. Whether you prefer classic options like California rolls or adventurous creations like Dragon rolls, our Sushi Maki selection promises a culinary journey that is both visually stunning and irresistibly delicious.<p>
            <p class='text'>Experience the artistry and precision of Japanese cuisine with every bite of our meticulously prepared Sushi Maki rolls.<p> 
        </div>
    </div>
    <div class='menu-container'>
        <div class='img-container'>
            <img class='menu-image3' src='../src/assets/sushi-sashimi.jpg' alt='image-sushi-sashimi'>
        </div>
        <div class='text-container'>
            <h1 class='title'>Sushi Sashimi Delight</h1>
            <p class='text'>Indulge in the freshest catch of the day with our exquisite Sushi Sashimi Delight. This delectable dish features a delicate arrangement of:</p>
            <ul>
                <li class='text'>Sushi: Tender pieces of seared salmon, expertly wrapped in a thin layer of vinegared rice and topped with a sprinkle of toasted sesame seeds.<li>
                <li class='text'>Sashimi: Thinly sliced, velvety smooth tuna, served with a side of wasabi and pickled ginger to enhance the flavors.<li>
            </ul>
            <p class='text'>Paired with a refreshing side of mixed greens and a zesty yuzu dressing, this dish is a harmonious balance of flavors and textures that will leave you craving for more.<p> 
        </div>
    </div>
    <div class='footer-container'>
        <p class='text'>Recommended Pairing: A glass of our crisp, dry sake to complement the delicate flavors of the dish.<p>
    </div>
    `
    ;
    
    content.innerHTML = menuPageContent;
}