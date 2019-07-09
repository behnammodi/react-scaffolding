import {
  convertEnNumToFaNum,
  convertFaNumToEnNum,
  convertEnNumToArNum,
  convertArNumToEnNum,
  convertFaNumToArNum,
  convertArNumToFaNum
} from './convert-num';

describe('Convert Num', () => {
  test('converted 1234567890 to ۱۲۳۴۵۶۷۸۹۰', () => {
    expect(convertEnNumToFaNum('1234567890')).toBe('۱۲۳۴۵۶۷۸۹۰');
  });

  test('converted ۱۲۳۴۵۶۷۸۹۰ to 1234567890', () => {
    expect(convertFaNumToEnNum('۱۲۳۴۵۶۷۸۹۰')).toBe('1234567890');
  });

  test('converted 1234567890 to ١٢٣٤٥٦٧٨٩٠', () => {
    expect(convertEnNumToArNum('1234567890')).toBe('١٢٣٤٥٦٧٨٩٠');
  });

  test('converted ١٢٣٤٥٦٧٨٩٠ to 1234567890', () => {
    expect(convertArNumToEnNum('١٢٣٤٥٦٧٨٩٠')).toBe('1234567890');
  });

  test('converted ۱۲۳۴۵۶۷۸۹۰ to ١٢٣٤٥٦٧٨٩٠', () => {
    expect(convertFaNumToArNum('۱۲۳۴۵۶۷۸۹۰')).toBe('١٢٣٤٥٦٧٨٩٠');
  });

  test('converted ١٢٣٤٥٦٧٨٩٠ to ۱۲۳۴۵۶۷۸۹۰', () => {
    expect(convertArNumToFaNum('١٢٣٤٥٦٧٨٩٠')).toBe('۱۲۳۴۵۶۷۸۹۰');
  });

  test('converted a12b to a۱۲b', () => {
    expect(convertEnNumToFaNum('a12b')).toBe('a۱۲b');
  });

  test("converted falsely value to ''", () => {
    expect(convertEnNumToFaNum(null)).toBe('');
    expect(convertEnNumToFaNum(undefined)).toBe('');
    expect(convertEnNumToFaNum(false)).toBe('');
    expect(convertEnNumToFaNum(0)).toBe('۰');
  });
});
