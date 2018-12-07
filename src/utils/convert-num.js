const FA = 0;
const EN = 1;
const AR = 2;

const numbers = [
  ['۰', '0', '٠'],
  ['۱', '1', '١'],
  ['۲', '2', '٢'],
  ['۳', '3', '٣'],
  ['۴', '4', '٤'],
  ['۵', '5', '٥'],
  ['۶', '6', '٦'],
  ['۷', '7', '٧'],
  ['۸', '8', '٨'],
  ['۹', '9', '٩']
];

const convert = (value, from, to) =>
  numbers.reduce((acc, digit) =>
    acc.split(digit[from]).join(digit[to])
    , value.toString() || '');

export const convertEnNumToFaNum = value => convert(value, EN, FA);

export const convertEnNumToArNum = value => convert(value, EN, AR);

export const convertFaNumToEnNum = value => convert(value, FA, EN);

export const convertFaNumToArNum = value => convert(value, FA, AR);

export const convertArNumToFaNum = value => convert(value, AR, FA);

export const convertArNumToEnNum = value => convert(value, AR, EN);