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
    if (beforeLetter === undefined) {
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
  let arrayStr = value.split("");

  let result = "";
  let slice = false;
  let insetCounter = false;
  for (let i = 0; i < arrayStr.length; i++) {
    let beforeLetter = arrayStr[i - 1];
    let curLetter = arrayStr[i];

    // Первый элемент
    if (beforeLetter === undefined) {
      result += curLetter;
    } else {
      let before = parseInt(beforeLetter);
      let current = parseInt(curLetter);

      let typeBefore = typeof before;
      let typeCurrent = typeof current;

      if (
        typeCurrent == "number" &&
        !isNaN(current) &&
        (typeBefore == "number" && !isNaN(before))
      ) {
        if (insetCounter) {
          result += curLetter;
          insetCounter = false;
          continue;
        } else {
          // Добавляем необходимое кол-во символов
          for (let j = 1; j < current; j++) {
            result += beforeLetter;
          }
          insetCounter = true;
          continue;
        }
      }
      // Проверяем символ на число
      if (typeCurrent == "number" && !isNaN(current)) {
        // Добавляем необходимое кол-во символов
        for (let j = 1; j < current; j++) {
          result += beforeLetter;
        }
        insetCounter = true;
        continue;
      } else {
        result += curLetter;
      }
      insetCounter = false;
    }
  }
  return result;
}
