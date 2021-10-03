function compute() // Function to calculate interest earned over the specified period or raises an alert if principal is 0 or less
{
    var principal = document.getElementById("principal").value;
    if (principal > 0) {
        var rate = document.getElementById("rate").value;
        var years= document.getElementById("years").value;
        var interest = (principal * (rate / 100) * years).toFixed(2); // Round value to 2 decimal points for currency representation
        // var interest = principal * (rate / 100) * years;
	var year = new Date().getFullYear()+parseInt(years);
        document.getElementById("result").innerHTML="\<strong\>If</strong> you deposit \<mark\>"+principal+"\</mark\>,\<br\>\<strong\>at\</strong\> an interest rate of \<mark\>"+rate+"%\</mark\>.\<br\>\<strong\>You\</strong\> will recieve an amount of \<mark\>"+interest+"\</mark\>,\<br\>\<strong\>in\</strong\> the year of \<mark\>"+year+"\</mark\>.";
    }
    else {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;    
    }
    return true
}
function updateRate() // Function to clear previous calculation and display rate selected
{
    clearResult();
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerHTML=rateval+"%";
}
function clearResult() // Function to clear previous calculation
{
    document.getElementById("result").innerHTML="";
}