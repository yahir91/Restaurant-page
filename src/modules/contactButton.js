const content = document.querySelector('#content');

export const contactCreation = () => {
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contactDiv');
  content.appendChild(contactContainer);
  const headingContact = document.createElement('h2');
  const paragraphContact = document.createElement('p');
  headingContact.textContent = 'Contact me in my github';
  paragraphContact.textContent = 'https://github.com/yahir91';
  contactContainer.appendChild(headingContact);
  contactContainer.appendChild(paragraphContact);
};

export const contactListener = () => {
  const contactButton = document.querySelector('.contact');
  contactButton.addEventListener('click', () => {
    content.lastElementChild.remove();
    contactCreation();
  });
};