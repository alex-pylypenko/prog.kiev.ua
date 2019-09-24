
let users = [];

let deleteElement = e => {
    if ($(e.target).hasClass('remove-btn')) {
        users.splice(0, 1);
    }
};

let renderUsers = users => {
    let htmlStr = ``;
    for (let index in users) {
        htmlStr += `<tr>
            <td>${+index + 1}</td>
            <td>${users[index].name}</td>
            <td>${users[index].email}</td>
            <td>${users[index].age}</td>
            <td><img src="${users[index].picture}"></td>
            <td><button class="remove-btn">Remove</button></td>
        </tr>`;
    }
    $('#name, #email, #age, #picture').val('');
    $('tbody').html(htmlStr);
};

let addUser = e => {
    e.preventDefault();
    console.log('We are starting....');
    let userObject = {
        name: $('#name').val(),
        email: $('#email').val(),
        age: +$('#age').val(),
        picture: $('#picture').val()
    };
    if (!userObject.name || !userObject.email || !userObject.age || !userObject.picture) {
        alert('Fill all fields');
        return;
    }
    users.push(userObject);
    renderUsers(users);
};

$('table tbody').on('click', deleteElement);

$('#send').on('click', addUser);



/*$.ajax({
    url: 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json',
    method: 'GET',
    error: (e) => {
        console.log(e);
    },
    success: (data) => {
        for (var i = 0; i < data.length; i++) {
            x = data.length;
            $('.rates').html(data[i].txt + data[i].rate);
        }
    }
});*/



for (let i = 0; i < 61; i++) {
    $.getJSON("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json", function (data) {
        $('.rates').html(data[i].txt + data[i].rate);       
    });
}
