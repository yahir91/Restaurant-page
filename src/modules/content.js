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