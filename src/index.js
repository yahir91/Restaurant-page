import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';
import { render } from './modules/content';
// import './modules/content'
import { contactListener } from './modules/contactButton';
import { menuListener } from './modules/menuButton';


render();
contactListener();
menuListener();


// const content = document.querySelector('#content')

// const heading = document.createElement('h1')
// heading.textContent = 'Restaurant Page'
// heading.classList.add('display-1', 'd-flex', 'justify-content-center')
// content.appendChild(heading)


// const buttonContainer = document.createElement('div')
// const contactButton = document.createElement('button')
// const menuButton = document.createElement('button')
// buttonContainer.classList.add('row', 'd-flex', 'justify-content-center')
// contactButton.classList.add('btn', 'btn-primary', 'mx-2')
// menuButton.classList.add('btn', 'btn-primary', 'mx-2')
// contactButton.textContent = 'Contact'
// menuButton.textContent = 'Menu'
// contactButton.setAttribute('type', 'button')
// menuButton.setAttribute('type', 'button')
// menuButton.textContent = 'Menu'
// content.appendChild(buttonContainer)
// buttonContainer.appendChild(menuButton)
// buttonContainer.appendChild(contactButton)
// headerCreation(content)
// buttonCreation(content)


// menuCreation()

// const render = () => {
//     if (contactContainer == null)
// }