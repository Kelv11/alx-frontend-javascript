// 1. Teacher interface
interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

// Example teacher
const teacher3: Teacher = {
  firstName: "Kelvin",
  fullTimeEmployee: false,
  lastName: "Njuguna",
  location: "Nairobi",
  contract: false,
};
console.log(teacher3);

// 2. Directors interface extending Teacher
interface Directors extends Teacher {
  numberOfReports: number;
}

// Example director
const director1: Directors = {
  firstName: "Patrick",
  lastName: "Muthee",
  location: "Kitui",
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

// 3. printTeacherFunction interface and implementation
interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
  return `${firstName.charAt(0)}. ${lastName}`;
};

console.log(printTeacher("Lucy", "Nzaumi"));

// 1. Interface for the constructor
interface StudentConstructor {
  firstName: string;
  lastName: string;
}

// 2. Interface for the class methods
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// 3. Implementing the class using the interfaces
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor({ firstName, lastName }: StudentConstructor) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage
const student = new StudentClass({ firstName: "Kelvin", lastName: "Mwangi" });
console.log(student.displayName()); // Kelvin
console.log(student.workOnHomework()); // Currently working
