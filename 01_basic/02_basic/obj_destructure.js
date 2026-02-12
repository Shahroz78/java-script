//>>>>>>>>>>>>( Ojbect Destructuring )<<<<<<<<<<<<<

// Object Destructuring is a powerful feature in JavaScript that allows you to extract values from objects and assign them to variables in a more concise and readable way.
//  It is particularly useful when working with complex objects or when you want to extract specific properties from an object without having to access them individually.

const Course = {
    courseName: "JavaScript",
    courseDuration: "3 months",
    courseInstructor: "shahroz khan",
    courseLevel: "Beginner"
}
///console.log(Course.courseName);
console.log(Course.courseLevel); // Output: "Beginner" (accessing the courseLevel property using dot notation)
// another way to access the courseLevel property using object destructuring
const { courseLevel } = Course;
//console.log(courseLevel); // Output: "Beginner" (accessing the courseLevel property using object destructuring)
const { courseName } = Course;
console.log(courseName); // Output: "JavaScript" (accessing the courseName property using object destructuring)
// we can also rename the variable while destructuring
const { courseInstructor: instructor } = Course;
console.log(instructor); // Output: "shahroz khan" (accessing the courseInstructor property and renaming it to instructor using object destructuring)

// json data
/*{
    "Name": "shahroz khan",
    "courseName": "JavaScript",
    "courseDuration": "3 months",
    "courseInstructor": "shahroz khan",
    "courseLevel": "Beginner"   
}*/
[
    {},
    {},
    {}
]