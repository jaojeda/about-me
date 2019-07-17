import compareNumbers from '../src/compareNumbers.js';

const test = QUnit.test;

test('guess is higher', function(assert) {
    //Arrange
    //Set up your parameters and expectations
    const guess = 20;
    const expected = 1;

    //Act
    const result = compareNumbers(guess, 4);

    //Assert
    assert.equal(result, expected);
});

test('guess is equal', function(assert) {
    //Arrange
    //Set up your parameters and expectations
    const guess = 4;
    const expected = 0;

    //Act
    const result = compareNumbers(guess, 4);

    //Assert
    assert.equal(result, expected);
});

test('guess is lower', function(assert) {
    //Arrange
    //Set up your parameters and expectations
    const guess = 3;
    const expected = -1;

    //Act
    const result = compareNumbers(guess);

    //Assert
    assert.equal(result, expected);
});