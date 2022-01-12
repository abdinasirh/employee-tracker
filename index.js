const inquirer = require("inquirer");
const mysql = require("mysql2");
const consoleTable = require("console.table");
const db = require('./lib/queries')
const connection = require('./db/connection');



const questions = [
    
    {

        name: "action",
        type: "list",
        message: "what would you like to do?",
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees", 
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update an Employee Role",
            "Quit"
            ]
        
    }

];