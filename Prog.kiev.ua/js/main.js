
document.getElementById("date").valueAsDate = new Date();

let loadCurrencies = () => {
    $.ajax({
        url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
        method: 'GET',
        error: (e) => {
            console.log(e);
        },
        success: (data) => {
            console.log(data);
            let currenciesStr = '';
            for (let item in data) {
                let currency = data[item];
                currency.exchangedate = document.getElementById("date").valueAsDate;  // тут что-то не так
                currenciesStr += `<tr class="currency-${item}">
                <td>${+item + 1}</td>
                <td>${currency.cc}</td>
                <td>${currency.txt}</td>
                <td>${currency.rate.toFixed(2)}</td>
</tr>`;
            }
            $('table.currencies tbody').html(currenciesStr);
            $('table.currencies').toggle();
        }
    });
};

$('table.currencies').hide();

$('.load-currencies').click(loadCurrencies);

