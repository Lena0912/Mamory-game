const items = [
  { src: 'image/bank-app.jpg', id: 1 },
  { src: 'image/cashless-payment.jpg', id: 2 },
  { src: 'image/imgsmartphone-in-the-hand.jpg', id: 3 },
  { src: 'image/imgsmatrphone-screens.jpg', id: 4 },
  { src: 'image/online-courses.jpg', id: 5 },
  { src: 'image/organic-food.jpg', id: 6 },
  { src: 'image/screen-illustration.jpg', id: 7 },
  { src: 'image/taxi-service.jpg', id: 8 },
];

const images = [...items, ...items]

const btn = document.getElementById('btn-start-game');
const gameContainer = document.getElementById('game-container');

let selectedImg = null;
let isSecondChoice = false;

btn.addEventListener('click', () => {
  images.forEach((item, index) => {
    const img = document.createElement('div');
    img.style.backgroundImage = `url(${item.src})`;
    img.id = item.id;
    img.classList.add('img');
    img.tabIndex = index;
    gameContainer.appendChild(img);

    img.addEventListener('click', () => {
      if (selectedImg && selectedImg !== img && isSecondChoice) {
        if (selectedImg.style.backgroundImage === img.style.backgroundImage) {
          img.style.display = 'none';
          selectedImg.style.display = 'none';
        }
        selectedImg = null;
        isSecondChoice = false;
      } else {
        selectedImg = img;
        isSecondChoice = true;
        }
        const allImages = document.getElementsByClassName('img');
        const isWon = Array.from(allImages).every(img => img.style.display === 'none');
        if (isWon) {
            heading.textContent = 'Super! Wygrałeś !!!';
        }
    });
  });
});
