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

//********** SAVINGS GRAPH ***********

$('.savingsCalc').on('click', function() {
    var ctx = document.getElementById('savingsChart').getContext('2d');
    var initialInvestment = document.getElementById('multiPrincipal');
    var addMonthly = document.getElementById('multiDepositMonthly');
    var annualInt = document.getElementById('multiDepoInt');
    var yearsAccrue = document.getElementById('multiDepoPay');
    var futureVal = document.getElementById('multipleDepositFv');
    var intEarned = document.getElementById('multipleDepositTotalint');

    var initialInvestmentArray = new Array();
    var addMonthlyArray = new Array();
    var annualIntArray = new Array();
    var yearsAccrueArray = new Array();
    var futureValueArray = new Array();
    var interestEarnedArray = new Array();

    for (var i = 0; i < yearsAccrue; i++) {
        initialInvestmentArray[i] = initialInvestment;
        addMonthlyArray[i] = addMonthly;
        annualIntArray[i] = annualInt;
        yearsAccrueArray[i] = yearsAccrue;
        futureValueArray[i] = futureVal;
        interestEarnedArray[i] = intEarned;
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
                    label: 'Initial Investment',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: initialInvestmentArray
                },
                {
                    label: 'Amount to Add Monthly',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: addMonthlyArray
                },
                {
                    label: 'Annual Interest Rate',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: annualIntArray
                },
                {
                    label: 'Future Value',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: futureValueArray
                },
                {
                    label: 'Interest Earned',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: interestEarnedArray
                }
            ]
        },

        // Configuration options go here
        options: {}
    });
});