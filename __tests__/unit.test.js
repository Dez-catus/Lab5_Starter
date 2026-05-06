// unit.test.js

import {
  isPhoneNumber,
  isEmail,
  isStrongPassword,
  isDate,
  isHexColor,
} from '../code-to-unit-test/unit-test-me';

// TODO - Part 2
test('isPhoneNumber: valid phone number', () => {
    expect(isPhoneNumber('123-456-7890')).toBe(true);
});
test('isPhoneNumber: valid phone number with parentheses', () => {
    expect(isPhoneNumber('(123) 456-7890')).toBe(true);
});
test('isPhoneNumber: invalid phone number', () => {
    expect(isPhoneNumber('1234567890')).toBe(false);
});
test('isPhoneNumber: invalid phone number with letters', () => {
    expect(isPhoneNumber('123-456-ABCD')).toBe(false);
});
test('isEmail: valid email', () => {
    expect(isEmail('test@example.com')).toBe(true);
});
test('isEmail: valid email with gmail', () => {
    expect(isEmail('test@gmail.com')).toBe(true);
});
test('isEmail: invalid email', () => {
    expect(isEmail('testexample.com')).toBe(false);
});
test('isEmail: invalid email with multiple @', () => {
    expect(isEmail('test@@example.com')).toBe(false);
});

test('isStrongPassword: valid strong password', () => {
    expect(isStrongPassword('Password123_')).toBe(true);
});
test('isStrongPassword: valid strong password with 4 characters', () => {
    expect(isStrongPassword('Pass')).toBe(true);
});
test('isStrongPassword: invalid strong password with 15+ characters', () => {
    expect(isStrongPassword('password123456789012345')).toBe(false);
});
test('isStrongPassword: invalid strong password', () => {
    expect(isStrongPassword('4assword')).toBe(false);
});
test('isDate: valid date with variable character count', () => {
    expect(isDate('1/10/2024')).toBe(true);
});
test('isDate: valid date with all 2 digit formats', () => {
    expect(isDate('10/10/2023')).toBe(true);
});
test('isDate: invalid date with wrong format', () => {
    expect(isDate('2023/10/10')).toBe(false);
});
test('isDate: invalid date, long months format', () => {
    expect(isDate('123/10/2004')).toBe(false);
});
test('isHexColor: valid hex color', () => {
    expect(isHexColor('#FF0000')).toBe(true);
});
test('isHexColor: valid hex color without #', () => {
    expect(isHexColor('FF0000')).toBe(true);
});
test('isHexColor: invalid hex color', () => {
    expect(isHexColor('CSS')).toBe(false);
});
test('isHexColor: invalid hex color with wrong length', () => {
    expect(isHexColor('#FF000')).toBe(false);
});
