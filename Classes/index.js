import Teacher from "./teacher.js";

const teacher = new Teacher('Abby', 'Bsc.');
teacher.walk();

//Without the braces teacher is a default export.
//This requires a default keyword on the class
