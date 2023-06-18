let employee = {
    name : 'Linda',
    streetAddress: '11 Broadway',
}
console.log(employee)

//function to return a new Object with an updated value for the key passed in.(spread operator)

function updateEmployeeWithKeyAndValue(employee, key, value){
    let employeeUpdated = {...employee};
    employeeUpdated[key] = value

    return employeeUpdated;
}

//function to mutate the employee Object passed in (destructive)

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;
    return employee;
}

//function to delete the property, does not mutate the original employee Object (non-destructive)

function deleteFromEmployeeByKey(employee, key, value){
    let employeeNew = {...employee};
    delete employeeNew[key];
    return employeeNew;

}

//function to destructively delete employee

function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee; 
}