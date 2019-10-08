
let countries = [];


let renderCountriesHtml = (countries) => {
    let htmlStr = '';
    let countriesTranslation = {};

    for (let country of countries) {
        countriesTranslation[country['alpha3Code']] = country['name'];
    }

    for (let country of countries) {

        country.borderNames = [];
        for (let border of country.borders) {
            country.borderNames.push(countriesTranslation[border])
        }


        let currenciesArray = country.currencies.map(currencyObj => currencyObj.name);
        let languagesArr = country.languages.map(languageObj => languageObj.name);
        htmlStr += `<tr>
            <td>${country.name}</td>
            <td>${country.capital}</td>
            <td>${country.region}</td>
            <td>${country.population}</td>
            <td>${country.area}</td>
            <td>${currenciesArray.join(', ')}</td>
            <td><img height="50" src="${country.flag}"></td>
            <td>${languagesArr.join(', ')}</td>
            <td>${country.borderNames.join(', ')}</td>
        </tr>`;
    }
    $('table.countries tbody').html(htmlStr);
};

let loadCountries = e => {
    $.ajax({
        method: 'GET',
        url: 'https://restcountries.eu/rest/v2/all',
        success: (response) => {
            countries = response;
            renderCountriesHtml(response);
        }
    });
};


let getActualCountry = textString => {
    $.ajax({
        url: `https://restcountries.eu/rest/v2/all`,
        success: (data) => {
            let htmlStr = '';
            let countriesTranslation = {};

            for (let country of countries) {
                countriesTranslation[country['alpha3Code']] = country['name'];
            }

            for (let country of data) {
                let smallRegister_name = country.name.toLowerCase();
                let smallRegister_capital = country.capital.toLowerCase();
                let smallRegister_str = textString.toLowerCase();
                if ((smallRegister_name).includes(smallRegister_str) || (smallRegister_capital).includes(smallRegister_str)) {

                    country.borderNames = [];
                    for (let border of country.borders) {
                        country.borderNames.push(countriesTranslation[border])
                    }

                    let currenciesArray = country.currencies.map(currencyObj => currencyObj.name);
                    let languagesArr = country.languages.map(languageObj => languageObj.name);

                    htmlStr += `<tr>
                    <td>${country.name}</td>
                    <td>${country.capital}</td>
                    <td>${country.region}</td>
                    <td>${country.population}</td>
                    <td>${country.area}</td>
                    <td>${currenciesArray.join(', ')}</td>
                    <td><img height="50" src="${country.flag}"></td>
                    <td>${languagesArr.join(', ')}</td>
                    <td>${country.borderNames.join(', ')}</td>
                    </tr>`;
                }
            }
            $('table tbody').html(htmlStr);
        }
    })
};



loadCountries();


$('#search').keyup(e => {
    let look_for = $(e.currentTarget).val();
    getActualCountry(look_for);
});

