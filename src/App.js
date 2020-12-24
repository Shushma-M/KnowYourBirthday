import React, { useState } from "react";
import "./styles.css";

export default function App() {
  var [output1, setOutput1] = useState("");
  var [output2, setOutput2] = useState("");
  var [output3, setOutput3] = useState("");
  var [output4, setOutput4] = useState("");
  function leapYearCheck(data) {
    if ((data % 4 === 0 && data % 100 !== 0) || data % 400 === 0) {
      var opmsg = "Hey you are born in a leap year";
      setOutput1(opmsg);
    } else {
      var opmsg = "Hey you are born in a common year";
      setOutput1(opmsg);
    }
  }
  function primeNo(num, type) {
    var flag = false;
    for (var i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        flag = true;
        break;
      }
    }

    if (!flag) {
      var opmsg = type + " " + num + " is a prime number.";
      if (type === "Date") setOutput2(opmsg);
      else if (type === "Month") setOutput3(opmsg);
      else setOutput4(opmsg);
    } else {
      var opmsg = type + " " + num + " is not a prime number.";
      if (type === "Date") setOutput2(opmsg);
      else if (type === "Month") setOutput3(opmsg);
      else setOutput4(opmsg);
    }
  }
  function submitHandler(event) {
    var input = event.target.value;
    var temp = new Date(input);
    var year = temp.getFullYear();
    var mon = temp.getMonth() + 1;
    var date = temp.getDate();
    leapYearCheck(year);
    primeNo(date, "Date");
    primeNo(mon, "Month");
    primeNo(year, "Year");
  }
  return (
    <div className="App">
      <h1>Know Your Birthday</h1>
      <label>Birthday:</label>
      <input
        type="date"
        id="birthday"
        name="birthday"
        onChange={submitHandler}
      />
      <div className="display">{output1}</div>
      <div className="display">{output2}</div>
      <div className="display">{output3}</div>
      <div className="display">{output4}</div>
      <img
        src="https://static.vecteezy.com/system/resources/previews/001/201/709/non_2x/cake-png.png"
        alt="cake"
        width="20%"
        height="50%"
      />
    </div>
  );
}
