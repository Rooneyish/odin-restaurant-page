import "./styles.css"
import { menuLoad } from "./pageLoad";

const createRestaurantHomePage = () => {
    const content = document.querySelector('#content');
    content.innerHTML = ''; // Clear the content

    const homePage = document.createElement('div');
    homePage.classList.add('homePage');

    const textArea = document.createElement('div');
    textArea.classList.add('textArea');

    const headLine = document.createElement('h1');
    headLine.textContent = "Welcome to the restaurant!";
    textArea.appendChild(headLine);

    const paragraph = document.createElement('p');
    paragraph.textContent = "Welcome to The Restaurant, where every dish tells a story of flavor, passion, and tradition. Our kitchen is dedicated to crafting unforgettable meals using the freshest, locally-sourced ingredients. Whether you're here for a cozy dinner or a special celebration, we invite you to savor the moment and enjoy an experience that’s as warm and inviting as our hospitality. Come dine with us and taste the difference!";
    textArea.appendChild(paragraph);

    const menuButton = document.createElement('p');
    menuButton.classList.add('menu');
    menuButton.textContent = "View Menu";
    menuButton.addEventListener('click', menuLoad); 
    textArea.appendChild(menuButton);

    homePage.appendChild(textArea);
    content.appendChild(homePage);
};

export default createRestaurantHomePage;