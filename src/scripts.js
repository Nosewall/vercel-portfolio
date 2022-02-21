let trueFirstName = "Nolan";
let trueLastName = "Nordwall";

export function nameTest() {
  let firstName = document.getElementById("firstName").innerHTML;
  let lastName = document.getElementById("lastName").innerHTML;
  let newFirst = changeTextToRandomCharacters(firstName);
  let newLast = changeTextToRandomCharacters(lastName);
  document.getElementById("firstName").innerHTML = newFirst;
  document.getElementById("lastName").innerHTML = newLast;

  // setTimeout(function () {
  //   animateString("firstName", trueFirstName)
  // }, 2000);
  // animateString("firstName", trueFirstName)
}

export function changeTextToRandomCharacters(textToChange) {
  let charArray = Array.from(textToChange);
  let index = 0;

  charArray.forEach(function getRandomCharacter() {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789;:.,?/]{|+-)({}';
    var charactersLength = characters.length;

    result += characters.charAt(Math.floor(Math.random() *
      charactersLength));
    charArray[index] = result;
    index++;
  });

  let newString = charArray.join('');
  console.log("Character Array : " + charArray)
  return newString;
}

function animateString(id, correctString) {
  let startingString = document.getElementById(id).innerHTML;
  let stringLength = startingString.length;
  let index = 0;
  let speed = 100; //miliseconds per cycle
  let chance = 4;
  let leftSide = "";
  let rightSide = startingString;
  console.log("String Length: " + stringLength);

  while (index != stringLength - 1) {
    console.log("In a loop!!");
    console.log(Math.floor(Math.random() * chance + 1));

    (function (index) {
      setTimeout(function () {
        console.log("In the inner Function!");
        let randomInt = Math.floor(Math.random() * chance + 1);
        console.log("Random int : " + randomInt);
        if (chance == randomInt) {
          index++;
          leftSide = correctString.subString(0, index + 1);
          rightSide = changeTextToRandomCharacters(startingString.substring(index));
        }

        let newStringForUpdate = leftSide + rightSide;
        updateString(id, newStringForUpdate);
        return 0;
      }, speed);
    });

  }
}

function updateString(id, string) {
  document.getElementById(id).innerHTML = string;
}

function testFunction() {
  console.log("Test funtion activated!!")
}