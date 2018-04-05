var StudentController = function(model, view){
	var students = model.getStudents([],function(students){
		view.renderStudentList(students)
	});

	$('.js-add-student-btn').on('click', function(){
		var student = model.addStudent(view.getStudent(),function(students){
			view.renderStudentList(students);
			view.clearStudentTextbox();
		});
	});

	$('.js-deactivate-student-btn').on('click',function(){
		var student = model.deactivateStudent(view.getSelectedStudents(),function(students){
			view.renderStudentList(students);
		});
	});

	$('.js-delete-student-btn').on('click', function(){
		var student = model.deleteStudent(view.getSelectedStudents(),function(students){
			view.renderStudentList(students);
		});
	});
}