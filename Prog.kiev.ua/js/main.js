
var obj = {
    Name: document.getElementById('name').value,
    Surname: document.getElementById('surname').value,
    Age: document.getElementById('age').value
};

$("#send").click(function () {
    alert("Name: " + obj.Name + "\nSurname: " + obj.Surname + "\nAge: " + obj.Age);
});
