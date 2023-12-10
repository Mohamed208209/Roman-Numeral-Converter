const convertToRoman = function(num) {
  const arabicNumerals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumerals = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];

  let roman = "";

  for (let index = 0; index < arabicNumerals.length; index++) {
    while (arabicNumerals[index] <= num) {
      roman += romanNumerals[index];
      num -= arabicNumerals[index];
    }
  }

  return roman;
};
