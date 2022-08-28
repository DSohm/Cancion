
const yesBtn = document.querySelector('#yesBtn');

yesBtn.addEventListener('click',function () {
    alert('Sabia que dirias que si Lu <3 uwu')
});

yesBtn.addEventListener('mouseover',function (event) {
   event.target.style. background = "#08fc31"; 
});
yesBtn.addEventListener('mouseout',function (event) {
    event.target.style. background = "white"; 
 });

  
  
 

const noBtn = document.querySelector('#noBtn');

noBtn.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    noBtn.style.setProperty('top',randomY+'%');
    noBtn.style.setProperty('left',randomX+'%');
    noBtn.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})

