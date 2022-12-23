module.exports.planetNameIsCorrect = (planetName) => {
    //regex
    const regex = '/^[A-Zd.-]+$/g';
    if (planetName.match(regex)) {
        return true;
    } else {
        return false;
    }
};
