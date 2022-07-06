//manager questions
const managerPrompts = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
    validate(answer) {
      //validate an answer was provided
      if (!answer) {
        return "Please enter your name.";
      } else {
        return true;
      }
    },
  },

  {
    type: "input",
    message: "What is your 4 digit id number?",
    name: "id",
    validate: (answer) => {
      //validate a 4 digit number was provided
      const pass = answer.match(/^[0-9]{4}$/);
      if(pass) {
        return true;
      }
      return "Please delete your prior entry and enter a 4 digit number.";
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
    validate: (answer) => {
      //validate that an email was provided
      const pass = answer.match(/^(.+)@(.+)$/);
      if(pass) {
        return true;
      }
      return "Please enter an email address."
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
    message: "What is the 4 digit id number of the engineer?",
    name: "id",
    //validate that a 4 digit number was provided
      validate: (answer) => {
      const pass = answer.match(/^[0-9]{4}$/);
      if(pass) {
        return true;
      }
      return "Please delete your prior entry and enter a 4 digit number.";
    },
  },

  {
    type: "input",
    message: "What is the email of the engineer?",
    name: "email",
    // validate that an email was provided
    validate: (answer) => {
      const pass = answer.match(/^(.+)@(.+)$/);
      if(pass) {
        return true;
      }
      return "Please enter an email address."
    },
  },

  {
    type: "input",
    message: "What is the engineer's Github profile?",
    name: "github",
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
    message: "What is the 4 digit id number of the intern?",
    name: "id",
    // validate that a 4 digit number was provided
    validate: (answer) => {
      const pass = answer.match(/^[0-9]{4}$/);
      if(pass) {
        return true;
      }
      return "Please delete your prior entry and enter a 4 digit number.";
    },
  },

  {
    type: "input",
    message: "What is the email of the intern?",
    name: "email",
    // validate that an email was provided
    validate: (answer) => {
      const pass = answer.match(/^(.+)@(.+)$/);
      if(pass) {
        return true;
      }
      return "Please enter an email address."
    },
  },

  {
    type: "input",
    message: "What is the intern's school name?",
    name: "school",
  },
];
module.exports = { managerPrompts, engineerPrompts, internPrompts };
