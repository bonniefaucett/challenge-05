// Display the current day near the top.

$(function () {
  let timeClearEl = $(".time-block");
  let currentDay = dayjs().format("dddd, MMM D, YYYY");
  let currentHour = dayjs().format("H");
  let dayText = $("#currentDay").text(currentDay);

  // Add the event listener waiting on a button click, and set up local storage to save the event input.

  $("button").on("click", function () {
    let timeOfDay = $(this).parent().attr("id");
    let inputText = $(this).siblings(".description").val();
    localStorage.setItem(timeOfDay, inputText);
    savedEventMsg();
  });

  // Compare the real-time current hour at the time of viewing the webpage with the time block on the planner. If in the past, apply the "past" class. If the present hour, apply the "present" class. If in the future, apply the "future" class.

  timeClearEl.each(function () {
    let realTimeHour = parseInt($(this).attr("id").split("hour-")[1]);

    if (realTimeHour < currentHour) {
      $(this).removeClass("future");
      $(this).removeClass("present");
      $(this).addClass("past");
    } else if (realTimeHour === currentHour) {
      $(this).removeClass("past");
      $(this).removeClass("future");
      $(this).addClass("present");
    } else {
      $(this).removeClass("present");
      $(this).removeClass("past");
      $(this).addClass("future");
    }
  });

  // retrieve from local storage & display

  timeClearEl.each(function () {
    let ids = "#" + $(this).attr("id");
    let keyInput = $(this).attr("id");
    $(ids).children().val(localStorage.getItem(keyInput));
  });

  // indicates input was successfully saved 
  
  function init() {
    renderMessage();
    setStyle();
  }
  init();
});