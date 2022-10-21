const ratingCard = document.querySelector(".rating");
const thanksCard = document.querySelector(".thanks");
const submitBtn = document.getElementById("submit-btn");
const backBtn = document.getElementById("back-btn");
var rated = document.getElementById("rated");
const radioButtons = document.querySelectorAll('input[name="rating"]');
var checker = "";

submitBtn.addEventListener("click", () => {
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            checker = document.getElementById(radioButton.id);
            var selectedRating = document.querySelector('input[name="rating"]:checked').value;
            rated.innerHTML = selectedRating;
            break;
        }
    }
    if (rated.innerHTML) {
        thanksCard.style.display = "block";
        ratingCard.style.display= "none";
        console.log(checker.value);
    }
    else {
        alert("Please select a rating")
    }
})

backBtn.addEventListener("click", () => {
    checker.checked = false;
    rated.innerHTML = "";
    thanksCard.style.display = "none";
    ratingCard.style.display = "block";
})



