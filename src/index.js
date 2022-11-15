import Wishlist from "./wishlist";

console.log("Hello World");

let wishlist = new Wishlist();

let form = document.querySelector("#submitForm");
let makeInput = document.querySelector("#makeInput");
let modelInput = document.querySelector("#modelInput");
let yearInput = document.querySelector("#yearInput");
let makeDisplay = document.querySelector("#car-make");
let modelDisplay = document.querySelector("#car-model");
let yearDisplay = document.querySelector("#car-year");
let removeBtn = document.querySelector("#removeBtn");
let listUl = document.querySelector("#wishListContainer > ul");

form.addEventListener("submit", addCar);

removeBtn.addEventListener("click", removeCar);

function showCarDetails(car) {
    makeDisplay.textContent = car.make;
    modelDisplay.textContent = car.model;
    yearDisplay.textContent = car.year;
    removeBtn.disabled = false;
    removeBtn.setAttribute("date-carId". car.id);
}

function updateDOMList() {
    listUl.innerHTML = "";
    wishlist.list.forEach((car) => {
    let li = document.createElement("li");
    li.textContent = car.model;
    li.addEventListener("click", () => showCarDetails(car));
    listUl.appendChild(li);
    });
}

function addCar(event) {
    event.preventDefault();

    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;

    wishlist.add(make, model, year);

    updateDOMList();

    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
}

function removeCar() {
    let carId = Number(removeBtn.getAttribute("date-carId"));

    wishlist.remove(carId);

    updateDOMList();

    makeDisplay.textContent = ""
    modelDisplay.textContent = ""
    yearDisplay.textContent = ""

    removeBtn.disabled = true;
}