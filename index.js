const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");
const db = require("./lib/queries");
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
      let choice = data.action
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
        addDepartment();
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
    
}

function findEmployees() {}

function addDepartment() {}

function addRole() {}

function addEmployee() {}

function updateEmployee() {}

function quit() {}
