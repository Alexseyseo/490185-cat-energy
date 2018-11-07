var navBox = document.querySelector('.page-header__navigation');
var navToggle = document.querySelector('.page-header__nav-toggle');

navBox.classList.add('page-header__navigation--closed');
navToggle.classList.remove('page-header__nav-toggle--nojs');
navToggle.classList.add('page-header__nav-toggle--closed');


navToggle.addEventListener('click', function() {
  if (navBox.classList.contains('page-header__navigation--closed')) {
    navBox.classList.remove('page-header__navigation--closed');
    navToggle.classList.remove('page-header__nav-toggle--closed');
    navToggle.classList.add('page-header__nav-toggle--opened');
  } else {
    navBox.classList.add('page-header__navigation--closed');
    navToggle.classList.remove('page-header__nav-toggle--opened');
    navToggle.classList.add('page-header__nav-toggle--closed');
  }
});
