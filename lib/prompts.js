const managerPrompts = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
    validate(answer) {
      if (!answer) {
        return "Please enter your name.";
      } else {
        return true;
      }
    },
  },

  {
    type: "input",
    message: "What is your Id?",
    name: "id",
    validate(answer) {
      if (!answer) {
        return "Please enter your id.";
      } else {
        return true;
      }
    },
  },

  {
    type: "input",
    message: "What is your office number?",
    name: "officeNumber",
    validate(answer) {
      if (!answer) {
        return "Please enter your office number.";
      } else {
        return true;
      }
    },
  },

  {
    type: "input",
    message: "What is your email?",
    name: "email",
    validate(answer) {
      if (!answer) {
        return "Please enter your email address.";
      } else {
        return true;
      }
    },
  },
];

const engineerPrompts = [
  {
    type: "input",
    message: "What is the name of the employee?",
    name: "name",
    // validate that a name was provided
    validate(answer) {
        if (!answer) {
          return "Please enter your name.";
        } else {
          return true;
        }
      },
  },

  {
    type: "input",
    message: "What is the id number of the employee?",
    name: "id",
    // validate that a number was provided
    validate(answer) {
        if (!answer) {
          return "Please enter an id number.";
        } else {
          return true;
        }
      },
  },

  {
    type: "input",
    message: "What is the email of the employee?",
    name: "email",
    // validate that an email was provided
    validate(answer) {
        if (!answer) {
          return "Please enter employee's email.";
        } else {
          return true;
        }
      },
  },

  {
    type: "input",
    message: "What is the employee's Githumb profile?",
    name: "github",
    // validate that a github profile was provided, maybe, if they have one.
  },
];

const internPrompts = [
  {
    type: "input",
    message: "What is the name of the employee?",
    name: "name",
    // validate that a name was provided
    validate(answer) {
        if (!answer) {
          return "Please enter your name.";
        } else {
          return true;
        }
      },
  },

  {
    type: "input",
    message: "What is the id number of the employee?",
    name: "id",
    // validate that a number was provided
    validate(answer) {
        if (!answer) {
          return "Please enter an id number.";
        } else {
          return true;
        }
      },
  },

  {
    type: "input",
    message: "What is the email of the employee?",
    name: "email",
    // validate that an email was provided
    validate(answer) {
        if (!answer) {
          return "Please enter employee's email.";
        } else {
          return true;
        }
      },
  },

  {
    type: "input",
    message: "What is the employee's school name?",
    name: "school",
    // validate that a github profile was provided, maybe, if they have one.
  },
];
module.exports = { managerPrompts, engineerPrompts, internPrompts };
