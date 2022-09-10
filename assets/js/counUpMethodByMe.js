"use strict";

const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () => {
    const target = +counter.getAttribute("data-goal");

    const c = +counter.innerText;

    const increase = target / 500;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increase)}`;
      setTimeout(updateCounter, 13);
      console.log("salam");
    } else {
      counter.innerText = target;
    }
  };
  updateCounter();
});
