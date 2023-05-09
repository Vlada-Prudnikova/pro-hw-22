class Student {
  studentGrades = new Array(25);
  constructor(name, lastName, birthYear, grade) {
    this.name = name;
    this.lastName = lastName;
    this.birthYear = birthYear;
    this.grade = grade;
  }
  getAge() {
    return new Date().getFullYear() - this.birthYear;
  }

  getGrade() {
    let sum = this.studentGrades.reduce((accum, grade) => accum + grade, 0);
    return sum / this.grade.length;
  }
  counter;
  present() {
    count++;
    studentGrades.push("true");
  }
  absent() {
    count++;
    studentGrades.push("false");
  }
  summary() {
    const result = this.studentGrades.reduce((acc, value) => {
      if (value === true) {
        acc++;
      }

      return acc;
    }, 0);

    const average = result / this.studentGrades.length;

    console.log("Середнє відвідування: " + average);

    if (average > 0.9 && this.getGrade() > 90) {
      console.log("Молодець!");
    } else if (average > 0.9 || this.getGrade() > 90) {
      console.log("Добре, але можна краще");
    } else {
      console.log("Редиска");
    }
  }
}

let ggg = new Student("Kate", "Surikova", 2010, "2,3,4 ,5 ,6 , 6,7 ");
console.log(ggg.getAge());

let student2 = new Student(
  "Mark",
  "Jones",
  2013,
  "3 , 4 ,5 , 6 , 7 , 8 ,5 , 45 ,34"
);
console.log(student2.getAge());
console.log(student2.summary());
