function bmi(){
    var h = document.getElementById('height').value;
    var w = document.getElementById('weight').value;
    var bmi = w / (h /100 * h/ 100);
    var total = bmi.toFixed(2);
    var unhealthy = 24
    var healthy = 21
    if( bmi > unhealthy){
        document.getElementById('result').innerHTML = "Your BMI is " + total+ " and you are Overweight";
        document.getElementById('transform').innerHTML = 'If You Wanted To Get Fit <a href="/fit.html" id="link">Click Here</a>' ;
    } else if( bmi < healthy) {
        document.getElementById('result').innerHTML = "Your BMI is " + total+ " and you are Skinny";
        document.getElementById('transform').innerHTML = 'If You Wanted To Get Fit <a href="/fit2.html" id="link">Click Here</a>' ;
    } else {
        document.getElementById('result').innerHTML = "Your BMI is " + total+ " and you are Fit";
        document.getElementById('transform').innerHTML = 'Congrates You Are Fit';
    }
}