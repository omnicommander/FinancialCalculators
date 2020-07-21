

function validateFormLoanPayment() {

    // This function checks for empty required fields
    // With Netscape focus is placed on empty fields
    // Inputs are hard coded, nothing is passed to it
    // It returns a true or false depending on validity
    var payment = ($("#loanPaymentPayment").val());
    var amount = ($("#loanPaymentAmount").val() + $("#loanPaymentAmountInput").val());
    var rate = ($("#loanPaymentRate").val() + $("#loanPaymentRateInput").val());
    var months = $("#loanPaymentMonths").val() + $("#loanPaymentMonthsInput").val();

    console.log("amount:"+amount);
    console.log("payment:"+payment);
    console.log("amount:"+amount);
    console.log("amount:"+amount);

    var comma = ","
    var temparry = new Array(10)
    var totalLoan = document.getElementById("loanAffordAmount").value;
    console.log(totalLoan);
    console.log("amount " + amount)
    console.log("payment " + payment)
    console.log("rate " + rate)
    console.log("months " + months)

    temparray = amount.split(comma)
    amount = temparray.join("")
    temparray = payment.split(comma)
    payment = temparray.join("")
    temparray = rate.split(comma)
    rate = temparray.join("")
    temparray = months.split(comma)
    months = temparray.join("")


    if (isNaN(amount)) {
        alert("Amount must be a number!");
        $("#loanPaymentAmount").focus();
        return false;
    }
    if (isNaN(payment)) {
        alert("Payment must be a number!");
        $("#loanPaymentPayment").focus();
        return false;
    }
    if (isNaN(rate)) {
        alert("Rate must be a number!");
        $("#loanPaymentRate").focus();
        return false;
    }
    if (isNaN(months)) {
        alert("Length of Loan must be a number!");
        $("#loanPaymentMonths").focus();
        return false;
    }

    if (((amount != 0) && (amount != "")) &&
        ((payment != 0) && (payment != ""))) {
        alert("Please clear either the loan payment or the loan amount to continue.");
        $("#loanPaymentAmount").focus();
        return false;
    }
    if (((amount == 0) || (amount == "")) &&
        ((payment == 0) || (payment == ""))) {
        alert("You must select either the loan payment or the loan amount!");
        $("#loanPaymentAmount").focus();
        return false;
    }
    if ((rate == 0) || (rate == "")) {
        alert("You must select a loan rate!");
        $("#loanPaymentRate").focus();
        return false;
    } else {
        rate = rate / 1200;
    }

    if ((months == 0) || (months == "")) {
        alert("You must provide the term of the loan!");
        $("#loanPaymentMonths").focus();
        return false;
    } else {
        if ($("#loanPaymentFrequency").val() == '1') {
            months = months * 12;
        }
    }

    if (payment == 0 || payment == "") {
        $("#loanPaymentPayment").val(parseInt(100 * ((amount * (rate / (1 - (Math.pow(1 + rate, -months))))) + .005)) / 100);
    } else {
        $("#loanPaymentAmount").val(parseInt(100 * ((((Math.pow(1 + rate, -months) * (-payment + (Math.pow(1 + rate, months) * payment)))) / rate) + .005)) / 100);
    }
    return false;
}

// $("input#reset").on(click, function () {
//     console.log('Resetting...');
//     $("input[type='number']").each(function() {
//         $(this).val("");
//         console.log('Resetting...');
//     });
// });



resets = document.querySelectorAll('#reset');
inputs = document.querySelectorAll("input[type='number']");

clearInputs = function() {
    inputs.forEach(function(input) {
        input.value = '';
    });
};

resets.forEach(function(reset) {
        reset.addEventListener('click', clearInputs);
    })
    // var test = document.getElementById("test").val;
    // console.log("test: " + test);
    // var slider = document.getElementById("myRange").value;
    // console.log("slider: " + slider);
    // // var slider = document.getElementById("myRange").value();
    // var output = document.getElementById("demo");
    // output.innerHTML = slider.value; // Display the default slider value
    // // var count = function() {
    // //     output.innerHTML = this.value;    
    // // };

// // Update the current slider value (each time you drag the slider handle)
// slider.oninput = function() {
//   output.innerHTML = this.value;
// }



//********** PAYMENT GRAPH ***************
$('.loanPayCalc').on('click', function() {
    console.log('here');
    var ctx = document.getElementById('paymentChart').getContext('2d');
    var totalLoan = document.getElementById('loanPaymentAmount').value; //total loan amount, principal is amount owed on loan for each time period (principal + balance = total)
    var apr = document.getElementById('loanPaymentRate').value / 100;
    var lengthLoan = document.getElementById('loanPaymentMonths').value;
    var payment = document.getElementById('loanPaymentPayment').value;
    var temp = totalLoan;
    var actualTotal = payment * lengthLoan;
    console.log('OVERALL TOTAL: ' + actualTotal);

    var breakdownInterest = apr / lengthLoan * totalLoan; //yearly interest on loan
    var totalInterest = breakdownInterest * lengthLoan;
    var monthlyPayment = breakdownInterest / 12 + totalLoan / lengthLoan; //wrong formula
    console.log('Monthly Interest: ' + breakdownInterest);
    console.log('Monthly Payment: ' + monthlyPayment);
    console.log('Total Interest on Loan: ' + totalInterest);
    console.log('Yearly Interest: ' + breakdownInterest);
    console.log('Total Loan: ' + totalLoan);
    console.log('APR: ' + apr);
    console.log('Loan Length: ' + lengthLoan);
    var interestArray = new Array();
    var totalInterestArray = new Array();
    var remainingBalance = new Array();
    var monthlyArray = new Array();
    var overallPaymentArray = new Array();
    var lengthArray = new Array();

    for (var i = 0; temp > 0; i++) {
        interestArray[i] = breakdownInterest;
        lengthArray[i] = i;
        totalInterestArray[i] = totalInterest;
        remainingBalance[i] = temp - monthlyPayment;
        temp = remainingBalance[i];
        monthlyArray[i] = payment;
        overallPaymentArray[i] = actualTotal;
    }
    console.log('Interest Array: ' + interestArray);
    console.log('Remaining Balance: ' + remainingBalance);
    //var balance = totalLoan - principal;
    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: lengthArray,
            datasets: [{
                    label: 'Monthly Interest',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    pointColor: '#da3e2f',
                    strokeColor: '#da3e2f',
                    fill: false,
                    data: interestArray
                },
                {
                    label: 'Total Interest',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    fill: false,
                    data: totalInterestArray
                },
                {
                    label: 'Overall Payment',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    fill: false,
                    data: overallPaymentArray
                },
                {
                    label: 'Monthly Payment',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    fill: false,
                    data: monthlyArray
                },
                {
                    label: 'Remaining Balance',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    fill: false,
                    data: remainingBalance
                }
            ]
        },

        // Configuration options go here
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        suggestedMin: 50,
                        suggestedMax: 100
                    }
                }]
            }
        }
    });
});






//Toggle Button
$('.input-field').hide();

$('#customSwitch2').click(function() {
    if ($(this).is(':checked')) {
        console.log('switch again');
        $('.payment-slider').hide();
        $('.input-field').show();
    } else {
        console.log('switch');
        $('.payment-slider').show();
        $('.input-field').hide();
    }
});


//reset fields
function resetLoanPayment() {
    document.getElementById('loanPaymentAmount').value = 0;
    document.getElementById('loanPaymentMonths').value = 0;
    document.getElementById('loanPaymentRate').value = 0;
    document.getElementById('loanPaymentPayment').value = 0;
    document.getElementById('loanLength').innerHTML = '0 months/years';
    document.getElementById('paymentRate').innerHTML = '0%';
    document.getElementById('loanAmount').innerHTML = '$0';
}
