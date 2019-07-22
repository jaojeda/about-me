import { getThrowFromNumber } from '../src/get-throw.js';

const test = QUnit.test;

QUnit.module('Generate Throw');

test('0 gives rock', assert => {
    //arrange
    const number = 0;
    const expected = 'rock';

    //act
    const result = getThrowFromNumber(number);

    //asseert
    assert.equal(result, expected);
});

test('1 gives paper', assert => {
    //arrange
    const number = 1;
    const expected = 'paper';

    //act
    const result = getThrowFromNumber(number);

    //asseert
    assert.equal(result, expected);
});

test('2 gives scissors', assert => {
    //arrange
    const number = 2;
    const expected = 'scissors';

    //act
    const result = getThrowFromNumber(number);

    //asseert
    assert.equal(result, expected);
});