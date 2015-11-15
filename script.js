function getData($formElement) {
// just return some bullshit:
var firstName = 'Some';
var lastName = 'Person';
var employeenumber = 2015;
var title = 'Time Lord'
var lastreview = 5
var salary = 100000
return { firstName: firstName, lastName: lastName, employeenumber: employeenumber, title: title, lastreview: lastreview, salary: salary };

}


document.getElementById('submit').addEventListener('click', console.log('It Me!'));