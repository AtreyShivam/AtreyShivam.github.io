var myImage = document.querySelector('img');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/BMW.JPG') {
      myImage.setAttribute ('src','images/BMW1.JPG');
    } else {
      myImage.setAttribute ('src','images/BMW.JPG');
    }
}

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'BMW Z4, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'BMW Z4, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}