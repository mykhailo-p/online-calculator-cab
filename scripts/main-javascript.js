function calculate() {
    let revenue = parseInt(document.getElementById('revenue').value),
        op_rev = parseInt(document.getElementById('op_rev').value),
        op_exp = parseInt(document.getElementById('op_exp').value),
        amort = parseInt(document.getElementById('amortization').value),
        period = parseInt(document.getElementById('period').value);
    
    let car_value_1 = parseInt(document.getElementById('car_value_1').value),
        car_advance_1 = parseInt(document.getElementById('car_advance_1').value),
        car_maturity_1 = parseInt(document.getElementById('car_maturity_1').value),
        car_price_1 = parseFloat(document.getElementById('car_price_1').value);
    
    let car_1_loan = car_value_1 * ((100 - car_advance_1) / 100) / car_maturity_1,
        car_1_price = car_1_loan * 12 * car_price_1 / 100;

    
    let ebitda = (revenue + amort + op_rev - op_exp) / period;

    alert(ebitda / (car_1_loan + car_1_price) );
}