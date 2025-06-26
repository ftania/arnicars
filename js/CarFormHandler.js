class CarFormHandler {
  constructor(formSelector) {
    this.form = document.querySelector(formSelector);
    this.nextBtn = this.form.querySelector(".next-btn");
    this.submitBtn = this.form.querySelector(".submit-btn");
    this.requestBtn = this.form.querySelector(".request-btn");
    this.steps = this.form.querySelectorAll(".form-step");
    this.summaryList = this.form.querySelector(".summary-list");

    this.dots = document.querySelectorAll(".form-step-indicator .dot");
    this.formContainer = document.querySelector(".form-container");
    this.formHeading = this.formContainer.querySelector("h2");
    this.indicator = this.formContainer.querySelector(".form-step-indicator");
    this.hr = this.formContainer.querySelector("hr");
    this.carImage = document.querySelector(".car-image-section");
    this.carText = document.querySelector(".car-image-section .text");
    this.carRating = document.querySelector(".car-image-section .rating");
    this.afterForm = document.querySelector(".content-after-form");
    this.footer = document.querySelector("footer");

    this.addEventListeners();
  }

  addEventListeners() {
    this.nextBtn.addEventListener("click", () => this.goToStep(1));
    this.submitBtn.addEventListener("click", (e) => this.handleSubmit(e));
    this.requestBtn.addEventListener("click", () => this.handleRequest());
  }

  goToStep(stepIndex) {
    this.steps.forEach((step) => step.classList.remove("active"));
    this.steps[stepIndex].classList.add("active");
    if (this.dots[stepIndex]) this.dots[stepIndex].classList.add("active");
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(this.form);
    const data = Object.fromEntries(formData.entries());

    this.summaryList.innerHTML = `
      <li><span><img src="img/icons/car.svg" alt="money icon"></span> <span class="to-down"> ${
        data["brand"] || ""
      } ${data["model"] || ""}</span></li>
      <li><span><img src="img/icons/calendar.svg" alt="calendar icon"></span> ${
        data["year"] || ""
      } року</li>
      <li class="li-speedometer"><span><img src="img/icons/speedometer.svg" alt="speedometer icon"></span><span class="to-up">${
        data["mileage"] || ""
      } км</span></li>
      <li><span><img src="img/icons/drive.svg" alt="drive icon"></span> ${
        data["drive"] || ""
      }</li>
      <li><span class="to-down"><img src="img/icons/gear-box.svg" alt="gear box icon"></span> ${
        data["gearbox"] || ""
      }</li>
      <li class="li-fuel"><span><img src="img/icons/fuel.svg" alt="fuel icon"></span> ${
        data["engine"] || ""
      } ${data["fuel"] || ""}</li>
    `;

    this.goToStep(2);
    this.hideExtraContent();
    this.formContainer.classList.add("up");
    this.carImage.classList.add("background-change");
  }

  handleRequest() {
    const message = document.createElement("p");
    message.textContent =
      "Дякуємо, наш консультант зв’яжеться з Вами найближчим часом";
    message.classList.add("thank-you-message");
    this.requestBtn.replaceWith(message);
  }

  hideExtraContent() {
    this.formHeading.style.display = "none";
    this.indicator.style.display = "none";
    this.hr.style.display = "none";
    this.footer.style.display = "none";
    this.carText.style.display = "none";
    this.carRating.style.display = "none";
    this.afterForm.style.display = "none";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  new CarFormHandler("#car-form");
});
