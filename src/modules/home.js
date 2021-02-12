const content = document.querySelector('#content');

export const homeCreation = () => {
  const homeContainer = document.createElement('div');
  content.appendChild(homeContainer);
  const menuImg = document.createElement('img');
  menuImg.setAttribute('src', './src/assets/img/download.jpg');
  menuImg.classList.add('menuImg', 'img-fluid', 'd-flex', 'justify-content-center', 'my-2');
  homeContainer.appendChild(menuImg);
};

export const homeListener = () => {
  const homeButton = document.querySelector('.home');
  homeButton.addEventListener('click', () => {
    content.lastElementChild.remove();
    homeCreation();
  });
};