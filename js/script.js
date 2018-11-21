//function changeSign(input){
//if(calculator.display.value.substring(0,1)=="-")
//}
//calculator.display.value=calculator.display.value.substring(1,calculator.display.value.length)
//calculator.display.value==calculator.display.value
    
    //else
        //calculator.display.value="-"+calculator.display.value
//}    

function sin()
{
    calculator.display.value = Math.sin(calculator.display.value);
}   

function cos(){
    calculator.display.value = Math.cos(calculator.display.value);
}

function tan()
{
    
    calculator.display.value = Math.tan(calculator.display.value);
}

var elMsg = document.getElementById('result');



function button1()
{
document.getElementById('screen').value+='1';    
    
}

var but_one = document.getElementById("but_one");
but_one.addEventListener('click',button1,false);

function button2()
{
document.getElementById('screen').value+='2';    
    
}

var but_two = document.getElementById("but_two");
but_two.addEventListener('click',button2,false);

function button3()
{
document.getElementById('screen').value+='3';    
    
}

var but_three = document.getElementById("but_three");
but_three.addEventListener('click',button3,false);

function button4()
{
document.getElementById('screen').value+='4';    
    
}

var but_four = document.getElementById("but_four");
but_four.addEventListener('click',button4,false);


function button5()
{
    document.getElementById('screen').value += '5'; 
}


var but_five = document.getElementById("but_five");
but_five.addEventListener('click',button5,false);

function button6()
{
    document.getElementById('screen').value += '6'; 
}


var but_six = document.getElementById("but_six");
but_six.addEventListener('click',button6,false);



function button7()
{
    document.getElementById('screen').value += '7'; 
}


var but_seven = document.getElementById("but_seven");
but_seven.addEventListener('click',button7,false);

function button8()
{
    document.getElementById('screen').value+='8';
    
}

var but_eight=document.getElementById("but_eight");
but_eight.addEventListener('click',button8,false);


function button9()
{
    document.getElementById('screen').value+='9';
    
}

var but_nine=document.getElementById("but_nine");
but_nine.addEventListener('click',button9,false);








/*function dis(x){
 if(x=1||x=2||x=3||x=4||x=5||x=6||x=7||x=8||x=9||x=0||x='('||x=')'){
     
calculator.display.value=calculator.display.value=x;
     
 } 
else{
    if(calculator.display.value.charAt(calculator.display.value.length-1)==x){}
    else{
        if(calculator.display.value.charAt(calculator.display.value.length-1)=='*'||)calculator.display.value.charAt(calculator.display.value.length-1)=='/'||calculator.display.value(calculator.display.value.length-1)=='+'||calculator.display.value.charAt(calculator.display.value.length-1)=='-'||calculator.display.value.charAt(calculator.display.value.length-1)=='.'){
            
        calculator.display.value=calculator.display.value.slice(0,calculator.display.value.length-1);    
        
        }
        
        calculator.display.value=calculator.display.value+x;
        
        
    }
       
}

}

*/
















