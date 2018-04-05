var StudentModel = function() {
	var studentModel = this;
	this.students = [];
}

StudentModel.prototype = {
	getStudents: function(params, callback){
		callback(this.students);
	},

	addStudent: function(student,callback){
		this.students.push({
			name: student,
			status: "active"
		});
		callback(this.students);
	},

	deactivateStudent: function(studentIndex, callback){
		studentModel = this;
		$(studentIndex).each(function(){
			studentModel.students[this].status = "inactive";
		});
		
		callback(this.students);
	},

	deleteStudent: function(studentIndex, callback){
		studentModel = this;
		$(studentIndex).each(function(){
			studentModel.students.splice(this,1);
		});
		callback(this.students);
	}

}