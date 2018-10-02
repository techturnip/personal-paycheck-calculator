let UIbiWeekly = document.getElementById('biweekly');
let UIhourlyRate = document.getElementById('hourly-rate');
let UIhours = document.getElementById('hours');
let UItotalPay = document.getElementById('total-pay');
let UIpay = document.getElementById('pay');
let UIsubmit = document.getElementById('btn-submit');

let hourlyRate;
let hours;
let totalPay;
let pay;
let overtimeRate;
let overtimeHours;
let overtimePay;

// Check for overtime

UIsubmit.addEventListener('click', function (e) {
  if (UIbiWeekly.checked === true) {
    hourlyRate = UIhourlyRate.value;
    console.log('hourlyRate: ', hourlyRate);
    hours = UIhours.value;
    console.log('hours: ', hours);
    overtimeRate = hourlyRate * 1.5;
    console.log('overtimeRate: ', overtimeRate);

    if (hours <= 80) {
      totalPay = hours * hourlyRate;
      pay = hours * hourlyRate;
    } else if (hours > 80) {
      overtimeHours = hours - 80;
      console.log('overtimeHours: ', overtimeHours);
      overtimePay = overtimeHours * overtimeRate;
      console.log('overtimePay: ', overtimePay);
      pay = 80 * hourlyRate;
      totalPay = pay + overtimePay;
    }
  } else {
    hourlyRate = UIhourlyRate.value;
    console.log('hourlyRate: ', hourlyRate);
    hours = UIhours.value;
    console.log('hours: ', hours);
    overtimeRate = hourlyRate * 1.5;
    console.log('overtimeRate: ', overtimeRate);

    if (hours <= 40) {
      totalPay = hours * hourlyRate;
      pay = hours * hourlyRate;
    } else if (hours > 40) {
      overtimeHours = hours - 40;
      console.log('overtimeHours: ', overtimeHours);
      overtimePay = overtimeHours * overtimeRate;
      console.log('overtimePay: ', overtimePay);
      pay = 40 * hourlyRate;
      totalPay = pay + overtimePay;
    }
  }


  // display results
  UItotalPay.setAttribute('placeholder', `$${totalPay}`);
  UIpay.setAttribute('placeholder', `$${pay}`);

  // prevent default behavior
  e.preventDefault();
});