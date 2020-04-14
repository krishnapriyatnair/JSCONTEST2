function BMI()
{
var weigh=parseInt(document.getElementById("weight").value);
var high=parseInt(document.getElementById("height").value);
var bmi=(weigh/(high*high));
document.getElementById("result").style.border = "thick solid #0000FF";
document.getElementById("BMIResult").innerHTML="BMI RESULT";
document.getElementById("BMI").innerHTML ="The Calulated BMI is "+ bmi ;

if(bmi<18.5)
{
  
    document.getElementById("status").innerHTML =" Underweight"
    document.getElementById("status").style.color= "blue" ;
      
}
else if(bmi>18.5 && bmi<24.9)
{
    document.getElementById("status").innerHTML =" Healthy"
    document.getElementById("status").style.color= "green" ;
 }
  else if(bmi>24.9 && bmi<29.9)
{
    document.getElementById("status").innerHTML =" Overweight"
    document.getElementById("status").style.color= "brown" ;
 }
else
{
    document.getElementById("status").innerHTML =" Obese"
    document.getElementById("status").style.color= "red" ;

}


}