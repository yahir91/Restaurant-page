const content = document.querySelector('#content');

export const menuCreation = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menuDiv');
  content.appendChild(menuContainer);
  const menuImg = document.createElement('img');
  menuImg.setAttribute('src', './src/assets/img/download.jpg');
  menuImg.classList.add('menuImg', 'img-fluid', 'd-flex', 'justify-content-center', 'my-2');
  menuContainer.appendChild(menuImg);
};

export const menuListener = () => {
  const menuButton = document.querySelector('.menu');
  menuButton.addEventListener('click', () => {
    content.lastElementChild.remove();
    menuCreation();
  });
};