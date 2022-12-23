module.exports.planetNameIsCorrect = (planetName) => {
    //regex
    const regex ='/^[A-Z]+$/g';
    if(planetName.match(regex)){
        return true;
    }else{
        return false;
    }
};
