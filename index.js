const employee={
    name: "Quachell",
    streetAddress:"1317 burnet ave",
}




function updateEmployeeWithKeyAndValue(employee, key, value) {
    // implementation goes here
    // Create a new object to store the updated employee information
    const updatedEmployee = { ...employee };

    // Add the new key-value pair to the updatedEmployee object
    updatedEmployee[key] = value;
  
    // Return the updatedEmployee object
    return updatedEmployee;
}

  function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   // Update the employee object directly with the given key and value
  employee[key] = value;

  // Return the entire updated employee object
  return employee; // implementation goes here
  }
  function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key]
    return updatedEmployee;
    // implementation goes here
  }

  function destructivelyDeleteFromEmployeeByKey(employee, key) {
    // implementation goes here
    delete employee[key]
    return employee;
  }
