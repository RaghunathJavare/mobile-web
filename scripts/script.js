const nav = document.querySelector('.navbar');
const product = document.querySelectorAll('.oppo__product');
const overlay = document.querySelector('.overlay');

// navlink hover effect

//////////////////////////////////////////////////////////////////////////////////////////////
const eventHander = function (e) {
  if (e.target.classList.contains('nav-link')) {
    // navbar
    const link = e.target;
    const siblings = link.closest('.navbar').querySelectorAll('.nav-link');
    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });

    const data = link.closest('.nav-link');
    if (!data) return;

    // add class
    product.forEach(p => p.classList.add('hidden'));

    //   reomove class

    document
      .querySelector(`.product__${data.dataset.tab}`)
      .classList.remove('hidden');
    overlay.classList.remove('hidden');

  }
};
nav.addEventListener('mouseover', eventHander.bind(0.5));
nav.addEventListener('mouseout', eventHander.bind(1));

// overlay hidden
overlay.addEventListener('mouseover', function () {
  overlay.classList.add('hidden');
  product.forEach(p => p.classList.add('hidden'));
});
