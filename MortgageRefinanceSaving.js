function mortgageRefinanceComputeForm() {
    if ("" != $("#mortgageRefinancePayment").val())
        if ("" != $("#mortgageRefinancePrincipal").val())
            if ("" != $("#mortgageRefinanceIntRate").val())
                if ("" != $("#mortgageRefinanceIntRate2").val())
                    if ("" != $("#mortgageRefinanceNper2").val())
                        if ("" != $("#mortgageRefinanceClosingCost").val())
                            if (parseFloat($("#mortgageRefinanceIntRate2").val()) > parseFloat($("mortgageRefinanceIntRate").val())) alert("You have entered a refinancing rate that is higher than your present rate. The refinancing rate must be lower than your present rate for this calculator to function.");
                            else {
                                var e = 0,
                                    t = 0,
                                    a = parseFloat($("#mortgageRefinancePayment").val()),
                                    n = parseFloat($("#mortgageRefinancePrincipal").val()),
                                    o = 0,
                                    r = 0,
                                    l = 0;
                                (i = parseFloat($("#mortgageRefinanceIntRate").val())) > 1 && (e = i /= 100);
                                var i = i / 12;
                                (s = parseFloat($("#mortgageRefinanceIntRate2").val())) > 1 && (t = s /= 100);
                                for (var s = s / 12, m = 0; n > 0 && (n -= r = a - (o = n * i), r, l += o, !((m += 1) > 600)););
                                $("#mortgageRefinanceOrigInt").text("$" + l.formatMoney(2, ".", ","));
                                for (var u = 1, p = 0; p < 12 * parseInt($("#mortgageRefinanceNper2").val()); p++) u *= 1 + s;
                                var f = parseFloat($("#mortgageRefinancePrincipal").val()) * u * s / (u - 1);
                                $("#mortgageRefinancePayment2").text("$" + f.formatMoney(2, ".", ","));
                                var g = parseFloat($("#mortgageRefinancePayment").val()) - f;
                                $("#mortgageRefinanceMoSave").text("$" + g.formatMoney(2, ".", ","));
                                var c = f * parseInt($("#mortgageRefinanceNper2").val()) * 12 - parseFloat($("#mortgageRefinancePrincipal").val());
                                $("#mortgageRefinanceTotInt2").text("$" + c.formatMoney(2, ".", ","));
                                var y = l - c;
                                $("#mortgageRefinanceIntSave").text("$" + y.formatMoney(2, ".", ",")), $("#mortgageRefinanceCloseMo").text(parseInt(parseFloat($("#mortgageRefinanceClosingCost").val()) / g, 10));
                                var v = y - parseFloat($("#mortgageRefinanceClosingCost").val());
                                $("#mortgageRefinanceNetSave").text("$" + v.formatMoney(2, ".", ",")), $("#mortgageRefinanceSummary").text("If you refinance your current " + (100 * e).formatMoney(3, ".", ",") + "% mortgage to a " + (100 * t).formatMoney(3, ".", ",") + "% mortgage, your monthly payment will drop by " + $("#mortgageRefinanceMoSave").text() + " and you will save " + $("#mortgageRefinanceIntSave").text() + " in interest charges over the life of the mortgage.  However, in order for this refinancing to yield any savings at all you will need to stay in your current home for at least " + $("#mortgageRefinanceCloseMo").text() + " months.  That is how long it will take for your monthly payment savings to offset the closing costs attributable to refinancing.")
                            }
    else alert("Please enter the refinancing closing costs.");
    else alert("Please enter the number of years you are refinancing.");
    else alert("Please enter the annual interest rate you'll be refinancing.");
    else alert("Please enter your mortgage's current annual interest rate.");
    else alert("Please enter your mortgage's current principal balance.");
    else alert("Please enter the amount of your mortgage payment.")
}

//********** MORTGAGE REFINANCE GRAPH ***********

$('.refinanceCalc').on('click', function() {
    var ctx = document.getElementById('refinanceChart').getContext('2d');
    var principal = document.getElementById('mortgageRefinancePrincipal').value; //total loan amount, principal is amount owed on loan for each time period (principal + balance = total)
    var monthly = document.getElementById('mortgageRefinancePayment').value;
    var interest = document.getElementById('mortgageRefinanceIntRate').value;
    var refinanceInt = document.getElementById('mortgageRefinanceIntRate2').value;
    var yearsRefinance = document.getElementById('mortgageRefinanceNper2').value;
    var closingCosts = document.getElementById('mortgageRefinanceClosingCost').value;

    var test = document.getElementById('mortgageRefinancePayment2').innerText;
    var payoffClosing = document.getElementById('mortgageRefinanceCloseMo').value;
    var currentPlanTotalInterest = document.getElementById('mortgageRefinanceOrigInt').value;
    var refinanceTotalInterest = document.getElementById('mortgageRefinanceTotInt2').value;
    var interestSaved = document.getElementById('mortgageRefinanceIntSave').value;
    var netSavings = document.getElementById('mortgageRefinanceNetSave').value;
    console.log('refinance payment: ' + test);
    console.log('closing cost time: ' + payoffClosing);

    var length = new Array();
    var preRefinancePayment = new Array();
    var refinancePaymentArray = new Array();
    var currentPlanTotalIntArray = new Array();
    var refinanceTotalIntArray = new Array();

    for (var i = 0; yearsRefinance > 0; i++) {
        length[i] = yearsRefinance;
        yearsRefinance = yearsRefinance - 1;
        preRefinancePayment[i] = monthly;
        refinancePaymentArray[i] = test;
        currentPlanTotalIntArray[i] = currentPlanTotalInterest;
        refinanceTotalIntArray[i] = refinanceTotalInterest;
    }
    console.log('Length: ' + length);
    console.log('Pre-refinance payment: ' + preRefinancePayment);
    console.log('Refinance payment: ' + refinancePaymentArray);
    console.log('Pre Refinance Interest: ' + currentPlanTotalIntArray);
    console.log('Post Refinance Interest: ' + refinanceTotalIntArray);

    var chart = new Chart(ctx, {
        // The type of chart we want to create
        type: 'line',
        // The data for our dataset
        data: {
            labels: length,
            datasets: [{
                    label: 'Monthly Payment before Refinance',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    fill: false,
                    data: preRefinancePayment
                },
                {
                    label: 'Refinance Payment',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    fill: false,
                    data: refinancePaymentArray
                },
                {
                    label: 'Current Plan Total Interest',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    fill: false,
                    data: currentPlanTotalIntArray
                },
                {
                    label: 'Refinance Plan Total Interest',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    fill: false,
                    data: refinanceTotalIntArray
                }
            ]
        },

        // Configuration options go here
        options: {}
    });
});



//Toggle button
$('.input-field').hide();

$('#customSwitch3').click(function() {
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
