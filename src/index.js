import { about } from "./about";
import { homePage } from "./home";
import { menu } from "./menu";
import './style.css';



const content = document.querySelector('#content');
const homebtn = document.querySelector('.home');
const menubtn = document.querySelector('.menu');
const aboutbtn = document.querySelector('.about');
const buttons = document.querySelectorAll('button');

function setClass() {
    // Buttons
    for (const button of buttons) {
        // Set button hidden class
        button.setAttribute('class', `${button.getAttribute(`class`)} hidden`);
    }
    displayChoices()
}

function handleTabs() {
    const tabs = [0, 1, 2];
    let currentTab = tabs[0];

    const getTab = function() {
        return currentTab;
    }

    const switchTab = function(tab) {
        return currentTab = tabs[tab];
    }
    
    return {getTab, switchTab};
}

const handle = handleTabs();

homebtn.addEventListener(`click`, function() {
    homePage();
    buttons[handle.getTab()].setAttribute('class', 'hidden');
    handle.switchTab(0);
    buttons[handle.getTab()].removeAttribute('class', 'hidden');
});

menubtn.addEventListener(`click`, function() {
    menu();
    buttons[handle.getTab()].setAttribute('class', 'hidden');
    handle.switchTab(1);
    buttons[handle.getTab()].removeAttribute('class', 'hidden');
});

aboutbtn.addEventListener(`click`, function() {
    about();
    buttons[handle.getTab()].setAttribute('class', 'hidden');
    handle.switchTab(2);
    buttons[handle.getTab()].removeAttribute('class', 'hidden');
});

function displayChoices() {
    const nav = document.querySelector('nav');
    const displayContainer = document.createElement('div')
    const displayHbtn = document.createElement('button');
    const displayMbtn = document.createElement('button');
    const displayAbtn = document.createElement('button');
    displayContainer.setAttribute('class', 'displayContainer');
    displayHbtn.setAttribute('class', 'displayHome');
    displayMbtn.setAttribute('class', 'displayMenu');
    displayAbtn.setAttribute('class', 'displayAbout');

    content.appendChild(displayContainer);
    displayContainer.appendChild(displayHbtn);
    displayContainer.appendChild(displayMbtn);
    displayContainer.appendChild(displayAbtn);

    nav.style.display = 'none';
    displayHbtn.textContent = 'Home';
    displayMbtn.textContent = 'Menu';
    displayAbtn.textContent = 'About';

    displayHbtn.addEventListener('click', function() {
        homePage();
        buttons[handle.getTab()].setAttribute('class', 'hidden');
        handle.switchTab(0);
        buttons[handle.getTab()].removeAttribute('class', 'hidden');
        nav.style.display = 'flex';
    })
    
    displayMbtn.addEventListener('click', function() {
        menu();
        buttons[handle.getTab()].setAttribute('class', 'hidden');
        handle.switchTab(1);
        buttons[handle.getTab()].removeAttribute('class', 'hidden');
        nav.style.display = 'flex';
    })

    displayAbtn.addEventListener('click', function() {
        about();
        buttons[handle.getTab()].setAttribute('class', 'hidden');
        handle.switchTab(2);
        buttons[handle.getTab()].removeAttribute('class', 'hidden');
        nav.style.display = 'flex';
    })
}

setClass()

