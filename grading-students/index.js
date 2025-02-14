function gradingStudents(grades) {
  return grades.slice(1).map((grade) => {
    if (grade < 38) return grade;
    let multipleOf5 = Math.ceil(grade / 5) * 5;
    return multipleOf5 - grade < 3 ? multipleOf5 : grade;
  });
}
grades = [4, 73, 67, 38, 33];
const result = gradingStudents(grades);
console.log(result);
