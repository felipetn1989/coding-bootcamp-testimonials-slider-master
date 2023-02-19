nextButton.addEventListener("click", changePage);
previousButton.addEventListener("click", changePage);

function changePage() {
  tanyaPage.classList.toggle("flex");
  tanyaPage.classList.toggle("hidden");
  johnPage.classList.toggle("hidden");
  johnPage.classList.toggle("flex");
  nextButton.src = tanyaPage.classList.contains("flex")
    ? "../images/icon-next.svg"
    : "../images/icon-next-unav.svg";
  nextButton.classList.toggle("hover:cursor-pointer");
  previousButton.src = johnPage.classList.contains("flex")
    ? "../images/icon-prev.svg"
    : "../images/icon-prev-unav.svg";
  previousButton.classList.toggle("hover:cursor-pointer");
}
