// burger action
const burgerBtn     = document.querySelector('.burger');
const lineBtnTop    = document.querySelector('.burger-top');
const lineBtnCenter = document.querySelector('.burger-center');
const lineBtnBottom = document.querySelector('.burger-bottom');
const burgerMenu    = document.querySelector('.burger-menu');
const navLinks      = document.querySelectorAll('.nav__link');
const navList       = [];  
let delay = 0;

for (let i=0; i<navLinks.length; i++) {
  navList.push(document.createElement('a'));
  navList[i].href = navLinks[i].href;
  navList[i].classList.add('burger-menu__link');
  navList[i].style.animationDelay = `${delay}ms`;
  navList[i].textContent = navLinks[i].textContent;
  delay+= 200;
}

burgerBtn.addEventListener('click', startBurger);
navList.forEach((link) => {
  link.addEventListener('click', () => {
    burgerMenu.classList.remove('burger-menu--active');
    removeChildrenElem(burgerMenu, navList)
    burgerBtnToggle()
  } )
})


function startBurger() {
  burgerBtnToggle();
  if (burgerMenu.className.includes('burger-menu--active')) {
    burgerMenu.classList.remove('burger-menu--active');
    removeChildrenElem(burgerMenu, navList);
  } else {

    burgerMenu.classList.add('burger-menu--active');
    addChildrenElem(burgerMenu,navList); 
  }
}

function addChildrenElem(obj,node) {
  node.forEach((elem) => {
    obj.appendChild(elem);
  })

}

function removeChildrenElem(obj,node) {
  node.forEach((elem) => {
    obj.removeChild(elem);
  })
}

function burgerBtnToggle() {
  lineBtnCenter.classList.toggle('burger--active-center');
  lineBtnTop.classList.toggle('burger--active-top');
  lineBtnBottom.classList.toggle('burger--active-bottom');
}

function addElementlistener() {
  for (let el of navList) {
    console.log(el)
    el.addEventListener('click', () => {
      if (burgerMenu.className.includes('burger-menu--active')) {
        burgerMenu.classList.remove('burger-menu--active');
        removeChildrenElem(burgerMenu, navLinks)
        burgerBtnToggle();
      }
    } )
  }
}
