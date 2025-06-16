const sum = require('./sum');

/**
 * test function cotain a description 
 * and
 * a arrow function
 */
test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3); //to be used for premitive value like number boolian true false
});