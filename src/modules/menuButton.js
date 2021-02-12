const content = document.querySelector('#content');

export const menuCreation = () => {
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menuDiv');
  content.appendChild(menuContainer);
  const listMenu = document.createElement('ul')
  const fritesLi = document.createElement('li')
  const hamburguerLi = document.createElement('li')
  const pancakesLi = document.createElement('li')
  fritesLi.textContent = 'Frites ....................  5$'
  hamburguerLi.textContent = 'Hamburguer ....................  10$'
  pancakesLi.textContent = 'Pancakes ....................  7$'
  listMenu.appendChild(fritesLi)
  listMenu.appendChild(hamburguerLi)
  listMenu.appendChild(pancakesLi)
  menuContainer.appendChild(listMenu);
};

export const menuListener = () => {
  const menuButton = document.querySelector('.menu');
  menuButton.addEventListener('click', () => {
    content.lastElementChild.remove();
    menuCreation();
  });
};