//Задание 2.31 "Нужно больше функций"
//Функция для проверки длины строки
const stringLength = (string, length) => string.length <= length;
stringLength('проверяемая строка', 20);
stringLength('проверяемая строка', 18);
stringLength('проверяемая строка', 10);
//Функция для проверки, является ли строка палиндромом
const isPalindrom = (string) => {
  string = string.replaceAll(' ', '').toLowerCase();
  let stringNew = '';
  for (let i = string.length - 1; i >= 0; i--) {
    stringNew += string[i];
  }
  if (string === stringNew) {
    return true;
  }
  return false;
};
//Дополнительное задание
const isNumber = (string) => {
  string = string.toString();
  let stringNew = '';
  for (let i = 0; i < string.length; i++) {
    if (parseInt(string[i], 10) >= 0) {
      stringNew += string[i];
    }
  }
  return parseInt(stringNew, 10);
};
