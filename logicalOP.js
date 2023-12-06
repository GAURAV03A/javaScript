// logical AND (&&):
// the && operator returns true if both operands are true; otherwise, it returns false.

let x = 5;
let y = 10;

if ( x>0 && y>0)
{
    console.log("both x and y are greater than 0");
}
else{
    console.log("at least one of x and y is not greater than 0");
}


// logical OR (||):
// the ! oprator is a unary operator that returns the opposite of the operand's truthiness.

let issunny = true;
let iswarm = false;

if (issunny || iswarm)
{
    console.log("it's either sunny or warm (or both)!");
}
else{
    console.log("it's neither sunny nor warm.");
}


// let israining = false;

// if (!israining){
//     console.log("it's not raining.Enjoy your day!");
// }
// else{
//     console.log("it's raining. Don't forget your umbrella!");
// }
