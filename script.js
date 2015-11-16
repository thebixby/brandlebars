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
		var rating = employeeData.lastReview;
		var ratingClass = '';
		switch (rating) {
			case '5':
				ratingClass = 'five';
				break;
			case '4':
				ratingClass = 'four';
				break;
			case '3':
				ratingClass = 'three';
				break;
			case '2':
				ratingClass = 'two';
				break;
			case '1':
				ratingClass = 'one';
				break;
		}

		var template = '<tr>' + '<td>' + employeeData.firstName + '</td>'

		+'<td>' + employeeData.lastName + '</td>'

		+ '<td scope=\"row\">' + employeeData.employeeNumber + '</td>'

		+ '<td scope=\"row\">' + employeeData.empTitle + '</td>'

		+ '<td scope=\"row\">' + '<span class=\"rating ' + ratingClass + '\">' + employeeData.lastReview + '</span>' + '</td>'

		+ '<td scope=\"row\">' + '<span class=\"dollar\">' + "$" + '</span>' + employeeData.salary + '</td>'

		+ '<td scope=\"row\">' + '<button class=\"deleteEmp\" name=\"deleteEmp\">' + 'Delete Employee' + '</button>' + '</td>' + '</tr>';


		return template;


	}

	$('.employeeList').on('click', '.deleteEmp', function() {
		console.log('Delete Registered');
		$(this).closest('tr').remove();
	});

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


});