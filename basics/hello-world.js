var grades = [20,60,90,100];

var totalGrade = 0;

grades.forEach(function (grade){
	totalGrade += grade;
});


avgGrade = totalGrade/grades.length;
console.log('total:'+''+totalGrade)
console.log('Average:'+''+avgGrade);