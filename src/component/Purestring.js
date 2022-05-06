import React from "react";

function Purestring(inputtxt, key) {
  var letters = /^[A-Za-z]+$/;
  if (inputtxt == undefined) {
    alert(key + "is empty");
  } else {
    if (!inputtxt.match(letters)) {
      alert(key + " is invalid");
      return true;
    }
  }
  return false;
}

export default Purestring;
