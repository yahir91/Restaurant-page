import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css'

const content = document.querySelector('#content')
const heading = document.createElement('h1')
const buttonContainer = document.createElement('div')
const contactButton = document.createElement('button')
const menuButton = document.createElement('button')

//header creation
heading.textContent = 'Restaurant Page'
heading.classList.add('display-1', 'd-flex', 'justify-content-center')
content.appendChild(heading)

//button creation
buttonContainer.classList.add('row', 'd-flex', 'justify-content-center')
contactButton.classList.add('btn', 'btn-primary', 'mx-2')
menuButton.classList.add('btn', 'btn-primary', 'mx-2')
contactButton.textContent = 'Contact'
menuButton.textContent = 'Menu'
contactButton.setAttribute('type', 'button')
menuButton.setAttribute('type', 'button')
menuButton.textContent = 'Menu'
content.appendChild(buttonContainer)
buttonContainer.appendChild(menuButton)
buttonContainer.appendChild(contactButton)

// menu content
const menuContainer = document.createElement('div')
content.appendChild(menuContainer)
const menuImg = document.createElement('img')
menuImg.setAttribute('src', './src/assets/img/download.jpg')
menuImg.classList.add('menuImg', 'img-fluid', 'd-flex', 'justify-content-center')
menuContainer.appendChild(menuImg)

//contact content
const contactContainer = document.createElement('div')
content.appendChild(contactContainer)
const headingContact = document.createElement('h2')
const paragraphContact = document.createElement('p')
headingContact.textContent= 'Contat me in my github'
paragraphContact.textContent = 'https://github.com/'

