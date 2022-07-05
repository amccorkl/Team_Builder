//manager questions
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
    message: "What is your id number?",
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

//engineer questions
const engineerPrompts = [
  {
    type: "input",
    message: "What is the name of the engineer?",
    name: "name",
    // validate that a name was provided
    validate(answer) {
        if (!answer) {
          return "Please enter a name.";
        } else {
          return true;
        }
      },
  },

  {
    type: "input",
    message: "What is the id number of the engineer?",
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
    message: "What is the email of the engineer?",
    name: "email",
    // validate that an email was provided
    validate(answer) {
        if (!answer) {
          return "Please enter engineer's email.";
        } else {
          return true;
        }
      },
  },

  {
    type: "input",
    message: "What is the engineer's Github profile?",
    name: "github",
    // validate that a github profile was provided, maybe, if they have one.
  },
];

//intern questions
const internPrompts = [
  {
    type: "input",
    message: "What is the name of the intern?",
    name: "name",
    // validate that a name was provided
    validate(answer) {
        if (!answer) {
          return "Please enter a name.";
        } else {
          return true;
        }
      },
  },

  {
    type: "input",
    message: "What is the id number of the intern?",
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
    message: "What is the email of the intern?",
    name: "email",
    // validate that an email was provided
    validate(answer) {
        if (!answer) {
          return "Please enter intern's email.";
        } else {
          return true;
        }
      },
  },

  {
    type: "input",
    message: "What is the intern's school name?",
    name: "school",
    // validate that a github profile was provided, maybe, if they have one.
  },
];
module.exports = { managerPrompts, engineerPrompts, internPrompts };
