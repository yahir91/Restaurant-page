const content = document.querySelector('#content');
const buttonContainer = document.createElement('div');
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
  contactButton.classList.add('btn', 'btn-primary', 'mx-2', 'contact');
  menuButton.classList.add('btn', 'btn-primary', 'mx-2', 'menu');
  contactButton.textContent = 'Contact';
  menuButton.textContent = 'Menu';
  contactButton.setAttribute('type', 'button');
  menuButton.setAttribute('type', 'button');
  menuButton.textContent = 'Menu';
  content.appendChild(buttonContainer);
  buttonContainer.appendChild(menuButton);
  buttonContainer.appendChild(contactButton);
};

const menuCreation = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menuDiv');
  content.appendChild(menuContainer);
  const menuImg = document.createElement('img');
  menuImg.setAttribute('src', './src/assets/img/download.jpg');
  menuImg.classList.add('menuImg', 'img-fluid', 'd-flex', 'justify-content-center', 'my-2');
  menuContainer.appendChild(menuImg);
};


export const render = () => {
  headerCreation();
  buttonCreation();
  menuCreation();
};
