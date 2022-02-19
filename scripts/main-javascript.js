function calculate() {
 
    // Calculating loan payments for 1st, 2nd and 3rd loan:

    let loan_payment_app = 0.0,
        loan_amount = 0.0,
        fde = 0,
        dscr = 0;

    if (document.getElementById('car_value_1').value != 0) {
        let loan_payment_1 = (document.getElementById('car_value_1').value *
            ((100 - parseFloat(document.getElementById('car_advance_1').value)) / 100) /
            document.getElementById('car_maturity_1').value) +
            (document.getElementById('car_value_1').value *
            ((100 - parseFloat(document.getElementById('car_advance_1').value)) / 100) *
            document.getElementById('car_price_1').value / 100 / 12);
        
        console.log("Payment for 1st loan is: " + loan_payment_1);
        loan_payment_app += loan_payment_1;
        loan_amount += document.getElementById('car_value_1').value;
    } else {
        console.log("You are not fill 1st loan parametrs");
    }

    if (document.getElementById('car_value_2').value != 0) {
        let loan_payment_2 = (document.getElementById('car_value_2').value *
            ((100 - parseFloat(document.getElementById('car_advance_2').value)) / 100) /
            document.getElementById('car_maturity_2').value) +
            (document.getElementById('car_value_2').value *
            ((100 - parseFloat(document.getElementById('car_advance_2').value)) / 100) *
            document.getElementById('car_price_2').value / 100 / 12);
        
        console.log("Payment for 2nd loan is: " + loan_payment_2);
        loan_payment_app += loan_payment_2;
        loan_amount += document.getElementById('car_value_2').value;
    } else {
        console.log("You are not fill 2nd loan parametrs");
    }

    if (document.getElementById('car_value_3').value != 0) {
        let loan_payment_3 = (document.getElementById('car_value_3').value *
            ((100 - parseFloat(document.getElementById('car_advance_3').value)) / 100) /
            document.getElementById('car_maturity_3').value) +
            (document.getElementById('car_value_3').value *
            ((100 - parseFloat(document.getElementById('car_advance_3').value)) / 100) *
            document.getElementById('car_price_3').value / 100 / 12);
        
        console.log("Payment for 3rd loan is: " + loan_payment_3);
        loan_payment_app += loan_payment_3;
        loan_amount += document.getElementById('car_value_3').value;
    } else {
        console.log("You are not fill 3rd loan parametrs");
    }

    console.log("Payments for new loans is: " + loan_payment_app);

    // Calculating EBITDA parametrs :

    let ebitda = (parseFloat(document.getElementById('revenue').value) + 
        parseFloat(document.getElementById('op_rev').value) + 
        parseFloat(document.getElementById('amortization').value) +
        parseFloat(document.getElementById('cur_exp').value) -
        parseFloat(document.getElementById('op_exp').value) -
        parseFloat(document.getElementById('cur_rev').value)) /
        parseFloat(document.getElementById('period').value)

    console.log("EBITDA is: " + ebitda);

    // Calculating Portfolio size and payments:

    if (document.getElementById('loan_type_1').value == 'None') {
        console.log("First loan of portfolio is empty");
    } else {
        let loan_payment_1 = 0;
        if (document.getElementById('loan_type_1').value == 'Current assets') {
            loan_payment_1 = (document.getElementById('loan_amount_1').value *
                document.getElementById('loan_price_1').value);
            
            loan_payment_app += loan_payment_1;
            loan_amount += document.getElementById('loan_amount_1').value;
            console.log("Payment for 1st portfolio loan is: " + loan_payment_1);
        } else {
            loan_payment_1 = (document.getElementById('loan_amount_1').value *
                ((100 - document.getElementById('loan_price_1').value) / 100)) +
                document.getElementById('loan_amount_1').value /
                document.getElementById('loan_fin_date_1').value;
            loan_payment_app += loan_payment_1;
            loan_amount += document.getElementById('car_value_1').value;
            console.log("Payment for 1st portfolio loan is: " + loan_payment_1);
        }
    }

    if (document.getElementById('loan_type_2').value == 'None') {
        console.log("Second loan of portfolio is empty");
    } else {
        let loan_payment_2 = 0;
        if (document.getElementById('loan_type_2').value == 'Current assets') {
            loan_payment_2 = (document.getElementById('loan_amount_2').value *
                document.getElementById('loan_price_2').value);
            
            loan_payment_app += loan_payment_2;
            loan_amount += document.getElementById('loan_amount_2').value;
            console.log("Payment for 1st portfolio loan is: " + loan_payment_2);
        } else {
            loan_payment_2 = (document.getElementById('loan_amount_2').value *
                document.getElementById('loan_price_2').value) +
                document.getElementById('loan_amount_2').value /
                document.getElementById('loan_fin_date_2').value;
            loan_payment_app += loan_payment_2;
            loan_amount += document.getElementById('car_value_2').value;
            console.log("Payment for 1st portfolio loan is: " + loan_payment_2);
        }
    }

    if (document.getElementById('loan_type_3').value == 'None') {
        console.log("Third loan of portfolio is empty");
    } else {
        let loan_payment_3 = 0;
        if (document.getElementById('loan_type_3').value == 'Current assets') {
            loan_payment_3 = (document.getElementById('loan_amount_3').value *
                document.getElementById('loan_price_3').value);
            
            loan_payment_app += loan_payment_3;
            loan_amount += document.getElementById('car_value_3').value;
            console.log("Payment for 1st portfolio loan is: " + loan_payment_3);
        } else {
            loan_payment_3 = (document.getElementById('loan_amount_3').value *
                document.getElementById('loan_price_3').value) +
                document.getElementById('loan_amount_3').value /
                document.getElementById('loan_fin_date_3').value;
            loan_payment_app += loan_payment_3;
            loan_amount += document.getElementById('car_value_3').value;
            console.log("Payment for 1st portfolio loan is: " + loan_payment_3);
        }
    }

    // Calculating FDE:

    if (loan_amount != 0 && document.getElementById('equity').value != 0) {
        fde = loan_amount / document.getElementById('equity').value * 100;
        console.log("FDE is: " + fde + "%");
    } else {
        console.log("Equity or Loans amount is equal Zero!");
    }

    if (ebitda != 0 && loan_payment_app != 0) {
        dscr = ebitda / loan_payment_app;
        console.log("DSCR is: " + dscr);
    } else {
        console.log("EBITDA or Payment amount is equal Zero!");
    }

    alert("DSCR is: " + dscr.toFixed(2) + " FDE is: " + fde.toFixed(2) + "%");
}