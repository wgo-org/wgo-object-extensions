export const ToCamelCase = (str: string) => {
  let newStr = '';
  if (str) {
    let wordArr = str.split(/[-_]/g);

    wordArr = wordArr.map((word, index) => {
      if (index === 0) {
        newStr = word;
      } else {
        return word.toLowerCase();
      }
    });

    for (let i = 0; i < wordArr.length; i++) {
      if (i > 0) {
        newStr += wordArr[i].charAt(0).toUpperCase() + wordArr[i].slice(1);
      } else {
        newStr += wordArr[i];
      }
    }
  } else {
    return newStr;
  }
  return newStr;
};
