
const expandCircle = [
  {
    clipPath: 'circle(20vh at center)',
    offset: 0
  },
  {
    clipPath: 'circle(150vh at center)',
    offset: 1
  }
];

const expandOptions = {
  duration: 1500,      // 2s
  easing: 'ease',      // transition timing
  fill: 'forwards'     // keep the final state
};

const intro = `<div id="intro">
    <h1>HI! Welcome to My Portfolio</h1>
    <p>Explore my projects and feel free to reach out!</p>
    <p>Slide down for more!</p>
    </div>`;


const introClickHandler = (elementId) => {
    const introClick = document.getElementById('intro-click');
    const introductionContent = document.getElementById('introduction-content');

    introClick.addEventListener('click', () => {
        introClick.innerText = "";
        introductionContent.animate(expandCircle, expandOptions).finished.then(()=>{
          introClick.innerHTML = intro;
        });
    }, {once : true});
}

export default introClickHandler;