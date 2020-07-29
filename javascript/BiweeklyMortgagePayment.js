//Biweekly

function mortgagePaymentcomputeForm() {
    if ("" != $("#mortgagePaymentPayment").val())
        if ("" != $("#mortgagePaymentPrincipal").val())
            if ("" != $("#mortgagePaymentIntRate").val()) {
                var e = parseFloat($("#mortgagePaymentPayment").val()),
                    t = parseFloat($("#mortgagePaymentPayment").val()) / 2,
                    a = parseFloat($("#mortgagePaymentPrincipal").val()),
                    n = a,
                    o = 0,
                    r = 0,
                    l = 0,
                    i = 0,
                    s = 0,
                    m = 0,
                    u = parseFloat($("#mortgagePaymentIntRate").val());
                u > 1 && (u /= 100);
                for (var p = u / 12, f = u / 26, g = 0, c = 0; a > 0 && (a -= l = e - (o = a * p), l, s += o, !((g += 1) > 600)););
                for ($("#mortgagePaymentOrigInt").text("$" + s.formatMoney(2, ".", ",")); n > 0 && (n -= i = t - (r = n * f), i, m += r, c += 1, !(g > 600)););
                $("#mortgagePaymentBiwkInt").text("$" + m.formatMoney(2, ".", ","));
                var y = s - m;
                $("#mortgagePaymentIntSave").text("$" + y.formatMoney(2, ".", ",")), $("#mortgagePaymentTime").text("By paying bi-weekly, you are adding a 13th payment to your annual number of payments, and splitting it up between 26 bi-weekly payments. By paying an extra $" + parseFloat(e / 26).formatMoney(2, ".", ",") + " every two weeks, you will pay off your mortgage in " + parseInt(c / 26 * 12, 10) + " months instead of the current " + g + " months, and save $" + parseFloat(s - m).formatMoney(2, ".", ",") + " in mortgage interest in the process.")
            } else alert("Please enter your mortgage's annual interest rate.");
    else alert("Please enter your mortgage's current principal balance.");
    else alert("Please enter the amount of your mortgage payment.")
}



//********** BIWEEKLY GRAPH ***********/

$('.biweeklyCalc').on('click', function() {
    var ctx = document.getElementById('biweeklyChart').getContext('2d');
    var mortPrincipal = document.getElementById('mortPayPrinc').value;
    var mortMonthlyPayment = document.getElementById('mortPayPay').value;
    var mortIntRate = document.getElementById('mortPayIntRate').value;
    var currentTotalInterest = document.getElementById('mortgagePaymentOrigInt').value;
    var biweeklyTotalInterest = document.getElementById('mortgagePaymentBiwkInt').value;
    var biweeklyIntSavings = document.getElementById('mortgagePaymentIntSave').value;

    var currentIntArray = new Array();
    var biweeklyIntArray = new Array();
    var biweeklySavingsArray = new Array();

    for (var i = 0; i < 12; i++) {
        currentIntArray[i] = currentTotalInterest;
        biweeklyIntArray[i] = biweeklyTotalInterest;
        biweeklySavingsArray[i] = biweeklyIntSavings;
    }

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: [
                'January',
                'February',
                'March',
                'April',
                'May',
                'June',
                'July',
                'August',
                'September',
                'October',
                'November',
                'December'
            ],
            datasets: [{
                    label: 'Current Total Interest',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: currentIntArray
                },
                {
                    label: 'Biweekly Total Interest',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: biweeklyIntArray
                },
                {
                    label: 'Savings with Biweekly Interest',
                    backgroundColor: 'rgb(30, 205, 59)',
                    borderColor: 'rgb(30, 205, 59)',
                    data: biweeklySavingsArray
                }
            ]
        },

        // Configuration options go here
        options: {}
    });
});





//Toggle button
$('.input-field').hide();

$('#customSwitch4').click(function() {
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
function resetBiWeeklyMortgage() {
    console.log("clicked yo")
    document.getElementById('mortgagePaymentPrincipal').value = 0;
    document.getElementById('mortgagePaymentPayment').value = 0;
    document.getElementById('mortgagePaymentIntRate').value = 0;
    document.getElementById('mortPayPrinc').innerHTML = '$0';
    document.getElementById('mortPayPay').innerHTML = '$0';
    document.getElementById('mortPayIntRate').innerHTML = '0%';
}











