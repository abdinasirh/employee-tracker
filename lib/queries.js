const connection = require('../db/connection');

class DB {
    constructor(connection){
        this.connection = connection;
    }
viewAllDepartment(){
    return this.connection.promise().query(
        'SELECT * FROM department'
    )
}

viewAllRoles(){
    return this.connection.promise().query(
        'SELECT role.id, role.title, role.salary, department.name AS department FROM role LEFT JOIN department on role.department_id = department.id;'
    )
}

viewAllEmployees(){
    return this.connection.promise().query(
        'SELECT employee.id, employee.first_name, employee.last_name, role.title, department.name AS department, role.salary, manager.first_name AS manager_first, manager.last_name AS manager_last FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id LEFT JOIN employee manager on manager.id = employee.manager_id'
    )
}

// addDepartment(){
//     return this.connection.promise().query(
        
//         'INSERT INTO department (name) VALUES (?)'
//     )
// }


}

// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to

// view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role



module.exports = new DB(connection);