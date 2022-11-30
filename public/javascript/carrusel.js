const $articleCarrusel = document.querySelectorAll('.article_carrusel');
const $pointsCarrusel = document.querySelector('.list_points').children;

let counterCarrusel = 0;

try {
  setInterval(() => {
    for (let index = 0; index < $articleCarrusel.length; index++) {
      if (index == counterCarrusel) {
        $articleCarrusel[counterCarrusel].classList.add('open');
        $pointsCarrusel[counterCarrusel].classList.add('open');

      } else {
        $articleCarrusel[index].classList.remove('open');
        $pointsCarrusel[index].classList.remove('open');
      }
    }
    counterCarrusel++;

    if (counterCarrusel > 2) counterCarrusel = 0;
  }, 5000);
} catch (error) {
  console.log(error)
}