let name = "dhanush k";
let age = 19;
let isstudent = true;
let stringtype = "hello world ";
let numbertype = 19;
let booleantype = false;
let nulltype = null;
let undefinedtype;
let objecttype = {
    name : "dhanush",
    role : "student",
    stack : "MERN"
};
let arraytype =[
    "node js",
    "expressjs",
    "inferno js",
    "mongo db",
    "react js",
    "php",
    "sql",
    "ci/cd",
    "linux"
];

console.log("<==========variables==========>");
console.log("name:",name,typeof name);
console.log("age:",age,typeof age);
console.log("is student:",isstudent,typeof isstudent);
console.log("stringtype:",stringtype,typeof stringtype);
console.log("number type:",numbertype,typeof numbertype);
console.log("boolean type:", booleantype,typeof booleantype);
console.log("null type:",nulltype,typeof nulltype);
console.log("object type:",objecttype,typeof objecttype);
console.log("array type:",arraytype,typeof arraytype);
console.log(arraytype[2])
console.log("today is my day one of my learning")
console.log("template type");
console.log(`i am ${name},my role is:${objecttype.role},my stack is${objecttype.stack}`)
console.log(`hi i am ${name} and i am ${age} years old  and i am a${objecttype.role}  and i am learning ${objecttype.stack} stack development`)



