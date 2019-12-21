//////// Parent Elements ////////
const navbarList = document.querySelector('ul.navbar__menu');
const mainContent = document.querySelector('main');

//////// Section Declaration ////////
const sections = [
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismo. Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.',
  },
  {
    content:
      'Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismo. Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.',
  },
  {
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismo. Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu.',
  },
];

//////// Function Declarations ////////

// Create navbar title
const createNavbarTitle = (text) => {
  const navbarTitle = document.createElement('h1');
  navbarTitle.textContent = text;
  navbarTitle.classList.add('navbar__title');
  navbarList.insertAdjacentElement('beforebegin', navbarTitle);
};

// Create navbar items
let navbarIndex = 1;

const createSection = (section) => {
  // Create elements
  const newSection = document.createElement('section');
  const newTitle = document.createElement('h2');
  const newContent = document.createElement('p');

  // Assign classnames and ids
  newSection.id = `section-${section.number}`;
  newTitle.classList.add('section__title');
  newContent.classList.add('section__content');

  // Build element
  newContent.innerText = section.content;
  newTitle.innerText = section.title;
  newSection.append(newTitle, newContent);

  mainContent.appendChild(newSection);
}

const createNavbarItem = (section) => {
  const navbarItem = document.createElement('li');
  navbarItem.classList.add('navbar__item');
  navbarItem.classList.add(`navbar__item-${section.number}`);
  if (section.number === 1) {
    navbarItem.classList.add('navbar__item--active');
  }
  const navbarText = document.createElement('a');
  navbarText.textContent = section.title;
  navbarText.href = `#section-${section.number}`;
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
  const currentPosition = window.scrollY + 20;

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

//////// Element creation ////////

sections.forEach((section, index) => {
  section.number = index + 1;
  section.title = `Section ${section.number}`;
  createSection(section);
  createNavbarItem(section);
})

createNavbarTitle('Home');
const activeIndicator = createActiveIndicator();

//////// Event listeners ////////

window.addEventListener('scroll', onScroll);
