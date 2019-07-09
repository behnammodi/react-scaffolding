/**
 * @private
 */
const FA = 0;
/**
 * @private
 */
const EN = 1;
/**
 * @private
 */
const AR = 2;

/**
 * @private
 */
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

/**
 * @description Convert value form a language to another language
 * @private
 * @param {string} value
 * @param {number} from
 * @param {number} to
 * @returns {string} converted value
 */
const convert = (value, from, to) =>
  numbers.reduce(
    (acc, digit) => acc.split(digit[from]).join(digit[to]),
    (typeof value === 'string' || typeof value === 'number'
      ? value
      : ''
    ).toString()
  );

/**
 * @description Convert english number to farsi number
 * @public
 * @param {string} value
 * @returns {string} converted value
 */
export const convertEnNumToFaNum = value => convert(value, EN, FA);

/**
 * @description Convert english number to arabic number
 * @public
 * @param {string} value
 * @returns {string} converted value
 */
export const convertEnNumToArNum = value => convert(value, EN, AR);

/**
 * @description Convert farsi number to english number
 * @public
 * @param {string} value
 * @returns {string} converted value
 */
export const convertFaNumToEnNum = value => convert(value, FA, EN);

/**
 * @description Convert farsi number to arabic number
 * @public
 * @param {string} value
 * @returns {string} converted value
 */
export const convertFaNumToArNum = value => convert(value, FA, AR);

/**
 * @description Convert arabic number to farsi number
 * @public
 * @param {string} value
 * @returns {string} converted value
 */
export const convertArNumToFaNum = value => convert(value, AR, FA);

/**
 * @description Convert arabic number to english number
 * @public
 * @param {string} value
 * @returns {string} converted value
 */
export const convertArNumToEnNum = value => convert(value, AR, EN);

/**
 * @description check is numeric
 * @public
 * @param {number|string} num
 * @returns {boolean} is numeric
 */
export const isNumeric = num => !isNaN(parseFloat(num)) && isFinite(num);
