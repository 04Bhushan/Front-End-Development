var a=5;
var b='5';

if (a===b)
{
    console.log("True");//it will satisfy this condition coz it isn't strictly true
}

else
{
    console.log("false");// it will satisfy when we use "===" operator which checks the condition strictly try once
}


function myfunction(x,y)
{
    console.log(x+y) //call this fuction in console
}

//customizing function with loops

function customizing(x,y,z)
{
    for(i=x;i<y;i++)
    {
        console.log(i + "Hello");
        if(i==z)
        {
            console.log("We have made it.")
            continue;
        }
    }
}

var somedata=[10,30,46,24,58,12];
var newdata=somedata.sort();
console.log("Data is in sorted order.");
console.log(newdata);
var newdata1=somedata.reverse();
console.log("Data is in reverse order.");
console.log(newdata1);
var newdata2=somedata.join();
console.log("Datatype of data are changed to strings");
console.log(newdata2);


var phrase="This is a simple phrase";
console.log(phrase.length);//23
console.log(phrase.toUpperCase());//converts every character to uppercase
console.log(phrase.split(" ")); //splits every word of string into arrays of string.
console.log(phrase.indexOf("simple"));// diplays starting index of that word, if that word isn't found then returns -1 
console.log(phrase.lastIndexOf("simple"));// diplays last index of that word
console.log(phrase.slice(2,4));// it displays starting from 0th index upto 3rd index
console.log(phrase.substr(2,5));// starting point, length
console.log(phrase.substring(2,15))// starting point, ending point


//for displaying multiple quotations in a string u must use backward slash as shown.
var word = "He said\"that\'s fine,\" & left.";
console.log(word);

var today = new Date();
console.log(today);// dispays date & time at that point
var y2k= new Date(2020,0,1,0,0,0);//yr, month, day,hrs,mins,secs
console.log(y2k); //displays past date & day But not time
var f2k= new Date(2021,22,10);
console.log(f2k); //displays future date & day But not time
var p2k= new Date(2020,9,22);
console.log(p2k); //displays present date & day But not time


var today = new Date();
console.log(today);// dispays date & time at that point
console.log(today.getMonth());
console.log(today.getDate());
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getTimezoneOffset());
console.log(today.getUTCDate());

//sets by default date year & month
var today = new Date();
today.setMonth(10);
today.setDate(4);
today.setFullYear(2019)
console.log(today);

var a=document.getElementById("numbers");//for finding no. of id's in ur document or website
console.log(a);
var b=document.getElementsByTagName("li");// for finding no. of tags in ur document or website
console.log(b);
