const menu = document.querySelector('.menu');

const openMenu = () => {
  console.log('opened menu');
  menu.classList.add('open');
};

const closeMenu = () => {
  console.log('closed menu');
  menu.classList.remove('open');
};
