if (condition) {
    // executes this block if the condition is true
  } else {
    // executes this block if the condition is false
  }



  var a = 15;
if (a == 10) {
  console.log("True, a = 10");
}
else {
  console.log("False, a is not equal to 10");
}




var a = 15;
if (a == 10 || a > 20) {
  console.log("True, a = 10 or a >20");
}
else {
  console.log("a = 15");
}



if (condition) {
    // executes this block if the condition is true
  }
  else if (condition) {
    // executes this block if the condition is false
  }

  
  else {
    // executes this block if the condition is false
  }


  var a = 15;
if (a == 10) {
  console.log("True, a = 10");
}
else if (a == 15) {
  console.log("True, a = 15");
}
else {
  console.log("False, a is not equal to 10 or 15");
}




let today = new Date().getDay();

if (today == 0) {
  console.log("Sunday!");
}
else if (today == 1) {
  console.log("Monday!");
}
else if (today == 2) {
  console.log("Tuesday!");
}
else if (today == 3) {
  console.log("Wednesday!");
}
else if (today == 4) {
  console.log("Thursday!");
}
else if (today == 5) {
  console.log("Friday!");
}
else {
  console.log("Saturday!");
}



// let today = new Date().getDay();
switch (today) {
  case 0:
    console.log("Sunday!");
    break;
  case 1:
    console.log("Monday!");
    break;
  case 2:
    console.log("Tuesday!");
    break;
  case 3:
    console.log("Wednesday!");
    break;
  case 4:
    console.log("Thursday!");
    break;
  case 5:
    console.log("Friday!");
    break;
  case 6:
    console.log("Saturday!");
    break;
}


let employee = {
    name: "herry",
    age: 32,
    experience: 6
  }
  
  if (employee.age > 30) {
    if (employee.experience > 5) {
      console.log("Eligible!");
    }
    else {
      console.log("Not eligible!");
    }
  }
  else {
    if (employee.experience > 3) {
      console.log("Eligible!");
    }
    else {
      console.log("Not eligible!");
    }
  }