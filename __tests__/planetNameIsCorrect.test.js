const { planetNameIsCorrect } = require('../utils/utils');

test('test if the name is in uppercase', () => {
    expect(planetNameIsCorrect('TRApIST')).toBe(false);
});

test('test if the name is in uppercase', () => {
    expect(planetNameIsCorrect('SATURNE')).toBe(true);
});

test('test if the name contains only _ or . as special characters', () => {
    expect(planetNameIsCorrect('SATURNE_0214')).toBe(true);
});

test('test if the name contains only _ or . as special characters', () => {
    expect(planetNameIsCorrect('SATURNE!1402')).toBe(false);
});
