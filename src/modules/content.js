const content = document.querySelector('#content');
const buttonContainer = document.createElement('div');
export const homeButton = document.createElement('button');
export const contactButton = document.createElement('button');
export const menuButton = document.createElement('button');


export const headerCreation = () => {
  const heading = document.createElement('h1');
  heading.textContent = 'Restaurant Page';
  heading.classList.add('display-1', 'd-flex', 'justify-content-center');
  content.appendChild(heading);
};

export const buttonCreation = () => {
  buttonContainer.classList.add('row', 'd-flex', 'justify-content-center');
  homeButton.classList.add('btn', 'btn-primary', 'mx-2', 'home');
  contactButton.classList.add('btn', 'btn-primary', 'mx-2', 'contact');
  menuButton.classList.add('btn', 'btn-primary', 'mx-2', 'menu');
  homeButton.textContent = 'Home';
  contactButton.textContent = 'Contact';
  menuButton.textContent = 'Menu';
  homeButton.setAttribute('type', 'button');
  contactButton.setAttribute('type', 'button');
  menuButton.setAttribute('type', 'button');
  menuButton.textContent = 'Menu';
  content.appendChild(buttonContainer);
  buttonContainer.appendChild(homeButton);
  buttonContainer.appendChild(menuButton);
  buttonContainer.appendChild(contactButton);
};

export const homeCreation = () => {
  const homeContainer = document.createElement('div');
  content.appendChild(homeContainer);
  const menuImg = document.createElement('img');
  menuImg.setAttribute('src', './src/assets/img/download.jpg');
  menuImg.classList.add('menuImg', 'img-fluid', 'd-flex', 'justify-content-center', 'my-2');
  homeContainer.appendChild(menuImg);
};


export const render = () => {
  headerCreation();
  buttonCreation();
  homeCreation();
};
