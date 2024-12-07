const moonButton = document.querySelector(".moon-container");

moonButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");

  if (document.body.classList.contains("dark-theme")) {
    moonButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
  } else {
    moonButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
  }
});

const homeBtn = document.querySelector(".home-btn");
const resumeBtn = document.querySelector(".resume-btn");
const workBtn = document.querySelector(".work-btn");
const contactBtn = document.querySelector(".contact-btn");

const homePage = document.querySelector(".home-page");
const resumePage = document.querySelector(".resume-page");
const workPage = document.querySelector(".work-page");
const contactPage = document.querySelector(".contact-page");

homeBtn.addEventListener("click", () => {
  homePage.classList.remove("hide");
  workPage.classList.add("hide");
  resumePage.classList.add("hide");
  contactPage.classList.add("hide");

  homeBtn.classList.add("btn");
  workBtn.classList.remove("btn");
  contactBtn.classList.remove("btn");
  resumeBtn.classList.remove("btn");
});

resumeBtn.addEventListener("click", () => {
  resumePage.classList.remove("hide");
  homePage.classList.add("hide");
  workPage.classList.add("hide");
  contactPage.classList.add("hide");

  resumeBtn.classList.add("btn");
  workBtn.classList.remove("btn");
  contactBtn.classList.remove("btn");
  homeBtn.classList.remove("btn");
});

workBtn.addEventListener("click", () => {
  workPage.classList.remove("hide");
  homePage.classList.add("hide");
  resumePage.classList.add("hide");
  contactPage.classList.add("hide");

  workBtn.classList.add("btn");
  contactBtn.classList.remove("btn");
  homeBtn.classList.remove("btn");
  resumeBtn.classList.remove("btn");
});

contactBtn.addEventListener("click", () => {
  contactPage.classList.remove("hide");
  homePage.classList.add("hide");
  resumePage.classList.add("hide");
  workPage.classList.add("hide");

  contactBtn.classList.add("btn");
  homeBtn.classList.remove("btn");
  resumeBtn.classList.remove("btn");
  workBtn.classList.remove("btn");
});
