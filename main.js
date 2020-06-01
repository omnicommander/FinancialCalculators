function resetDesiredPayment() {
	document.getElementById('loanAffordAmount').value = 0;
	document.getElementById('loanAffordMonths').value = 0;
	document.getElementById('loanAffordRate').value = 0;
	document.getElementById('loanAffordPayment').value = 0;
	document.getElementById('lengthLoan').innerHTML = '0 months/years';
	document.getElementById('APR').innerHTML = '0%';
	document.getElementById('dPayment').innerHTML = '$0'
}

function resetLoanPayment() {
	document.getElementById('loanPaymentAmount').value = 0;
	document.getElementById('loanPaymentMonths').value = 0;
	document.getElementById('loanPaymentRate').value = 0;
	document.getElementById('loanPaymentPayment').value = 0;
	document.getElementById('loanLength').innerHTML = '0 months/years';
	document.getElementById('paymentRate').innerHTML = '0%';
	document.getElementById('loanAmount').innerHTML = '$0'
}

function drawGraph() {
	console.log("here");
	var ctx = document.getElementById('myChart').getContext('2d');
	var sumLoan = document.getElementById("loanAffordAmount").value;            //total loan amount, principal is amount owed on loan for each time period (principal + balance = total)
	var apr = document.getElementById("loanAffordRate").value / 100;
	var lengthLoan = document.getElementById("loanAffordMonths").value;
	var desiredPayment = document.getElementById("loanAffordPayment").value;

	var breakdownInterest = (apr / lengthLoan) * desiredPayment;                            //yearly interest on loan
	var totalInterest = breakdownInterest * lengthLoan;
	var monthlyPayment = (breakdownInterest / 12) + (sumLoan / lengthLoan);            //wrong formula
	var test = 3;
	var interestArray = new Array();
	var totalInterestArray = new Array();
	var remainingBalance = new Array();
	var lengthArray = new Array();
	var monthlyArray = new Array();
	var total = new Array();
	for (var i = 0; sumLoan > 0; i++) {
		lengthArray[i] = i;
		interestArray[i] = totalInterest;
		totalInterestArray[i] = totalInterest * i;
		remainingBalance[i] = (sumLoan - monthlyPayment);
		sumLoan = remainingBalance[i];
		lengthArray[i] = lengthArray[i] + 1;
		monthlyArray[i] = monthlyPayment;
	}

	var chart = new Chart(ctx, {
		// The type of chart we want to create
		type: 'line',
		// The data for our dataset
		data: {
			labels: lengthArray,
			datasets: [
				{
					label: 'Total Interest Paid',
					backgroundColor: 'rgb(30, 205, 59)',
					borderColor: 'rgb(30, 205, 59)',
					fill: false,
					data: totalInterestArray
				},
				{
					label: 'Monthly Interest',
					backgroundColor: 'rgb(255, 99, 132)',
					borderColor: 'rgb(255, 99, 132)',
					fill: false,
					data: interestArray
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
				},
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
}

function mortagageScript() {
	var ctx = document.getElementById('mortgageChart').getContext('2d');
	var principal = document.getElementById("mortgageRefinancePrincipal");            //total loan amount, principal is amount owed on loan for each time period (principal + balance = total)
	var monthly = document.getElementById("mortgageRefinancePayment");
	var interest = document.getElementById("mortgageRefinanceRate");
	var refinanceInt = document.getElementById("mortageRefinanceIntRate2");
	var yearsRefinance = document.getElementById("mortgageRefinanceNper2");
	var closingCosts = document.getElementById("mortgageRefinanceClosingCost");

	var refinancePayment = document.getElementById("mortgageRefinancePayment2");
	var payoffClosing = document.getElementById("mortgageRefinanceCloseMo");
	var currentPlanTotalInterest = document.getElementById("mortgageRefinanceOrigInt");
	var refinanceTotalInterest = document.getElementById("mortgageRefinanceTotInt2");
	var interestSaved = document.getElementById("mortgageRefinanceIntSave");
	var netSavings = document.getElementById("mortgageRefinanceNetSave");

	var chart = new Chart(ctx, {
		// The type of chart we want to create
		type: 'line',
		// The data for our dataset
		data: {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
			datasets: [{
				label: 'Loan Calculator',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: [0, 10, 5, 2, 20, 30, 45]
			}]
		},

		// Configuration options go here
		options: {}
	});
}

function mortagageScript2() {
		var ctx = document.getElementById('mortgageChart').getContext('2d');
		var mortPrincipal = document.getElementById("mortgagePaymentPrincipal");
		var monthly = document.getElementById("mortgagePaymentPayment");
		var interest = document.getElementById("mortgagePaymentIntRate");
		var totalInterest = document.getElementById("mortgagePaymentOrigInt");
		var biweeklyInterest = document.getElementById("mortgagePaymentBiwkInt");
		var totalIntSavings = document.getElementById("mortgagePaymentIntSave");
		var temp = mortPrincipal * interest;
		var prinicpal = new Array();
		var monthlyPayment = new Array();
		var monthlyIntArray = new Array();
		var totalInterestArray = new Array();
		var totalInterestSavingsArray = new Array();
		console.log("Mortage Principal: " + mortPrincipal);
		console.log("Monthly Payment: " + monthly);
		console.log("Interest: " + interest);
									for (var i = 0; i <= 12; i++) {
			prinicpal[i] = mortPrincipal;
										monthlyPayment[i] = monthly;
										monthlyIntArray[i] = interest;
										totalInterestArray[i] = temp;

									}
									var chart = new Chart(ctx, {
			// The type of chart we want to create
			type: 'line',
										// The data for our dataset
										data: {
			labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
											datasets: [{
			label: 'Mortage Principal',
												backgroundColor: 'rgb(255, 99, 132)',
												borderColor: 'rgb(255, 99, 132)',
												data: principal
											},
											{
			label: 'Monthly Payment',
												backgroundColor: 'rgb(255, 99, 132)',
												borderColor: 'rgb(255, 99, 132)',
												data: monthlyPayment
											},
											{
			label: 'Monthly Interest',
												backgroundColor: 'rgb(255, 99, 132)',
												borderColor: 'rgb(255, 99, 132)',
												data: monthlyPayment
											},
											{
			label: 'Total Interest',
												backgroundColor: 'rgb(255, 99, 132)',
												borderColor: 'rgb(255, 99, 132)',
												data: totalInterestArray
											},
											{
			label: 'Bi-Weekly Interest Due',
												backgroundColor: 'rgb(255, 99, 132)',
												borderColor: 'rgb(255, 99, 132)',
												data: biweeklyInterest
											},
											{
			label: 'Total Interest Savings',
												backgroundColor: 'rgb(255, 99, 132)',
												borderColor: 'rgb(255, 99, 132)',
												data: totalInterestSavingsArray
											}
											]
										},

										// Configuration options go here
										options: {}
									});
}