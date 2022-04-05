window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupInitialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupInitialValues() {
  // let loanAmt = document.getElementById(("loan-amount").value);
  // let time = document.getElementById(("loan-years").value);
  // let rate = document.getElementById(("loan-rate").value);
  // console.log("loanAmt: " + loanAmt + " time: " + time + " rate: " + rate);
  // return [loanAmt, time, rate];
  const values = {amount: 10000, years: 10, rate: 4.2};
  let loanAmt = document.getElementById("loan-amount");
  loanAmt.value = values.amount;
  let timeUI = document.getElementById("loan-years");
  timeUI.value = values.years;
  let rateUI = document.getElementById("loan-rate");
  rateUI.value = values.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currValues = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(currValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const interestRate = (values.rate/100) / 12;
  const totalPayments = Math.floor(values.years * 12);
  // let monthlyPay = (values.amount * interestRate)/(1-Math.pow(1+interestRate), -totalPayments);
  // return monthlyPay.toFixed(2);
  // let monthlyPay = (
  //   (interestRate * values.amount) /
  //   (1 - Math.pow((1 + interestRate), -totalPayments))
  // ).toFixed(2);
  // console.log(monthlyPay);
  return (
    (interestRate * values.amount) /
    (1 - Math.pow((1 + interestRate), -totalPayments))
  ).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyUpdate = document.getElementById('monthly-payment');
  // monthlyUpdate.innerText = calculateMonthlyPayment(setupInitialValues());
  monthlyUpdate.innerText = "$" + monthly;
}
