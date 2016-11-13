var integerArray = [1,2], indices = [];

function addInteger(e) {
  integerValue = document.getElementById('numberInput').value;
  integerArray.push(integerValue);
  document.getElementById('integerArray').innerHTML += (integerArray.length == 1 ? "" : "," ) + integerValue;
  document.getElementById("numberInput").value = "";
};

var reset = function () {
  document.getElementById("indicesArray").innerHTML = "";
  document.getElementById('integerArray').innerHTML = "";
  integerArray = [];
  indices = [];
};

function searchConsecutiveNumbers() {
  var diff1, diff2;

  for(var i = 0; i < integerArray.length; i += 1) {
    diff1 = integerArray[i] - integerArray[i + 1];
    diff2 = integerArray[i + 1] - integerArray[i + 2];
    if ((diff1 == 1 || diff1 == -1) && diff1 === diff2) {
      indices.push(i);
      document.getElementById("indicesArray").innerHTML += (indices.length == 1 ? "" : "," ) + i;
    }
  }

  if (indices.length == 0) {
    document.getElementById("indicesArray").innerHTML = 'No results found';
  }
};
