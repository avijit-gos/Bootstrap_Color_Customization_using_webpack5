
/** importing Style file here **/
import "./scss/index.scss";



console.log('Function 1');
let student = {
    name: 'xyz',
    age: 25,
}
const myStudent = {
    ...student, country: 'India'
}
console.log(myStudent)
console.log(student)