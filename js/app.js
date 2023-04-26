// Events countdown timer
let countdownDate = new Date("Dec 31, 2023 23:59:59").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDifference = countdownDate - dateNow;

  let days = Math.floor(dateDifference / (1000 * 60 * 60 * 24));
  let hours = Math.floor(
    (dateDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  let minutes = Math.floor((dateDifference % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((dateDifference % (1000 * 60)) / 1000);

  document.querySelector(".events .days").innerHTML =
    days < 10 ? `0${days}` : days;
  document.querySelector(".events .hours").innerHTML =
    hours < 10 ? `0${hours}` : hours;
  document.querySelector(".events .minutes").innerHTML =
    minutes < 10 ? `0${minutes}` : minutes;
  document.querySelector(".events .seconds").innerHTML =
    seconds < 10 ? `0${seconds}` : seconds;

  if (dateDifference < 0) clearInterval(counter);
}, 1000);

// statistics numbers section
let statisticsNumbers = document.querySelectorAll(".statistics .box .number");
let statisticsSection = document.querySelector(".statistics");
let started = false;

function startCounting(element) {
  let goal = element.dataset.goal;
  let count = setInterval(() => {
    if (isNaN(element.textContent)) {
      let parsedInt = parseInt(element.textContent);
      parsedInt++;
      element.textContent = parsedInt + "K";
      if (element.textContent === goal + "K") clearInterval(count);
    } else {
      element.textContent++;
      if (element.textContent === goal) clearInterval(count);
    }
  }, 2000 / goal);
}

// skills progress section
let ourSkillsSection = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".our-skills .progress span");

window.onscroll = () => {
  if (window.scrollY >= ourSkillsSection.offsetTop - 100) {
    progressSpans.forEach(
      (element) => (element.style.width = element.dataset.width)
    );
  }

  if (window.scrollY >= statisticsSection.offsetTop - 200) {
    if (!started)
      statisticsNumbers.forEach((element) => startCounting(element));
    started = true;
  }
};
