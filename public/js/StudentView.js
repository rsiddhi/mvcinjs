var StudentView = function() {
	var studentView = this;
}

StudentView.prototype = {
	renderStudentList: function(students){
		var html = '';
		for(i in students){
			if(students[i].status == "inactive"){
				html += "<div class=\"js-list\"><input type=\"checkbox\" class=\"js-student-item\" data-index=\""+i+"\"/>"+"<label class=\"inactive\">"+students[i].name+"</label>"+"</div>";	
			} else{
				html += "<div class=\"js-list\"><input type=\"checkbox\" class=\"js-student-item\" data-index=\""+i+"\"/>"+"<label class=\"active\">"+students[i].name+"</label>"+"</div>";
			}
			
		}
		$('.js-student-container').html(html);
	},

	getStudent: function() {
		return $('.js-student-input').val();
	},

	clearStudentTextbox: function(){
		$('.js-student-input').val("");
	},

	getSelectedStudents: function() {
		var selectedStudents = [];
		$('.js-student-container').find('input:checked').each(function(){
			selectedStudents.push($(this).attr("data-index"));
		});console.log(selectedStudents);
		return selectedStudents;
	}
}