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
contactButton.classList.add('btn', 'btn-primary')
menuButton.classList.add('btn', 'btn-primary')
contactButton.textContent = 'Contact'
menuButton.textContent = 'Menu'
content.appendChild(buttonContainer)
buttonContainer.appendChild(menuButton)
buttonContainer.appendChild(contactButton)
