// let you = prompt("what is ur name")
// function sayhello(you){
//     if(you == "first name"){
//         console.log("hello boss")
//         return;
//     }
//     else{
//         console.log(`hello  ${you}`);
//         return;
//     }
// }


// function newstudent(a , b){
//    let firstname = a
//    let lastname = b




 
// function findStudent(students, searchTerm) {
//    if (!Array.isArray(students)) {
//      return "Invalid input: 'students' must be an array.";
//    }
 
//    if (typeof searchTerm !== 'string') {
//      return "Invalid input: 'searchTerm' must be a string.";
//    }
 
//    searchTerm = searchTerm.toLowerCase();
 
//    for (let i = 0; i < students.length; i++) {
//      const student = students[i];
 
//      if (typeof student !== 'object' || !student.name) {
//        return "Invalid student data: Each student object must have a 'name' property.";
//      }
 
//      if (student.name.toLowerCase().includes(searchTerm)) {
//        return student;
//      }
//    }
 
//    return "Student not found.";
//  }
//  const students = [
//    { name: "Alice" },
//    { name: "Bob" },
//    { name: "Charlie" }
//  ];
 
//  const result = findStudent(students, "bob");
//  console.log(result); // Output: { name: "Bob" }
 
//  // Test with invalid inputs
//  const invalidResult1 = findStudent("notAnArray", "searchTerm");
//  console.log(invalidResult1); // Output: "Invalid input: 'students' must be an array."
 
//  const invalidResult2 = findStudent(students, 123);
//  console.log(invalidResult2); // Output: "Invalid input: 'searchTerm' must be a string."
 
//  const invalidResult3 = findStudent(students, "invalidName");
//  console.log(invalidResult3); // Output: "Student not found."

 

function findLowest (values ) {
  let lowestNumber = Infinity // start with the highest possible number
  for (let val of values){
  if (isNaN (val)) {
  console. log (`not a number: ${ val }`);
  } else {
  if (val < lowestNumber){
  lowestNumber = val
  }
  }
  }
  return lowestNumber;
 }
 
