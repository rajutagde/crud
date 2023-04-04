var count = 0;
var students = [];

function addStudent() {

    const nameValue = document.getElementById('name').value;
    const emailValue = document.getElementById('email').value;
    const ageValue = document.getElementById('age').value;
    const gradeValue = document.getElementById('grade').value;
    const degreeValue = document.getElementById('degree').value;

    //Inputs Mandatory, Blank will not be submitted.
    if (nameValue == '' || emailValue == '' || ageValue == '' || gradeValue == '' || degreeValue == "") {
        alert("All fields are required!")
        return;
    }
}