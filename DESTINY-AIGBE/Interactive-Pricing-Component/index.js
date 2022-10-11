const slider = document.getElementById("slider");
const toggle = document.getElementById("switch");
let checked = false;
const checkbox = document.querySelector("input[type=checkbox]");
checkbox.addEventListener("change", function () {
  checked = this.checked;
  change();
  console.log(this.checked);
});
const change = () => {
  let value = slider.value * 1000;
  let views;
  console.log(checked);
  let price;
  console.log(value, slider.max);
  if (value === 1000000) {
    console.log("okkk");
    views = 1000000;
    price = 36;
  } else if (value >= 500000) {
    price = 24;
    views = 500000;
    console.log("okkk");
  } else if (value >= 100000) {
    price = 16;
    console.log("okkk");
    views = 100000;
  } else if (value >= 50000) {
    price = 12;
    console.log("okkk");
    views = 50000;
  } else if (value >= 10000) {
    console.log("okkk");
    price = 8;
    views = 10000;
  } else {
    price = 8;
    views = 10000;
  }
  let filled = (slider.value / slider.max) * 100;
  document.getElementById("views").innerHTML = `${
    views < 1000000 ? views / 1000 : 1
  }${views < 1000000 ? "K" : "M"} PAGEVIEWS`;
  console.log(views);
  document.getElementById(
    screen.width > 375 ? "price" : "mobile-price"
  ).innerHTML = `$${checked ? price / 4 : price}.00`;
  if (slider.value == slider.min) return;
  document.getElementById(
    "slider"
  ).style.background = `linear-gradient(to right, hsl(174, 77%, 80%) ${filled}%, hsl(224, 65%, 95%) ${filled}%, hsl(224, 65%, 95%) 100%)`;
  console.log(
    `linear-gradient(to right, #50299c, #7a00ff ${filled}%, #d3edff ${filled}%, #dee1e2 100%)`
  );
};
slider.addEventListener("input", change);

if (screen.width <= 375) {
  document.getElementById(
    "mobile-amount"
  ).innerHTML = `<strong id="mobile-price">$16.00</strong>
            <p>/ month</p>`;
  document.getElementById(
    "colored"
  ).innerHTML = `<p style="color: hsl(15, 100%, 70%)">-25%</p>`;
}
