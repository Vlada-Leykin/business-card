export default function moveCapitalLettersToFront(initString) {
  const stringAsArr = initString.split('');

  const finalArr = stringAsArr.reduce((res, currChar) => {
    const destinationArr = /[A-Z]/.test(currChar) ? res.capitalLetters : res.smallLetters;
    destinationArr.push(currChar);
    return res;
  }, {
    capitalLetters: [],
    smallLetters: [],
  });

  const capitalLettersStr = finalArr.capitalLetters.join('');
  const smallLettersStr = finalArr.smallLetters.join('');

  return capitalLettersStr.concat(smallLettersStr);
}
