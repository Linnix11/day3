function createCity(country, cityName) {
    country.push([cityName, []]);
}

function createHousing(country, cityName, housingName) {
    const city = getCityOfCountry(country, cityName);
    if (city) {
        city[1].push([housingName, []]);
    } else {
        console.log("Failure to get city.");
    }
}

function addCharacteristics(country, cityName, housingName, ...characteristics) {
    const housing = getHousingOfCity(country, cityName, housingName);
    if (housing) {
        housing[1] = characteristics;
    } else {
        console.log("Failure to get housing.");
    }
}

function getCityOfCountry(country, cityName) {
    let i = 0;
    while (i < country.length) {
        if (country[i][0] === cityName) {
            return country[i];
        }
        i++;
    }
    console.log("Failure to get city.");
    return null;
}

function getHousingOfCity(country, cityName, housingName) {
    const city = getCityOfCountry(country, cityName);
    if (city) {
        let j = 0;
        while (j < city[1].length) {
            if (city[1][j][0] === housingName) {
                return city[1][j];
            }
            j++;
        }
        console.log("Failure to get housing.");
        return null;
    }
    return null;
}

function getCharacteristicsOfHousing(country, cityName, housingName) {
    const housing = getHousingOfCity(country, cityName, housingName);
    return housing ? housing[1] : null;
}

// Liste //
let country = [];
createCity(country, "Nantes");
createHousing(country, "Nantes", "Apartment1");
addCharacteristics(country, "Nantes", "Apartment1", "100 m2", "2 bathrooms", "Red paint", "14 rue Arthur III");
console.log(getCharacteristicsOfHousing(country, "Nantes", "Apartment1"));
console.log(country);
