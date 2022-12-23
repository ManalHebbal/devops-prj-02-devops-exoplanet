const { planetNameIsCorrect } = require('../utils/utils');

test('test if the name is in uppercase', () => {
    expect(planetNameIsCorrect('TRApIST')).toBe(false);
});

test('test if the name is in uppercase', () => {
    expect(planetNameIsCorrect('SATURNE')).toBe(true);
});


