module.exports.planetNameIsCorrect = (planetName) => {
    //regex
    const regex = /^[A-Z\d\.-]+$/g;
    const found = planetName.match(regex);
    if (found !== null) {
        return true;
    } else {
        return false;
    }
};
