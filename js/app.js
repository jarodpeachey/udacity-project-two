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
  navbarTitle.classList.add('navbar__title');
  const navbarText = document.createElement('a');
  navbarText.textContent = text;
  navbarText.href = `#page__header`;
  navbarText.classList.add('navbar__link');

  navbarTitle.appendChild(navbarText);
  navbarList.append(navbarTitle);
};


// Create sections
const createSection = (section) => {
  // Create elements
  const newSection = document.createElement('section');
  const newContainer = document.createElement('div');
  const newTitle = document.createElement('h2');
  const newContent = document.createElement('p');

  // Assign classnames and ids
  newSection.id = `section-${section.number}`;
  newContainer.classList.add('container');
  newTitle.classList.add('section__title');
  newContent.classList.add('section__content');

  // Build element
  newContent.innerText = section.content;
  newTitle.innerText = section.title;
  newContainer.append(newTitle, newContent);
  newSection.appendChild(newContainer);

  // Append element to main content
  mainContent.appendChild(newSection);
};

// Create navbar items
const createNavbarItem = (section) => {
  // Create elements
  const navbarItem = document.createElement('li');
  const navbarText = document.createElement('a');

  // Assign element classnames and attributes
  navbarItem.classList.add('navbar__item');
  navbarItem.classList.add(`navbar__item-${section.number}`);
  navbarText.classList.add('navbar__link');
  navbarText.textContent = section.title;
  navbarText.href = `#section-${section.number}`;

  // Append
  navbarItem.appendChild(navbarText);
  navbarList.append(navbarItem);
};

const createActiveIndicator = () => {
  // Create elements
  const activeIndicator = document.createElement('li');
  // Assign attributes
  activeIndicator.classList.add('navbar__indicator');
  activeIndicator.textContent = '';

  // Append the indicator
  navbarList.append(activeIndicator);

  // Set position of active indicator
  const activeItem = document.querySelector('.navbar__item--active');
  const navbarTitle = document.querySelector('.navbar__title');

  if (!activeItem) {
    activeIndicator.style.left = `${navbarTitle.offsetLeft}px`;
    activeIndicator.style.width = `${navbarTitle.clientWidth}px`;
  } else {
    activeIndicator.style.width = `${activeItem.clientWidth}px`;
    activeIndicator.style.left = `${activeItem.offsetLeft}px`;
  }

  return activeIndicator;
};

// Update active item indicator position and width
const updateActiveItem = () => {
  // Main elements
  const activeItem = document.querySelector('.navbar__item--active');
  const navbarTitle = document.querySelector('.navbar__title');

  // If active navbar item, set width and position equal to that; otherwise, set equal to the Home text width and position
  if (activeItem) {
    activeIndicator.style.width = `${activeItem.clientWidth}px`;
    activeIndicator.style.left = `${activeItem.offsetLeft}px`;
  } else {
    activeIndicator.style.left = `${navbarTitle.offsetLeft}px`;
    activeIndicator.style.width = `${navbarTitle.clientWidth}px`;
  }
};

// Onscroll function
const onScroll = () => {
  // NavLinks array
  const navLinks = document.querySelectorAll('li a.navbar__link');

  // Current position
  const currentPosition = window.scrollY + 20;

  // Hero content
  const hero = document.querySelector('.hero__content');

  // Control hero opacity when scrolled down
  hero.style = `margin-top: ${window.scrollY * 1}px; opacity: ${
    window.scrollY > 200
      ? (hero.clientHeight - window.scrollY + 200) / hero.clientHeight
      : 1
  }`;

  // Check if we are at one of the sections, and update the active item indicator
  for (let i = 0; i < navLinks.length; i++) {
    const section = document.querySelector(navLinks[i].hash);

    if (
      section.offsetTop <= currentPosition &&
      section.offsetTop + section.offsetHeight > currentPosition
    ) {
      navLinks[i].parentElement.classList.add('navbar__item--active');
    } else {
      navLinks[i].parentElement.classList.remove('navbar__item--active');
    }
  }

  // Call update function
  updateActiveItem();
};

//////// Element creation ////////
// Create navbar title
createNavbarTitle('Home');

// Create section and navbar item from each sections array item
sections.forEach((section, index) => {
  section.number = index + 1;
  section.title = `Section ${section.number}`;
  createSection(section);
  createNavbarItem(section);
});

// Create active indicator
const activeIndicator = createActiveIndicator();

//////// Event listeners ////////
window.addEventListener('scroll', onScroll);
