// statistics numbers section
let statisticsNumbers = document.querySelectorAll(".statistics .box .number");
let statisticsSection = document.querySelector(".statistics");
let started = false;

window.onscroll = () => {
  if (window.scrollY >= statisticsSection.offsetTop - 200) {
    if (!started)
      statisticsNumbers.forEach((element) => startCounting(element));
    started = true;
  }
};

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
};
