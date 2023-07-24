const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');

let scrollStarted = false;
btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);

function navToggle() {
  btn.classList.toggle('open');
  overlay.classList.toggle('overlay-show');
  menu.classList.toggle('show-menu');
  document.addEventListener('scroll', hamclose);
}
function hamclose(){
  btn.classList.remove('open');
  overlay.classList.remove('overlay-show');
  menu.classList.remove('show-menu');
}

function scrollPage() {
  const scrollPos = window.scrollY;

  if (scrollPos > 100 && !scrollStarted) {
    countUp();
    scrollStarted = true;
  } else if (scrollPos < 100 && scrollStarted) {
    reset();
    scrollStarted = false;
  }
}

function countUp() {
  counters.forEach((counter) => {
    counter.innerText = '0';

    const updateCounter = () => {
      // Get count target
      const target = +counter.getAttribute('data-target');
      // Get current counter value
      const c = +counter.innerText;

      // Create an increment
      const increment = target / 100;

      // If counter is less than target, add increment
      if (c < target) {
        // Round up and set counter value
        counter.innerText = `${Math.ceil(c + increment)}`;

        setTimeout(updateCounter, 75);
      } else {
        counter.innerText = target;
      }
    };

    updateCounter();
  });
}

function reset() {
  counters.forEach((counter) => (counter.innerHTML = '0'));
}
const element=document.querySelector('.navbar')
window.addEventListener('scroll', ()=>{
    if(window.scrollY >= 746){
    element.classList.add("scrolled")
    }
    else if(window.scrollY<746){
      element.classList.remove("scrolled")
    }
})
lastscroll=window.scrollY;
ham=document.querySelector('.hamburger')
window.addEventListener('scroll', ()=>{
  if((lastscroll< window.scrollY) & window.scrollY>150){
    element.classList.add("hidden")
    ham.classList.add('hidden')
  }
  else{
    element.classList.remove('hidden')
    ham.classList.remove('hidden')
  }
  lastscroll=window.scrollY
})