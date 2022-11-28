function studentGradeGenerator(student, grade) {
    student = prompt("Enter your name: ");
    grade = prompt("Enter your grade: ");
    if (grade >= 79 && grade <= 100) {
        console.log(`${student} you scored an A`)
    }
    else if (grade >= 60 && grade < 79) {
        console.log(`${student} you scored a B`)
    }
    else if (grade >= 49 && grade <= 59) {
        console.log(`${student} you scored a C`)
    }
    else if (grade >= 40 && grade < 49) {
        console.log(`${student} you scored a  D`)
    }
    else if (grade >= 0 && grade < 40) {
        console.log(`${student} you scored an E`)
    }
}