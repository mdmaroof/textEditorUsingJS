var cursorPosition = 0;
var string = "";

const append = (data) => {
  const sliceDataStart = string.slice(0, cursorPosition);
  const sliceDataEnd = string.slice(cursorPosition);
  string = sliceDataStart + data + sliceDataEnd

  cursorPosition = cursorPosition + data.length;
  return string;
}

const moverCursor = (position) => {
  cursorPosition = position
  return cursorPosition
}

const deleteFunc = (removeWordLength) => {
  const removeWord = cursorPosition - removeWordLength;
  const data = string.slice(0, removeWord) + string.slice(cursorPosition);
  cursorPosition = removeWord;
  string = data
  return string;
}

const find = (value) => {
  const strLen = string.length;
  const substrLen = value.length;

  for (let i = 0; i <= strLen - substrLen; i++) {
    let j = 0;
    for (; j < substrLen; j++) {
      if (string[i + j] !== value[j]) {
        break;
      }
    }
    if (j === substrLen) {
      return i;
    }
  }

}

const replace = (newString, oldString) => {
  const indexSubstring = find(oldString);
  const data = string.slice(0, indexSubstring) + newString + string.slice(indexSubstring + oldString.length);
  cursorPosition = data.length;
  string = data
  return string
}

append('hello');
append(' world test');
moverCursor(6)
find('or')
replace("maroof", "world")
moverCursor(15)
deleteFunc(9);
moverCursor(string.length)
append(' hello new');
replace("world", "new")



