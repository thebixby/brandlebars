$(function() {

	function Employee(firstName, lastName, employeeNumber, empTitle, lastReview, salary) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.employeeNumber = employeeNumber;
		this.empTitle = empTitle;
		this.lastReview = lastReview;
		this.salary = salary;

	}


	function createEmployeeFromForm($formElement) {
		// just return some bullshit:
		var firstName = $formElement[0].value;
		var lastName = $formElement[1].value;
		var employeeNumber = $formElement[2].value;
		var empTitle = $formElement[3].value;
		var lastReview = $formElement[4].value;
		var salary = $formElement[5].value;


		var employee = new Employee(firstName, lastName, employeeNumber, empTitle, lastReview, salary);

		return employee;

	}

	function createFakeTemplate(employeeData) {
		console.log(employeeData);
		var template = '<tr>'
			+ '<td>'
			+ employeeData.firstName
			+ '</td>'

			+ '<td>'
			+ employeeData.lastName
			+ '</td>'

			+ '<td scope=\"row\">'
			+ employeeData.employeeNumber
			+ '</td>'

			+ '<td scope=\"row\">'
			+ employeeData.empTitle
			+ '</td>'

			+ '<td scope=\"row\">'
			+ '<span class=\"rating five\">'
			+ employeeData.lastReview
			+ '</span>'
			+ '</td>'

			+ '<td scope=\"row\">'
			+ '<span class=\"dollar\">'
			+ "$"
			+ '</span>'
			+ employeeData.salary
			+ '</td>'

			+ '<td scope=\"row\">'
			+ '<button id=\"deleteEmp\" name=\"deleteEmp\">'
			+ 'Delete Employee'
			+ '</button>'
			+ '</td>'
			+ '</tr>';

			return template;


			

	}

	$('form#myForm').on('submit', function(event) {
		// HTML --> Data
		event.preventDefault();
		var formData = $(this).serializeArray();
		var employeeObject = createEmployeeFromForm(formData);
		console.log(employeeObject);

		// Data --> HTML
		var fakeResults = createFakeTemplate(employeeObject);
		var $newListItem = $(fakeResults);
		$('.employeeList').append($newListItem);

	});


	// var form = document.getElementById('myForm').elements;

	// // var submitted = false;

	// document.getElementById('deleteEmp').addEventListener('click', girlbye);

	// function girlbye() {
	// 	console.log('Good day to you, Felicia');
	// }
});