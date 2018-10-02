// declare ui variables
let UIcalculator = document.querySelector('#calculator'),
  UIbiWeekly = document.querySelector('#biweekly'),
  UIweekly = document.querySelector('#weekly'),
  UIhourlyRate = document.querySelector('#hourly-rate'),
  UIhours = document.querySelector('#hours'),

  // Mileage UI
  UImileageYes = document.querySelector('#mileage-yes'),
  UImileageNo = document.querySelector('#mileage-no'),
  UImileageInputs = document.querySelector('#mileage-inputs'),
  UImileageRate = document.querySelector('#mileage-rate'),
  UImileage = document.querySelector('#mileage'),

  // Phone UI
  UIphone = document.querySelector('#phone'),
  UIphoneInput = document.querySelector('#phone-input'),
  UIphoneYes = document.querySelector('#phone-yes'),
  UIphoneNo = document.querySelector('#phone-no'),

  // Tax UI
  UItaxInput = document.querySelector('#tax-input'),
  UItax = document.querySelector('#tax'),
  UItaxYes = document.querySelector('#tax-yes'),
  UItaxNo = document.querySelector('#tax-no'),
  UIbtnSubmit = document.querySelector('#btn-submit'),
  // UI Alert Msg
  UIalert = document.createElement('div');


// Mileage event listener
UImileageYes.addEventListener('click', function (e) {
  UImileageInputs.classList.remove('d-none');
});
UImileageNo.addEventListener('click', function (e) {
  UImileageRate.value = '';
  UImileage.value = '';
  UImileageInputs.classList.add('d-none');
  if (UIalert) {
    UIalert.parentNode.removeChild(UIalert);
    UImileageRate.classList.remove('border', 'border-danger');
    UImileage.classList.remove('border', 'border-danger');
  }
});

// Phone event listener
UIphoneYes.addEventListener('click', function (e) {
  UIphoneInput.classList.remove('d-none');
});
UIphoneNo.addEventListener('click', function (e) {
  UIphone.value = '';
  UIphoneInput.classList.add('d-none');
});

// Tax event listener
UItaxYes.addEventListener('click', function (e) {
  UItaxInput.classList.remove('d-none');
});
UItaxNo.addEventListener('click', function (e) {
  UItax.value = '';
  UItaxInput.classList.add('d-none');
});

// Submit button event listener
UIbtnSubmit.addEventListener('click', function (e) {
  // check for biweekly or weekly
  if (UIbiWeekly.checked === false && UIweekly.checked === false) {
    alert('Please choose whether your checks are biweekly or weekly')
  } else if (UIbiWeekly.checked === true) {
    console.log('BiWeekly Checked');
    calculateBiWeeklyCheck();
  } else {
    console.log('Calculate Weekly Pay');
    calculateWeeklyCheck();
  }

  e.preventDefault();
});

function calculateBiWeeklyCheck() {
  let hours = parseInt(UIhours.value);
  let rate = parseInt(UIhourlyRate.value);
  let totalPay;
  let overtimeRate;
  let overtimeHours;
  let overtimePay;
  let pay;
  // Check for overtime
  if (hours <= 80) {
    pay = hours * rate;
    overtimePay = 0;
  } else if (hours > 80) {
    pay = 80 * rate;
    overtimeHours = hours - 80;
    overtimeRate = rate * 1.5;
    overtimePay = overtimeRate * overtimeHours;
  }

  // Check for mileage pay
  checkMileagePay();

  totalPay = pay + overtimePay;

  // Display Pay:
  let UItotalPay = document.querySelection('#totalPay');

  UItotalPay.setAttribute('placeholder', totalPay);

}

function checkMileagePay() {
  if (UImileageYes.checked === true && UImileageRate.value !== '' && UImileage.value !== '') {
    let mileageRate = parseInt(UImileageRate.value);
    let mileage = parseInt(UImileage.value);
    let mileagePay = mileageRate * mileage;

    return mileagePay;

  } else if (UImileageYes.checked === true && UImileageRate.value === '' && UImileage.value === '') {
    // Throw input error
    UImileageRate.classList.add('border', 'border-danger');
    UImileage.classList.add('border', 'border-danger');
    console.log(UImileageRate);
    // Create error message
    UIalert.classList.add('alert', 'alert-danger');
    UIalert.setAttribute('role', 'alert');
    UIalert.innerHTML = `Please input your mileage information!`;
    UIcalculator.insertBefore(UIalert, UImileageInputs);
    // Remove error on input
    UImileageInputs.addEventListener('input', function () {
      UIalert.parentNode.removeChild(UIalert);
      UImileageRate.classList.remove('border', 'border-danger');
      UImileage.classList.remove('border', 'border-danger');
    });
  }
}

function showResults(totalPay) {

}