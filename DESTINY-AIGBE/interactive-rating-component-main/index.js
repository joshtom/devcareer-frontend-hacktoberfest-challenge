function handleInp(input) {
  let id = localStorage.getItem("num");
  document.getElementById(id).classList.remove("active");
  input.classList.add("active");
  localStorage.setItem("num", input.innerText);
}

function handleSubmit() {
  document.getElementById("main").style.display = "none";
  document.getElementById("thank-you").style.display = "block";
  document.getElementById("res").innerText = localStorage.getItem("num");
}
