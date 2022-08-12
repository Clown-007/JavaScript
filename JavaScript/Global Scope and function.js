
var myGlobal = 10;  // here it is not inside anyfunction so it must be assigned with var ...

function fun1()
{
    oopsGlobal = 5; // here if we assign var then it cannot be access its value ib belows function

}


function fun2()
{
    var output = "";
    if (typeof myGlobal != "undefined")
    {
        output += "myGlobal: " + myGlobal + "  ";
    }
    if (typeof oopsGlobal != "undefined")
    {
        output += "oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

fun1();
fun2();


// More about it will be learned in other chapter.
// here outputs are myGlobal: 10 oopsGlobal: 5


