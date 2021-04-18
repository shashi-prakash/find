function getcube() {
  var number = document.getElementById("number").value;
  var result = number * number * number;
  if (result == "" || result == "null") {
    document.getElementById("get_error").innerHTML =
      "OOPS, Input Field Can't Empty !!";
    document.getElementById("get_value").style.visibility = "hidden";
    document.getElementById("get_error").style.visibility = "visible";
  } else {
    document.getElementById("get_value").innerHTML =
      "Cube Root Of " + number + " = " + result;
    document.getElementById("get_value").style.visibility = "visible";
    document.getElementById("get_error").style.visibility = "hidden";
  }
}

function getsquare() {
  var number = document.getElementById("number").value;
  var result = number * number;
  if (result == "" || result == "null") {
    document.getElementById("get_error").innerHTML =
      "OOPS, Input Field Can't Empty !!";
    document.getElementById("get_value").style.visibility = "hidden";
    document.getElementById("get_error").style.visibility = "visible";
  } else {
    document.getElementById("get_value").innerHTML =
      "Squre Root Of " + number + " = " + result;
    document.getElementById("get_value").style.visibility = "visible";
    document.getElementById("get_error").style.visibility = "hidden";
  }
}

// Design and develop by Prakash Shashi
