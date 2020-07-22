function multipleDepositComputeForm() {
    if (console.log("!!"), !(isNaN($("#multipleDepositMoAdd").val()) || isNaN($("#multipleDepositInterest").val()) || isNaN($("#multipleDepositPayments").val())))
        if ("" != $("#multipleDepositInterest").val())
            if ("" != $("#multipleDepositMoAdd").val())
                if ("" != $("#multipleDepositMoAdd").val()) {
                    var e = parseInt($("#multipleDepositPayments").val().replace(",", "")),
                        t = parseFloat($("#multipleDepositInterest").val().replace(",", "")),
                        a = parseFloat($("#multipleDepositPrincipal").val().replace(",", "")),
                        n = parseFloat($("#multipleDepositMoAdd").val().replace(",", "")),
                        o = t;
                    o = o >= 1 ? t / 100 : t, o /= 12;
                    for (var r = n, l = a, i = 12 * e, s = 0; s < i;) newprin = l + r, l = newprin * o + (l + r), s += 1;
                    $("#multipleDepositFv").text("$" + l.formatMoney(2, ".", ","));
                    var m = l - (s * r + a);
                    $("#multipleDepositTotalint").text("$" + m.formatMoney(2, ".", ","))
                } else alert("Please enter the Years to Accrue.");
    else alert("Please enter the amount to add each month.");
    else alert("Please enter the Interest Rate.")
}

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


//Toggle button
$('.input-field').hide();

$('#customSwitch5').click(function() {
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