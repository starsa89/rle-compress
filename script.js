"use strict";

/**
 * Реализовать RLE-сжатие: AAAB -> A3B, BCCDDDAXXXX -> BC2D3AX4
 * @param  {string} value
 * @return {string}
 */
function rle(value) {
  let arrayStr = value.slice();
  let result = "";
  let counter = 1;

  for (let i = 0; i < arrayStr.length; i++) {
    let beforeLetter = arrayStr[i - 1];
    let curLetter = arrayStr[i];

    // Первый элемент
    if (beforeLetter == undefined) {
      continue;
      // Последний элемент
    } else if (i == arrayStr.length - 1) {
      result += curLetter;
      result += ++counter;
    } else {
      // Если нашли одинаковый элемент, увеличим счетчик
      if (curLetter == beforeLetter) {
        counter++;
        // Если символы разные, но счетчик больше одного
        // то значит надо сжать символы
        // запишем предыдуший символ и счетчик
      } else if (counter > 1) {
        result += beforeLetter;
        result += counter;
        counter = 1;
        // В проивном случае символ один, просто добавим
      } else {
        result += beforeLetter;
        counter = 1;
      }
    }
  }
  return result;
}
function rerle(value) {
  let arrayStr = value.slice();
  let result = "";

  for (let i = 0; i < arrayStr.length; i++) {
    let beforeLetter = arrayStr[i - 1];
    let curLetter = arrayStr[i];
    // Первый элемент
    if (beforeLetter == undefined) {
      result += curLetter;
    } else {
      // Проверяем символ на число
      let count = parseInt(curLetter);
      if (count > 1) {
        // Добавляем необходимое кол-во символов
        for (let j = 1; j < count; j++) {
          result += beforeLetter;
        }
      } else {
        result += curLetter;
      }
    }
  }
  return result;
}

console.log("  rle", "AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD");

let strZip = rle("AVVVBBBVVXDHJFFFFDDDDDDHAAAAJJJDDSLSSSDDDD");
console.log("zip: ", strZip);
console.log("rerle", rerle(strZip));
