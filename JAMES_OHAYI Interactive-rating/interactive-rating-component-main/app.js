var submitButton = document.getElementById('rate-btn');
var numberSelectors = document.querySelectorAll('.number-container');
var thanksContainer = document.querySelector('.thanks-container');
var ratingContainer = document.querySelector('.rating-container');
var attributionSection = document.querySelector('.attribution');
var clicksIndicator = document.getElementById('clicks-indicator');
var clicks = document.querySelectorAll('.num');
var xBar = document.getElementById('x-bar');





submitButton.addEventListener('click', function(){
    thanksContainer.classList.remove('hidden');
    ratingContainer.style.display = 'none';
    attributionSection.style.display = 'none';
 
})

clicks.forEach(click=> {
    click.addEventListener('click', function(){
      clicksIndicator.innerHTML = click.innerHTML;
    })
});

xBar.addEventListener('click', function(){
  thanksContainer.classList.add('hidden');
     ratingContainer.style.display = 'block';
});