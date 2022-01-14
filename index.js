const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");
const db = require("./lib/queries");
const { addDepartment, connection } = require("./lib/queries");
//const connection = require('./db/connection');

const questions = [
  {
    name: "action",
    type: "list",
    message: "what would you like to do?",
    choices: [
      {
        name: "View All Departments",
        value: "view_departments",
      },
      {
        name: "View All Roles",
        value: "view_roles",
      },
      {
        name: "View All Employees",
        value: "view_employees",
      },
      {
        name: "Add a Department",
        value: "add_department",
      },
      {
        name: "Add a Role",
        value: "add_role",
      },
      {
        name: "Add an Employee",
        value: "add_employee",
      },
      {
        name: "Update an Employee Role",
        value: "update_employee",
      },
      {
        name: "Quit",
        value: "quit",
      },
    ],
  },
];

actions();

function actions() {
  inquirer.prompt(questions).then((data) => {
    let choice = data.action;
    switch (choice) {
      case "view_departments":
        findDepartments();
        break;

      case "view_roles":
        findRoles();
        break;

      case "view_employees":
        findEmployees();
        break;

      case "add_department":
        addByDepartment();
        break;

      case "add_role":
        addRole();
        break;
      case "add_employee":
        addEmployee();
        break;

      case "update_employee":
        updateEmployee();
        break;
      default:
        quit();
    }
  });
}

function findDepartments() {
  db.viewAllDepartment()
    .then(([departments]) => {
      console.table(departments);
    })
    .then(() => actions());
}

function findRoles() {
  db.viewAllRoles()
    .then(([roles]) => {
      console.table(roles);
    })
    .then(() => actions());
}

function findEmployees() {
  db.viewAllEmployees()
    .then(([employees]) => {
      console.table(employees);
    })
    .then(() => actions());
}

function addByDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "department",
        message: "What department would like to add?",
      },
    ])
    .then(function (data) {
      connection.query("INSERT INTO department(name) VALUES(?)", [
        data.department,
      ]);
      actions();
    });
}

function addRole() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "role_name",
        message: "What role would you like to add?",
      },

      {
        type: "input",
        name: "salary",
        message: "What is the salary for this role?",
      },
      {
        type: "list",
        name: "department",
        message: "What department does the role belong to?",
        choices: ["IT", "Finance", "Security", "Networking", "HR"],
      },
    ])
    .then(function (data) {
      connection.query(
        "INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)",
        [data.role_name, data.salary, data.choices]
      );
      console.table(data);
      actions();
    });
}

function addEmployee() {
  db.viewAllRoles()
    .then((roles) => {
      //put the code I gave you here, including the inquirer prompt.
      var roleOptions = roles.map((role) => {
        return { name: role.name, value: role.id };
      });

      inquirer.prompt([
        {
          type: "input",
          name: "first_name",
          message: "What is the first name of the employee?",
        },

        {
          type: "input",
          name: "last_name",
          message: "What is the last name of the employee?",
        },
        {
          type: "list",
          name: "role",
          message: "What role should the employee have?",
          choices: roleOptions,
        },
        {
          type: "input",
          name: "manager",
          message: "who is the employee manager?",
        },
      ]);
    })
    .then(function (data) {
        console.log(data)
      connection.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [name.first_name, name.last_name, name.role_id, name.manager_id]
      );
      console.table(data);
      actions();
    });
}

function updateEmployee() {}

function quit() {}
