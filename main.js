const addNewMonth = document.querySelector(".add-new-month");
const addReportBtn = document.querySelector(".add-report");
const cumulativeHeader = document.querySelector(".cumulative-header");
const reportBody = document.querySelector(".report-body");
const absentMessage = document.querySelector(".absent-message");
const newMonthForm = document.querySelector(".new-month-form");
const updateReportForm = document.querySelector(".update-report-form");
const closeNewMonthModalBtn = document.querySelector( ".close-new-month-modal" );
const monthForm = document.querySelector( "#month-form" );
const yearForm = document.querySelector( "#year-form" );
const closeNewMonthModalXBtn = document.querySelector(
  ".close-new-month-modal-x"
);
const closeAddReportModalBtn = document.querySelector(
  ".close-add-report-modal"
);
const closeAddReportModalXBtn = document.querySelector(
  ".close-add-report-modal-x"
);

function main() {
  addNewMonth.addEventListener("click", stopAnimation);
  newMonthForm.addEventListener("submit", showReportForm);
  updateReportForm.addEventListener("submit", updateReport);
  closeNewMonthModalBtn.addEventListener("click", closeNewMonthModal);
  closeNewMonthModalXBtn.addEventListener("click", closeNewMonthModal);
  closeAddReportModalBtn.addEventListener("click", closeAddReportModal);
  closeAddReportModalXBtn.addEventListener( "click", closeAddReportModal );
  // monthForm.addEventListener( "change", clearOnChange );
  // yearForm.addEventListener( "change", clearOnChange );
}
main();

// show report form
function stopAnimation() {
  addNewMonth.classList.remove("swing");
}

function showReportForm(e) {
  addReportBtn.classList.remove("display-none");
  cumulativeHeader.classList.remove("display-none");
  reportBody.classList.remove("display-none");
  absentMessage.classList.add("display-none");
  updateMonthAndYear();
  clearOnChange();
  e.preventDefault();
}

function updateMonthAndYear() {
  const reportMonth = document.querySelector(".report-month");
  const reportYear = document.querySelector(".report-year");
  reportMonth.textContent = monthForm.value;
  reportYear.textContent = yearForm.value;
}

function updateReport(e) {
  updateRecord();
  e.preventDefault();
}

function updateRecord() {
  const hoursValue = document.querySelector(".hours-value");
  const placementsValue = document.querySelector(".placements-value");
  const videosValue = document.querySelector(".videos-value");
  const returnVisitsValue = document.querySelector(".return-visits-value");

  const hoursForm = document.querySelector("#hours-form");
  const placementsForm = document.querySelector("#placements-form");
  const videosForm = document.querySelector("#videos-form");
  const returnVisitsForm = document.querySelector("#return-visits-form");
  // hoursValue.textContent = hoursForm.value;
  if (hoursValue.textContent === "") {
    hoursValue.textContent = hoursForm.value;
  } else {
    let initial = parseFloat(hoursValue.textContent);
    hoursValue.textContent = (initial + parseFloat(hoursForm.value)).toString();
  }
  // placementsValue.textContent = placementsForm.value;
  if (placementsValue.textContent === "") {
    placementsValue.textContent = placementsForm.value;
  } else {
    let initial = parseFloat(placementsValue.textContent);
    placementsValue.textContent = (
      initial + parseFloat(placementsForm.value)
    ).toString();
  }
  // videosValue.textContent = videosForm.value;
  if (videosValue.textContent === "") {
    videosValue.textContent = videosForm.value;
  } else {
    let initial = parseFloat(videosValue.textContent);
    videosValue.textContent = (
      initial + parseFloat(videosForm.value)
    ).toString();
  }
  // returnVisitsValue.textContent = returnVisitsForm.value;
  if (returnVisitsValue.textContent === "") {
    returnVisitsValue.textContent = returnVisitsForm.value;
  } else {
    let initial = parseFloat(returnVisitsValue.textContent);
    returnVisitsValue.textContent = (
      initial + parseFloat(returnVisitsForm.value)
    ).toString();
  }
}

function closeNewMonthModal() {
  const monthForm = document.querySelector("#month-form");
  const yearForm = document.querySelector("#year-form");
  monthForm.value = "";
  yearForm.value = "";
}

function closeAddReportModal() {
  document.querySelector("#date-form").value = "";
  document.querySelector("#hours-form").value = "";
  document.querySelector("#placements-form").value = "";
  document.querySelector("#videos-form").value = "";
  document.querySelector("#return-visits-form").value = "";
}

function clearOnChange () {
  const hoursValue = document.querySelector( ".hours-value" );
  const placementsValue = document.querySelector( ".placements-value" );
  const videosValue = document.querySelector( ".videos-value" );
  const returnVisitsValue = document.querySelector( ".return-visits-value" );

  hoursValue.textContent = "";
  placementsValue.textContent = "";
  videosValue.textContent = "";
  returnVisitsValue.textContent = "";
}
