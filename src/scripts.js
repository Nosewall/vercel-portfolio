export function nameTest() {
  let name = document.getElementById("name").innerHTML;
  changeTextToRandomCharacters(name);
  document.getElementById("name").innerHTML = name;
}

export function changeTextToRandomCharacters(textToChange) {
  let charArray = Array.from(textToChange);
  let index = 0;

  charArray.forEach(function getRandomCharacter() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789;:.,?/]{|+-)({}';
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