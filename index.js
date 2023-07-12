let years_string = document.getElementById("years");
let months_string = document.getElementById("months");
let days_string = document.getElementById("days");
const input_day = document.querySelector("input[name=day]");
const input_month = document.querySelector("input[name=month]");
const input_year = document.querySelector("input[name=year ]");
let newDate;

function calculateAge() {
  let date_1 = new Date(newDate.year, newDate.month -1, newDate.day);
  let date_2 = new Date();
  let timeDiff = Math.abs(date_2 - date_1);
  let milsecPerDy = 24 * 60 * 60 * 1000;

  let calc_year = Math.floor(timeDiff / (365.25 * milsecPerDy));

  let calc_mth = Math.floor(
    (timeDiff % (365.25 * milsecPerDy)) / (30.4375 * milsecPerDy)
  );

  let calc_day = Math.floor((timeDiff % (30.4375 * milsecPerDy)) / milsecPerDy);

  days_string.innerHTML = calc_day;
  months_string.innerHTML = calc_mth + 1;
  years_string.innerHTML = calc_year;
}

function getVal() {
  newDate = {
    year: input_year.value,
    month: input_month.value,
    day: input_day.value,
  };
  return newDate;
}
