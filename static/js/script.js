// Challenge 1: Your Age in Days

function ageInDays() {
  var birthYear = prompt('what year were you born... Good friend?');
  var ageInDayss = (2022 - birthYear) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('you are ' + ageInDayss + ' days old');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
  console.log(ageInDayss);
}

function reset() {
  document.getElementById('ageInDays').remove();
}

function generateCat() {
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-gen');
  image.src = "https://c.tenor.com/XLz2euoYPKkAAAAM/cat-snuggle.gif";
  div.appendChild(image);
}