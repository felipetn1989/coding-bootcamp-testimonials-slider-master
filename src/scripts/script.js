let isNextButtonActive = true;

function changePage(event) {
  const clickedButton = event.target;

  if (
    (isNextButtonActive && clickedButton === previousButton) ||
    (!isNextButtonActive && clickedButton === nextButton)
  ) {
    return;
  }

  isNextButtonActive = !isNextButtonActive;
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

nextButton.addEventListener("click", changePage);
previousButton.addEventListener("click", changePage);
