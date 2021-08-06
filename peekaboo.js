"use strict";

const closed = document.querySelector(".closed");
const open = document.querySelector(".open");

// add event listener
closed.addEventListener("click", () => {
  if (open.classList.contains("open")) {
    open.classList.add("active");
    closed.classList.remove("active");
  }
});

open.addEventListener("click", () => {
  if (closed.classList.contains("closed")) {
    closed.classList.add("active");
    open.classList.remove("active");
  }
});
