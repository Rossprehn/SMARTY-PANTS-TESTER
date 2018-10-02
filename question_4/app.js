function roateSquare() {
  var element = document.getElementById('square')
  element.classList.toggle('square-rotate')
removeSquare()
}

var myVar

function removeSquare() {
 myVar = setTimeout(alertFunc, 1500)
  console.log("yo");
}

function alertFunc() {
  document.getElementById('square').remove();
  makeSquare()
}

function makeSquare() {
  var div = document.createElement('div');
  div.setAttribute('id', 'square')
  div.onclick = roateSquare;
  document.body.appendChild(div);
}
