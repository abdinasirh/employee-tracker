
USE employee_DB;

INSERT INTO department (name)
VALUES ("IT");
INSERT INTO department (name)
VALUES ("Finance");
INSERT INTO department (name)
VALUES ("Security");
INSERT INTO department (name)
VALUES ("Networking");
INSERT INTO department (name)
VALUES ("HR");

INSERT INTO role (title, salary, department_id)
VALUES ("DevOps Engineer", 110000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("Software Engineer", 130000, 2);
INSERT INTO role (title, salary, department_id)
VALUES ("Security Engineer", 100000, 3);
INSERT INTO role (title, salary, department_id)
VALUES ("Network Engineer", 110000, 4);
INSERT INTO role (title, salary, department_id)
VALUES ("Lead Engineer", 150000, 1);
INSERT INTO role (title, salary, department_id)
VALUES ("HR Analyst", 70000, 5);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Avish", "Khan", 3, 2);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kris", "john", 2, 1);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Dean", 5, 3);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chris", "Becker", 3, 4);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kelly", "White", 4, 6);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Mike", "Blake", 6, 8);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Tompson", "Lary", 4, 7);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Kyle", "Chuck", 2, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Chuck", "Anderson", 6, null);
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jason", "Bob", 7, 3);