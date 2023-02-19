/*As the page is loaded, the nextButton is the available one (since we are on page 1 of the testimonals). Therefore I create a boolean named isNextButtonActive 
to be equal to true whenever nextButton is active (able to be clicked on). If it is false, whe are on page 2 and the previousButton is the available one */

let isNextButtonActive = true;

//Next we add the event listeners to both buttons, invoking the function changePage whenever they are clicked on

nextButton.addEventListener("click", changePage);
previousButton.addEventListener("click", changePage);

/* This is the function invoked by the click events. It has one parameter, event, which represents the event that triggered the function (in this case the event is the mouse click on any of the buttons */

function changePage(event) {
  const clickedButton =
    event.target; /*event.target refers to the target element of the click event (in this code, it is one of the buttons, and this is stored in the clickedButton variable, representing which of the buttons we clicked on) */

  /* Next, the code checks two conditions. If the nextButton is active and we try to click on the previous button (the inactive one in this case), the function will simply return without doing anything. The same happens if previousButton is active (nextButton inactive) and we try to click on nextButton */

  if (
    (isNextButtonActive && clickedButton === previousButton) ||
    (!isNextButtonActive && clickedButton === nextButton)
  ) {
    return;
  }

  /* If we click on the current active button, the function is allowed to proceed and do the appropriate  chages to display the correct page, change the icons color and cursor */

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
