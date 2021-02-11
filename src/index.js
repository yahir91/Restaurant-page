import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'
import './modules/contactButton'
import './modules/content'
import './modules/menuButton'


// menu content

const menuCreation = () => {
const menuContainer = document.createElement('div')
menuContainer.classList.add('menuDiv')
content.appendChild(menuContainer)
const menuImg = document.createElement('img')
menuImg.setAttribute('src', './src/assets/img/download.jpg')
menuImg.classList.add('menuImg', 'img-fluid', 'd-flex', 'justify-content-center', 'my-2')
menuContainer.appendChild(menuImg)
}
//contact content

const contactCreation = () => {
const contactContainer = document.createElement('div')
contactContainer.classList.add('contactDiv')
content.appendChild(contactContainer)
const headingContact = document.createElement('h2')
const paragraphContact = document.createElement('p')
headingContact.textContent= 'Contact me in my github'
paragraphContact.textContent = 'https://github.com/yahir91'
contactContainer.appendChild(headingContact)
contactContainer.appendChild(paragraphContact)
}





menuCreation()

// const render = () => {
//     if (contactContainer == null)
// }