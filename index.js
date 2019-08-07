window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sounds");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector('.visual');
  const colors = [
    "#60d394",
    "#d36060",
    "rgb(235, 233, 119)",
    "rgb(90, 159, 224)",
    "#a29cf3",
    "#83f388"
  ];
  //lets get going with sound
  pads.forEach((pads, index) => {
    pads.addEventListener('click', function(){
      sounds[index].currentTime = 0;
      sounds[index].play();

      createBubbles(index);
    });
  });

  //create a function that makes bubbles
  const createBubbles = (index) => {
    const bubble = document.createElement("div");
    visual.appendChild(bubble);
    bubble.style.backgroundColor = colors[index];
    bubble.style.animation = 'jump 1s ease';
    bubble.addEventListener('animationend', function() {
      visual.removeChild(this);
    
    });
  };
});
