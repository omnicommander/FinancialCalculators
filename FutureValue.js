function singleDepositComputeForm() {
    if (!(isNaN($("#singleDepositPrincipal").val()) || isNaN($("#singleDepositInterest").val()) || isNaN($("#singleDepositPayments").val()))) {
        var e = parseInt($("#singleDepositPayments").val().replace(",", "")),
            t = parseFloat($("#singleDepositInterest").val().replace(",", "")),
            a = parseFloat($("#singleDepositPrincipal").val().replace(",", ""));
        if (1 > e > 480) alert("Years to Accrue must be between 1 and 480");
        else if (.001 > t > 99) alert("Interest rate must be between 0.001 and 99");
        else if (1 > a > 1e7) alert("Principal must be between 1 and 10000000");
        else {
            var n = t;
            n /= 100, n /= 12;
            for (var o = a, r = 0; r < 12 * e; r++) o = o * n + 1 * o;
            var l = o;
            $("#singleDepositFv").text("$" + o.formatMoney(2, ".", ","));
            var i = l - a;
            $("#singleDepositTotalint").text("$" + i.formatMoney(2, ".", ","))
        }
    }
}

//********** FUTURE VALUE GRAPH ***********/

$('.futureValCalc').on('click', function() {
    var ctx = document.getElementById('futureChart').getContext('2d');
    var deposit = document.getElementById("singleDepoPrincipal").value;
    var annInt = document.getElementById("singleDepoInt").value;
    var yearAccrue = document.getElementById("singleDepoPay").value;
    var futureValue = document.getElementById("singleDepositFv").value;
    var interestEarned = document.getElementById("singleDepositTotalint").value;
    var depositArray = new Array();
    var annIntArray = new Array();
    var accrueArray = new Array();
    var futValArray = new Array();
    var intEarnedArray = new Array();
    for (var i = 0; i < yearsAccrue; i++) {
        depositArray[i] = deposit;
        accrueArray[i] = yearAccrue;
        futValArray[i] = futureValue;
        intEarnedArray[i] = interestEarned;
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
                    label: 'Deposit Amount',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: depositArray
                },
                {
                    label: 'Years to Accrue',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: accrueArray
                },
                {
                    label: 'Future Value of Investment',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: futValArray
                },
                {
                    label: 'Total Interest Earned',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: intEarnedArray
                }
            ]
        },

        // Configuration options go here
        options: {}
    });
});



//Toggle Button
$('.input-field').hide();

$('#customSwitch6').click(function() {
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