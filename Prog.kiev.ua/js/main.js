

let form = document.getElementById('submitForm');
let users = [];

function renderUsers(users) {
    let htmlStr = ``;
    let deleteStr = ``;
    for (let index in users) {
        htmlStr += `<tr>
            <td>${+index + 1}</td>
            <td>${users[index].name}</td>
            <td>${users[index].email}</td>
            <td>${users[index].age}</td>
            <td><img src="${users[index].picture}"></td>           
        </tr>`;
        deleteStr = `<div style="margin-top: 75px">${users[index].delete}</div>`;
    }
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('age').value = '';
    document.getElementById('picture').value = '';
    document.querySelector('tbody').innerHTML = htmlStr;
    document.querySelector('.right').innerHTML = deleteStr;
}

function addUser(e) {
    e.preventDefault();
    console.log('We are starting....', e);
    let userObject = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        age: +document.getElementById('age').value,
        picture: document.getElementById('picture').value,
        delete: "X"
    };


    if (!userObject.name || !userObject.email || !userObject.age || !userObject.picture) {
        alert('Fill all fields !!!');
        return;
    }

    users.push(userObject);
    renderUsers(users);
}

document.getElementById('delete').onclick = function () {
    users[index].delete;
};

document.getElementById('send').addEventListener('click', addUser);