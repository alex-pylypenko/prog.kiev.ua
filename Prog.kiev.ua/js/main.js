let getCurrencies = dateString => {
    $.ajax({
        url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=${dateString}`,
        success: (data) => {
            let htmlStr = '';
            for (let currency of data) {
                htmlStr += `<tr>
                    <td>${currency.txt}</td>
                    <td>${currency.rate.toFixed(2)}</td>
                </tr>`;
            }
            $('table tbody').html(htmlStr);
        }
    })
};

let getActualCurrency = function (dateString, textString) {
    $.ajax({
        url: `https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json&date=${dateString}`,
        success: (data) => {
            let htmlStr = '';          
            for (let currency of data) {
                let smallRegister_1 = currency.txt.toLowerCase();
                let smallRegister_2 = textString.toLowerCase();
                if ((smallRegister_1).includes(smallRegister_2)) {
                    htmlStr += `<tr>
                    <td>${currency.txt}</td>
                    <td>${currency.rate.toFixed(2)}</td>
                    </tr>`;
                }               
            }
            $('table tbody').html(htmlStr);
        }
    })
};

let saveDate = dateStr => {
    localStorage.setItem('dateStr', dateStr);
};

let getSavedDate = () => {
    return localStorage.getItem('dateStr') || false;
};

$(document).ready(() => {
    let savedDate = getSavedDate();
    let thisDate;
    if (savedDate) {
        thisDate = savedDate;

        let dateToPaste = savedDate.substring(0, 4) + '-' + savedDate.substring(4, 6) + '-' + savedDate.substring(6, 8);
        $('#someInput').val(dateToPaste);
    } else {
        let dateNow = new Date();
        let dateArr = [dateNow.getFullYear() + '', (+dateNow.getMonth() + 1) + '', (dateNow.getDate()) + ''];


        if ((dateArr[1] + '').length < 2) {
            dateArr[1] = '0' + dateArr[1];
        }
        if ((dateArr[2] + '').length < 2) {
            dateArr[2] = '0' + dateArr[2];
        }
        thisDate = dateArr.join('');
    }

    getCurrencies(thisDate);

    $('#someInput').change(e => {
        let dateStr = $(e.currentTarget).val();
        if (dateStr) {
            dateStr = dateStr.split('-').join('');
            getCurrencies(dateStr);
            saveDate(dateStr);
        }
    });

    $('#go-up').click(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
        });
    });


    $('#search').change(e => {
        let look_for = $(e.currentTarget).val();
        let dateStr = $('#someInput').val();
        if (dateStr) {
            dateStr = dateStr.split('-').join('');
            getActualCurrency(dateStr, look_for);
            saveDate(dateStr);
        }

    });


});

