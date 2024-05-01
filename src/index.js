import { pageLoad } from './page-load.js';
import { menu } from './menu.js';
import { contact } from './contact.js';

pageLoad();

// --- SWITCH PAGES ---
let switchPages = (function() {
    const homeBtn = document.querySelector('#home');
    homeBtn.addEventListener('click', pageLoad);

    const menuBtn = document.querySelector('#menu');
    menuBtn.addEventListener('click', menu);

    const contactBtn = document.querySelector('#contact');
    contactBtn.addEventListener('click', contact);
})();