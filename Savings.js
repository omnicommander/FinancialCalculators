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