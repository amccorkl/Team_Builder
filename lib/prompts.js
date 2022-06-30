const managerPrompts = [];

const employeePrompts = [
    { 
        type: "list",
        message: "Do you wish to add another employee to database?",
        name: "addAnother",
        choices: [
            {name: "No, Finish", value: "finish"},
            {name: "Yes, Add another employee -- an Engineer", value: "Engineer"},
            {name: "Yes, Add another employee -- an Intern", value: "Intern"},
            {name: "Yes, Add another employee -- a different title", value: "newTitle"}
        ],
        default: "done"
    },

    {type: "input",
    message: "What is the name of the employee?",
    name: "name",
    // validate that a name was provided

    },

    {type: "input",
    message: "What is the id number of the employee?",
    name: "id",
    // validate that a number was provided

    },

    {type: "input",
    message: "What is the email of the employee?",
    name: "email",
    // validate that an email was provided
    },

    {type: "input",
    message: "What is the employee's Githumb profile?",
    name: "github",
    // validate that a github profile was provided, maybe, if they have one.
    },
]

module.exports = {managerPrompts,employeePrompts}