//switch statement is used to perform different actions based on different conditions.
//  It is a more efficient way to write multiple if-else statements. The switch statement evaluates an expression and matches the expression's value to a case label,
//  and executes the associated block of code.
//syntax
/*switch(expression) {
  case value1:
    // code block
    break;
    case value2:
    // code block
    break;
    default:
    // code block
    break;
}*/

const month = 3;
/*switch(month){
    case "january":
        console.log("January");
        break;
    case "february":
        console.log("February");
        break;
    case "march":
        console.log("March");
        break;
    case "april":
        console.log("April");
        break;
    default:
        console.log("Invalid month");
}*/
switch(month){
    case 1:
        console.log("january");
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("Invalid month");           
}