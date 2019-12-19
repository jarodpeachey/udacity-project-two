// const navbar = document.getElementById('navbar');
const navbarList = document.getElementById('navbar__menu');
const navbarTitle = document.createElement('h1');
navbarTitle.textContent = "Site Logo";
navbarTitle.classList.add('navbar__title');
navbarList.insertAdjacentElement("beforebegin", navbarTitle);

let navbarIndex = 1;

const createNavbarItem = (text) => {
  const navbarItem = document.createElement('li');
  navbarItem.classList.add('navbar__item');
  navbarItem.classList.add(`navbar__item-${navbarIndex}`);
  const navbarText = document.createElement('a');
  navbarText.textContent = text;
  navbarText.classList.add('navbar__link');

  navbarItem.appendChild(navbarText);
  navbarList.append(navbarItem)

  navbarIndex++;
}

const createActiveIndicator = () => {
  const navbarItem = document.createElement('li');
  navbarItem.classList.add('navbar__item--active');
  navbarItem.textContent = "";
  navbarList.append(navbarItem);

  return navbarItem;
}

const updateActiveItem = (element) => {
  console.log(activeIndicator);

  activeIndicator.style.width = `${element.clientWidth}px`;
  activeIndicator.style.left = `${element.offsetLeft}px`;
}

createNavbarItem('One');
createNavbarItem('Two');
createNavbarItem('Three');
const activeIndicator = createActiveIndicator();

document.body.addEventListener('click', event => {
  if (event.target.classList.contains('navbar__link')) {
    updateActiveItem(event.target);
  }
});
