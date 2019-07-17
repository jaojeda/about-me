import isYes from '../src/isYes.js';

const test = QUnit.test;

test('yes is true', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'yes';
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);
    //Assert
    assert.equal(result, expected);
});

test('YES is true', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'YES';
    const expected = true;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);
    //Assert
    assert.equal(result, expected);
});

test('no is false', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'no';
    const expected = false;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);
    //Assert
    assert.equal(result, expected);
});

test('No is false', function(assert) {
    //Arrange
    // Set up your parameters and expectations
    const text = 'no';
    const expected = false;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = isYes(text);
    //Assert
    assert.equal(result, expected);
});