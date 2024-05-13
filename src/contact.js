export function contact() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const contactPageContent = 
    `
    <h1 class='title'>Get in Touch</h1>
    <p class='text'>Have a question about our menu, reservations, or catering services? Want to provide feedback on your dining experience? Feel free to contact us using the form below. Our team will get back to you as soon as possible.</p>
    <p class='text'>We look forward to hearing from you and welcoming you to Sushi Heaven for an unforgettable dining experience!</p>
    <br>
    <div class='wrapper'>
        <div class='info-container'>
            <h3>Contact Information</h3>
            <br>
            <address>
                <h4>Address:</h4>
                <p class='text'>Sushi Heaven</p>
                <p class='text'>123 Main Street</p>
                <p class='text'>City, State, Zip Code</p>
            </address>
            <br>
            <h4>Phone:</h4>
            <p class='text'>(555) 123-4567</p>
            <br>
            <h4>Opening hours:</h4>
            <br>
            <h5>Monday - Friday:</h5>
            <p class='text'>Lunch: 11:30 AM - 2:30 PM</p>
            <p class='text'>Dinner: 5:00 PM - 9:00 PM</p>
            <h5>Saturday - Sunday:</h5>
            <p class='text'>12:00 PM - 9:30 PM</p>
        </div>
        <div class='form-container'>
            <form id='contact-form'>
                <input type='text' id='firstName' name='firstName' placeholder='First Name'>
                <input type='text' id='lastName' name='lastName' placeholder='Last Name'>
                <input type='email' id='email' name='email'placeholder='Email' >
                <textarea id="message" name="message" placeholder="Your message..." style="height:150px"></textarea>
                <input class='submit' type="submit" value="SEND">
            </form>
        </div>
    </div>
    `
    content.innerHTML = contactPageContent;
}