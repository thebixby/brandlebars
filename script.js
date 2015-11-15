$(function() {

	function Employee(firstName, lastName, employeeNumber, empTitle, lastReview, salary) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.employeeNumber = employeeNumber;
		this.empTitle = empTitle;
		this.lastReview = lastReview;
		this.salary = salary;

	}


	function getData($formElement) {
		// just return some bullshit:
		var firstName = $formElement[0];
		var lastName = $formElement[1];
		var employeeNumber = $formElement[2];
		var empTitle = $formElement[3];
		var lastReview = $formElement[4];
		var salary = $formElement[5];


		var employee = new Employee(firstName, lastName, employeeNumber, empTitle, lastReview, salary);

		return employee;

	}

	$('form#myForm').on('submit', function(event) {
		event.preventDefault();
		console.log(event);
		var formData = $(this).serializeArray();
		console.log(formData);
		var results = getData(formData);
		console.log(results);

	});


	// var form = document.getElementById('myForm').elements;

	// // var submitted = false;

	// document.getElementById('deleteEmp').addEventListener('click', girlbye);

	// function girlbye() {
	// 	console.log('Good day to you, Felicia');
	// }
});