nextButton.addEventListener("click", nextPage);

function nextPage() {
  tanyaPage.classList.remove("flex");
  tanyaPage.classList.add("hidden");
  johnPage.classList.remove("hidden");
  johnPage.classList.add("flex");
  nextButton.src = "../images/icon-next-unav.svg";
  nextButton.classList.remove("hover:cursor-pointer");
  previousButton.src = "../images/icon-prev.svg";
  previousButton.classList.add("hover:cursor-pointer");
  previousButton.addEventListener("click", previousPage);
  nextButton.removeEventListener("click");
}

function previousPage() {
  tanyaPage.classList.remove("hidden");
  tanyaPage.classList.add("flex");
  johnPage.classList.remove("flex");
  johnPage.classList.add("hidden");
  nextButton.src = "../images/icon-next.svg";
  nextButton.classList.add("hover:cursor-pointer");
  nextButton.addEventListener("click", nextPage);
  previousButton.src = "../images/icon-prev-unav.svg";
  previousButton.classList.remove("hover:cursor-pointer");
  previousButton.removeEventListener("click");
}
