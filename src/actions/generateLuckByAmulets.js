/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
function chooseAlgorithm() {
  // função que checa se o número gerado é maior que 60
  function checksIfItIsGreaterThanMax(number) {
    const min = 1;
    const max = 60;
    let result = number;

    if (number > max) {
      result = Math.floor(Math.random() * (max - min + 1) + min);
      return result;
    }
    return number;
  }

  // Funções que geram os números
  function countCharacters(word) {
    const number = word.length;
    return checksIfItIsGreaterThanMax(number);
  }
  function sumCharacters(word) {
    const countChar = countCharacters(word);
    let sum = 0;
    for (let count = 0; count <= countChar; ++count) {
      sum += count;
    }
    return checksIfItIsGreaterThanMax(sum);
  }
  function sumOddCharacters(word) {
    const chars = word.split('');
    let sum = 0;
    for (let count = 0; count <= chars.length; ++count) {
      if (count % 2 !== 0) {
        sum += count;
      }
    }
    return checksIfItIsGreaterThanMax(sum);
  }
  function sumPerAlphabet(word) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    const alphabetArray = alphabet.split('');

    const chars = word.split('');

    let sum = 0;
    chars.forEach((char) => {
      const index = alphabetArray.indexOf(char);
      if (index > 0) {
        sum += index;
      }
    });

    return checksIfItIsGreaterThanMax(sum);
  }
  function sumPerVowel(word) {
    const alphabet = 'aeiou';
    const alphabetArray = alphabet.split('');

    const chars = word.split('');

    let sum = 1;
    chars.forEach((char) => {
      const index = alphabetArray.indexOf(char);
      if (index > 0) {
        sum += index;
      }
    });

    return checksIfItIsGreaterThanMax(sum);
  }

  const functions = [
    countCharacters,
    sumCharacters,
    sumOddCharacters,
    sumPerAlphabet,
    sumPerVowel,
  ];
  const selectIndex = Math.floor(Math.random() * functions.length);
  return functions[selectIndex];
}

export default function generateLuckByAmulets(amulets) {
  // verifica se existe numeros repetidos
  function checkIfExistsRepetions(numbers) {
    const uniqueNumbers = new Set();
    for (const number of numbers) {
      if (uniqueNumbers.has(number)) {
        return true;
      }
      uniqueNumbers.add(number);
    }
    return false;
  }
  // função que escolhe um algoritmo para gerar o número
  function generateLuckyNumber(word) {
    const algorithm = chooseAlgorithm();
    const luckyNumber = algorithm(word);
    return luckyNumber;
  }

  function generateNumbers(words) {
    const numbers = [];
    words.forEach((word) => {
      let number;
      do {
        number = generateLuckyNumber(word);
      } while (checkIfExistsRepetions(numbers.concat(number)));
      numbers.push(number);
    });
    return numbers;
  }

  return generateNumbers(amulets);
}
