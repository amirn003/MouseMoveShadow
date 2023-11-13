const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');


function shadow(e) {
  const width = hero.offsetWidth;
  const height = hero.offsetHeight;
  const walk = 100; // 100px

  let {offsetX: x, offsetY: y} = e;
  if (x !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;

  }

  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));
  console.log(xWalk, yWalk);

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 rgba(255, 0, 255, 0.7),
    ${xWalk * -1}px ${yWalk}px 0 rgba(0, 255, 255, 0.7),
    ${xWalk}px ${yWalk * -1}px 0 rgba(125, 0, 125, 0.7),
    ${xWalk * -1}px ${yWalk * -1}px 0 rgba(0, 125, 125, 0.7)
  `;
}

hero.addEventListener('mousemove', shadow);
