export function contact() {
    const content = document.querySelector('#content');
    content.replaceChildren();

    const contactPageContent = 
    `
    <h1 class='title'>Contact Us</h1>
    <div class='container'>
        <form id='contact-form'>
            <input type='text' id='firstName' name='firstName' placeholder='First Name'>
            <input type='text' id='lastName' name='lastName' placeholder='Last Name'>
            <input type='email' id='email' name='email'placeholder='Email' >
            <textarea id="message" name="message" placeholder="Your message..." style="height:150px"></textarea>
            <input class='submit' type="submit" value="SEND">
        </form>
    </div>
    `
    content.innerHTML = contactPageContent;
}