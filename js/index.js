const nextBtn = document.querySelector(".next-btn");
const submitBtn = document.querySelector(".submit-btn");
const step1 = document.querySelector(".step-1");
const step2 = document.querySelector(".step-2");
const step3 = document.querySelector(".step-3");
const dots = document.querySelectorAll(".dot");

const formContainer = document.querySelector(".form-container");
const formHeading = document.querySelector(".form-container h2");
const indicator = document.querySelector(".form-step-indicator");
const hr = document.querySelector(".form-container hr");
const carText = document.querySelector(".car-image-section .text");
const carRating = document.querySelector(".car-image-section .rating");
const footer = document.querySelector("footer");

nextBtn.addEventListener("click", () => {
  step1.classList.remove("active");
  step2.classList.add("active");
  dots[1].classList.add("active");
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const selects = document.querySelectorAll("select");
  const inputs = document.querySelectorAll("input");

  const data = [
    selects[0].value,
    selects[1].value,
    selects[2].value,
    selects[3].value,
    selects[4].value,
    selects[5].value,
    selects[6].value,
    selects[7].value,
    inputs[0].value,
    inputs[1].value,
  ];

  const summaryList = document.querySelector(".summary-list");
  summaryList.innerHTML = `
    <li><span><img src="img/icons/car.svg" alt="money icon"></span> ${data[0]} ${data[2]}</li>
    <li><span><img src="img/icons/calendar.svg" alt="calendar icon"></span> ${data[1]} року</li>
    <li><span><img src="img/icons/speedometer.svg" alt="speedometer icon"></span>${data[7]} км</li>
    <li><span><img src="img/icons/drive.svg" alt="drive icon"></span> ${data[5]}</li>
    <li><span><img src="img/icons/gear-box.svg" alt="gear box icon"></span> ${data[6]}</li>
    <li><span><img src="img/icons/fuel.svg" alt="fuel icon"></span> ${data[3]} ${data[4]}</li>
  `;

  step2.classList.remove("active");
  step3.classList.add("active");

  formHeading.style.display = "none";
  indicator.style.display = "none";
  hr.style.display = "none";
  footer.style.display = "none";
  carText.style.display = "none";
  carRating.style.display = "none";
  formContainer.classList.add("up");
});

const requestBtn = document.querySelector(".request-btn");

requestBtn.addEventListener("click", () => {
  const thankYouMessage = document.createElement("p");
  thankYouMessage.textContent =
    "Дякуємо, наш консультант зв’яжеться з Вами найближчим часом";
  thankYouMessage.classList.add("thank-you-message");
  requestBtn.replaceWith(thankYouMessage);
});
