// Write your solution in this file!
const employee = {
    name: "Someone",
    streetAddress: "11 Broadway",
}

function updateEmployeeWithKeyAndValue(employee, name, value) {
    const newInfo = {...employee};
    newInfo[name] = value;
    return newInfo
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, name, value) {
    employee[name] = value
    return employee
}

function deleteFromEmployeeByKey(employee, name) {
    const newInfo = {...employee};
    delete newInfo.name
    return newInfo
}

function destructivelyDeleteFromEmployeeByKey(employee, name) {
    delete employee.name
    return employee
}