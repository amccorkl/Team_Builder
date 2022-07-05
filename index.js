const { managerPrompts, engineerPrompts, internPrompts } = require("./lib/prompts");
const { createHtml, managerCard, engineerCard, internCard } = require("./html_template");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const fs = require("fs");
const inquirer = require("inquirer");
const path = require("path");

//array for employees entered in database
let employeesEntered = [];

//prompt the manager first to input information about themself and then add other employees
const init = function () {
  inquirer.prompt(managerPrompts).then(({ name, id, email, officeNumber }) => {
    const manager = new Manager(name, id, email, officeNumber);

    employeesEntered.push(manager);
    menu();
  });
};

//availability of manager to say to adding another employee after each entry
const menu = function () {
  inquirer.prompt({
    type: "list",
    message: "Do you wish to add another employee to the database?",
    name: "addAnother",
    choices: [
      {
        name: "No, Finish",
        value: "finish",
      },
      {
        name: "Yes, Add another employee -- an Engineer",
        value: "Engineer",
      },
      {
        name: "Yes, Add another employee -- an Intern",
        value: "Intern",
      },
      // {
      //   name: "Yes, Add another employee -- a different title",
      //   value: "newTitle",
      // },
    ],

    //if engineer title chosen
  }).then(answer => {
    if(answer.addAnother === "Engineer") {
        inquirer.prompt(engineerPrompts).then(({name, id, email, github}) => {
            const engineer = new Engineer(name, id, email, github);
            employeesEntered.push(engineer);
            menu();
        })
        //if intern title chosen
    } else if (answer.addAnother === "Intern") {
        inquirer.prompt(internPrompts).then(({name, id, email, school}) => {
            const intern = new Intern(name, id, email, school);
            employeesEntered.push(intern);
            menu();
        })
    } else { 

        //this isn't working yet
        fs.writeFileSync("./dist/index.html", createHtml,(employeesEntered), function(err) {
          if(err) {
            return console.error(err);
            
            //not working yet
          } else {
            createHtml.filter(employeesEntered)
            return (managerCard, engineerCard, internCard);
          }

        });

        
    }
  })

};


init();
