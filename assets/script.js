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
    let today = moment().format("dddd, MMMM D, YYYY");

    if (moment().isAfter(moment().hour(timeBlock[0]))) {
      colorBox.addClass("past");
  }
  else if (moment().isBefore(moment().hour(timeBlock[0]))) {
      colorBox.addClass("future");
  }
  else if (moment().isSame(moment().hour(timeBlock[0]))) {
      colorBox.addClass("present");
  }   
});

  // retrieve from local storage & display

  timeClearEl.each(function () {
    let ids = "#" + $(this).attr("id");
    let keyInput = $(this).attr("id");
    $(ids).children().val(localStorage.getItem(keyInput));
  });
  
  function init() {
    renderMessage();
    setStyle();
  }
  init();
});