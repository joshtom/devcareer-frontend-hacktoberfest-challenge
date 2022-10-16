const cardWrapper = document.querySelector(".inner-wrapper");
const ratings = document.querySelectorAll('.rating');
const submitBtn = document.querySelector(".submit-btn");
const theChosenOne = document.querySelector(".choice");
const submittedCardWrapper = document.querySelector(".submitted-card-wrapper");

/*
record which rating number was clicked first. Use let variable as this will be constantly reassigned. Note that the variable has no starting value, but we dynamically assign it below
*/

let firstClicked;
// iterate over each rating element and assign an event listener to each. When clicked, run the anon function which retrieves the inner text of the element that was clicked. 
ratings.forEach(item => {
    item.addEventListener('click', function() {
        firstClicked = this.innerText;
        // console.log(firstClicked);
        this.style.backgroundColor = "orange"; // changes background-color to orange as per active state design, but more than one rating li tag can be turned orange 💩
    });
});



submitBtn.addEventListener('click', function() {
    if (firstClicked === undefined) {
    alert("Please assign a rating, then click submit.");
    } else {
        theChosenOne.textContent = firstClicked; // add the chosen number to the span tag with class of 'choice'.
        cardWrapper.style.display = "none";
        submittedCardWrapper.style.display = "block";
    }
});
