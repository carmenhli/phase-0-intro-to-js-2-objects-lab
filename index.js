// Test 1 //

function updateEmployeeWithKeyAndValue(employee,key,value){
    const updatedEmployee = {...employee}
    updatedEmployee[key] = value;
    return updatedEmployee
}
const employee = {
    name: "Carmen",
    age: "28",
    streetAddress: "123 Broadway New York NY 10004",
}
const updatedEmployee = updatedEmpoyeeWithKeyAndValue(employee, "salary", 100000)
console.log(updatedEmployee)

// Test 2 //

function destructivelyUpdateEmployeeWithKeyAndValue(employeeOne,key,value){
    employeeOne[key] = value;
    return employeeOne;
}
const employeeOne = {
    name: "Carmen",
    age: 28,
    streetAddress: "123 Broadway New York NY 10004",
}
const updatedEmployeeOne = destructivelyUpdateEmployeeWithKeyAndValue(
    employeeOne,
    "streetAddress", 
    "345 Broadway New York NY 10004"
)
console.log(updatedEmployeeOne)

// Test 3 //

function deleteFromEmployeeByKey(employeeTwo,key) {
    const updatedEmployeeTwo = { ...employeeTwo };
    delete updatedEmployeeTwo[key];
    return updatedEmployeeTwo;
  }
const employeeTwo = {
    name: "Carmen",
    age: 28,
    position: "Engineer",
}
const updatedEmployeeTwo = deleteFromEmployeeByKey(
    employeeTwo,
    "age",
)
console.log(updatedEmployeeTwo)

// Test 4 destructively delete from employee by key//

function destructivelyDeleteFromEmployeeByKey(employeeThree,key){
    const updatedEmployeeThree = employeeThree
    delete updatedEmployeeThree[key];
    return updatedEmployeeThree;
}
const employeeThree = {
    name: "Sam",
    age: 28,
    postion: "Manager",
}
const updatedEmployeeThree = destructivelyDeleteFromEmployeeByKey(
    employeeThree,
    "name",
)
console.log(updatedEmployeeThree)