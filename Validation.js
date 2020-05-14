function validateFormLoanAfford() {

    // This function checks for empty required fields
    // With Netscape focus is placed on empty fields
    // Inputs are hard coded, nothing is passed to it
    // It returns a true or false depending on validity
    var amount = $("#loanAffordAmount").val();
    var payment = $("#loanAffordPayment").val();
    var rate = $("#loanAffordRate").val();
    var months = $("#loanAffordMonths").val();
    var comma = ","
    var temparry = new Array(10)
    var totalLoan = document.getElementById("loanAffordAmount").value;
    console.log(totalLoan);

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
        $("#loanAffordAmount").focus();
        return false;
    }
    if (isNaN(payment)) {
        alert("Payment must be a number!");
        $("#loanAffordPayment").focus();
        return false;
    }
    if (isNaN(rate)) {
        alert("Rate must be a number!");
        $("#loanAffordRate").focus();
        return false;
    }
    if (isNaN(months)) {
        alert("Length of Loan must be a number!");
        $("#loanAffordMonths").focus();
        return false;
    }

    if (((amount != 0) && (amount != "")) &&
((payment != 0) && (payment != ""))) {
        alert("Please clear either the loan payment or the loan amount to continue.");
        $("#loanAffordAmount").focus();
        return false;
    }
    if (((amount == 0) || (amount == "")) &&
((payment == 0) || (payment == ""))) {
        alert("You must select either the loan payment or the loan amount!");
        $("#loanAffordAmount").focus();
        return false;
    }
    if ((rate == 0) || (rate == "")) {
        alert("You must select a loan rate!");
        $("#loanAffordRate").focus();
        return false;
    }
    else {
        rate = rate / 1200;
    }

    if ((months == 0) || (months == "")) {
        alert("You must provide the term of the loan!");
        $("#loanAffordMonths").focus();
        return false;
    }
    else {
        if ($("#loanAffordFrequency").val() == '1') {
            months = months * 12;
        }
    }

    if (payment == 0 || payment == "") {
        $("#loanAffordPayment").val(parseInt(100 * ((amount * (rate / (1 - (Math.pow(1 + rate, -months))))) + .005)) / 100);
    }
    else {
        $("#loanAffordAmount").val(parseInt(100 * ((((Math.pow(1 + rate, -months) * (-payment + (Math.pow(1 + rate, months) * payment)))) / rate) + .005)) / 100);
    }
    return false;
}

function validateFormLoanPayment() {

    // This function checks for empty required fields
    // With Netscape focus is placed on empty fields
    // Inputs are hard coded, nothing is passed to it
    // It returns a true or false depending on validity
    var amount = $("#loanPaymentAmount").val();
    var payment = $("#loanPaymentPayment").val();
    var rate = $("#loanPaymentRate").val();
    var months = $("#loanPaymentMonths").val();
    var comma = ","
    var temparry = new Array(10)

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
    }
    else {
        rate = rate / 1200;
    }

    if ((months == 0) || (months == "")) {
        alert("You must provide the term of the loan!");
        $("#loanPaymentMonths").focus();
        return false;
    }
    else {
        if ($("#loanPaymentFrequency").val() == '1') {
            months = months * 12;
        }
    }

    if (payment == 0 || payment == "") {
        $("#loanPaymentPayment").val(parseInt(100 * ((amount * (rate / (1 - (Math.pow(1 + rate, -months))))) + .005)) / 100);
    }
    else {
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

const resets = document.querySelectorAll('#reset');
const inputs = document.querySelectorAll("input[type='number']");

let clearInputs = function() {
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