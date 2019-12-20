const navbarList = document.querySelector('ul.navbar__menu');

// Create navbar title
const createNavbarTitle = (text) => {
  const navbarTitle = document.createElement('h1');
  navbarTitle.textContent = text;
  navbarTitle.classList.add('navbar__title');
  navbarList.insertAdjacentElement('beforebegin', navbarTitle);
};

// Create navbar items
let navbarIndex = 1;

const createNavbarItem = (text) => {
  const navbarItem = document.createElement('li');
  navbarItem.classList.add('navbar__item');
  navbarItem.classList.add(
    `navbar__item-${navbarIndex}`
  );
  if (navbarIndex === 1) {
    navbarItem.classList.add('navbar__item--active');
  }
  const navbarText = document.createElement('a');
  navbarText.textContent = text;
  navbarText.href = `#section-${navbarIndex}`;
  navbarText.classList.add('navbar__link');

  navbarItem.appendChild(navbarText);
  navbarList.append(navbarItem);

  navbarIndex++;
};

const createActiveIndicator = () => {
  const activeIndicator = document.createElement('li');
  activeIndicator.classList.add('navbar__indicator');
  activeIndicator.textContent = '';
  navbarList.append(activeIndicator);

  const activeItem = document.querySelector('.navbar__item--active');

  activeIndicator.style.width = `${activeItem.clientWidth}px`;
  activeIndicator.style.left = `${activeItem.offsetLeft}px`;

  return activeIndicator;
};

const updateActiveItem = () => {
  const activeItem = document.querySelector('.navbar__item--active');

  activeIndicator.style.width = `${activeItem.clientWidth}px`;
  activeIndicator.style.left = `${activeItem.offsetLeft}px`;
};

const onScroll = () => {
  const navLinks = document.querySelectorAll('a.navbar__link');
  const currentPosition = window.scrollY;

  for (let i = 0; i < navLinks.length; i++) {
    const section = document.querySelector(navLinks[i].hash);

    if (
      section.offsetTop <= currentPosition &&
      section.offsetTop + section.offsetHeight > currentPosition
    ) {
      navLinks[i].parentElement.classList.add('navbar__item--active');
      updateActiveItem();
    } else {
      navLinks[i].parentElement.classList.remove('navbar__item--active');
    }
  }
};

createNavbarTitle('Home');
createNavbarItem('One');
createNavbarItem('Two');
createNavbarItem('Three');
const activeIndicator = createActiveIndicator();

document.body.addEventListener('click', (event) => {
  if (event.target.classList.contains('navbar__link')) {
    updateActiveItem(event.target);
  }
});

window.addEventListener('scroll', onScroll);
