import chalk from "chalk";
const log = console.log;

const allQuestions = [
  {
    type: "input",
    name: "fullName",
    message: chalk.red("What is your full name?"),
    validate: (fullName) => {
      if (!fullName) {
        log(chalk.red("/// PLEASE INPUT YOUR FULL NAME ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "city",
    message: chalk.red("What city are you located in?"),
    validate: (city) => {
      if (!city) {
        log(chalk.red("/// PLEASE INPUT YOUR CITY ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "state",
    message: chalk.red("What state are you located in?"),
    validate: (state) => {
      if (!state) {
        log(chalk.red("/// PLEASE INPUT YOUR STATE ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "linkedIn",
    message: chalk.red("What is your linkedIn url?"),
    validate: (linkedIn) => {
      if (!linkedIn) {
        log(chalk.red("/// PLEASE INPUT YOUR LINKEDIN URL ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "github",
    message: chalk.red("What is your github url?"),
    validate: (github) => {
      if (!github) {
        log(chalk.red("/// PLEASE INPUT YOUR GITHUB URL ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "portfolio",
    message: chalk.red("What is your portfolio url?"),
    validate: (portfolio) => {
      if (!portfolio) {
        log(chalk.red("/// PLEASE INPUT YOUR PORTFOLIO URL ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "personalSummary",
    message: chalk.red("What is your personal summary?"),
    validate: (personalSummary) => {
      if (!personalSummary) {
        log(chalk.red("/// PLEASE INPUT YOUR SUMMARY ///"));
      } else {
        return true;
      }
    }
  },
  {
    input: "input",
    name: "frontEndSkills",
    message: chalk.red(
      "What are your front end skills? Separate each skill with a comma."
    ),
    validate: (frontEndSkills) => {
      if (!frontEndSkills) {
        log(chalk.red("/// PLEASE INPUT YOUR FRONT END SKILLS ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "backEndSkills",
    message: chalk.red(
      "What are your back end skills? Separate each skill with a comma."
    ),
    validate: (backEndSkills) => {
      if (!backEndSkills) {
        log(chalk.red("/// PLEASE INPUT YOUR BACK END SKILLS ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "major",
    message: "What was your major in college?",
    validate: (major) => {
      if (!major) {
        log(chalk.red("/// PLEASE INPUT YOUR COLLEGE COLLEGE ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "universityName",
    message: "What was the name of your university",
    validate: (universityName) => {
      if (!universityName) {
        log(chalk.red("/// PLEASE INPUT YOUR UNIVERSITY NAME ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "universityCity",
    message: "What city was your university located?",
    validate: (universityCity) => {
      if (!universityCity) {
        log(chalk.red("/// PLEASE INPUT YOUR UNIVERSITY CITY ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "universityState",
    message: "What state was your university located?",
    validate: (universityState) => {
      if (!universityState) {
        log(chalk.red("/// PLEASE INPUT YOUR UNIVERSITY STATE ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "universitySummary",
    message: "Please write a summary of your education experience.",
    validate: (universitySummary) => {
      if (!universitySummary) {
        log(chalk.red("/// PLEASE INPUT YOUR UNIVERSITY SUMMARY ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "jobTitle",
    message: chalk.magenta("Please input your most recent job title."),
    validate: (jobTitle) => {
      if (!jobTitle) {
        log(chalk.red("/// PLEASE INPUT YOUR FIRST JOB TITLE ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "companyName",
    message: chalk.magenta("Please input the company name."),
    validate: (companyName) => {
      if (!companyName) {
        log(chalk.red("/// PLEASE INPUT YOUR COMPANY NAME ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "startYear",
    message: chalk.magenta(
      "What year did you start here? Please type in 4 digit format."
    ),
    validate: (startYear) => {
      if (!startYear) {
        log(chalk.red("/// PLEASE INPUT YOUR START YEAR ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "endYear",
    message: chalk.magenta(
      "What year did you stop working here? If currently employed here type Present"
    ),
    validate: (endYear) => {
      if (!endYear) {
        log(chalk.red("/// PLEASE INPUT YOUR END DATE ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "companyCity",
    message: chalk.magenta("What city was this employer located?"),
    validate: (companyCity) => {
      if (!companyCity) {
        log(chalk.red("/// PLEASE INPUT YOUR COMPANY CITY ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "companyState",
    message: chalk.magenta("What state was this employer located?"),
    validate: (companyState) => {
      if (!companyState) {
        log(chalk.red("/// PLEASE INPUT YOUR COMPANY STATE ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "jobSummary",
    message: chalk.magenta("Describe your role at this job."),
    validate: (jobSummary) => {
      if (!jobSummary) {
        log(chalk.red("/// PLEASE INPUT YOUR JOB SUMMARY ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "jobKeyPointOne",
    message: chalk.magenta(
      "What is your first key accomplishment at this company?"
    ),
    validate: (jobKeyPointOne) => {
      if (!jobKeyPointOne) {
        log(chalk.red("/// PLEASE INPUT YOUR FIRST KEY ACCOMPLISHMENT ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "jobKeyPointTwo",
    message: chalk.magenta(
      "What is your second key accomplishment at this company? If none enter NONE"
    ),
    validate: (jobKeyPointTwo) => {
      if (!jobKeyPointTwo) {
        log(chalk.red("/// PLEASE INPUT YOUR SECOND KEY ACCOMPLISHMENT ///"));
      } else if (jobKeyPointTwo == "none") {
        return true;
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "jobKeyPointThree",
    message: chalk.magenta(
      "What is your third key accomplishment at this company? If none enter NONE"
    ),
    validate: (jobKeyPointThree) => {
      if (!jobKeyPointThree) {
        log(chalk.red("/// PLEASE INPUT YOUR THIRD KEY ACCOMPLISHMENT ///"));
      } else if (jobKeyPointThree == "none") {
        return true;
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "projectTitle",
    message: chalk.blue("Please enter your project title."),
    validate: (projectTitle) => {
      if (!projectTitle) {
        log(chalk.red("/// PLEASE INPUT YOUR PROJECT TITLE ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "projectGithubLink",
    message: chalk.blue("Please enter your application github link."),
    validate: (projectGithubLink) => {
      if (!projectGithubLink) {
        log(chalk.red("/// PLEASE INPUT YOUR APPLICATION GITHUB LINK ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "projectionApplicationLink",
    message: chalk.blue("Please enter your live application link."),
    validate: (projectApplicationLink) => {
      if (!projectApplicationLink) {
        log(chalk.red("/// PLEASE INPUT YOUR LIVE APPLICATION LINK ///"));
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "keyItemOne",
    message: chalk.blue(
      "Please enter your first bullet point of this project."
    ),
    validate: (keyItemOne) => {
      if (!keyItemOne) {
        log(
          chalk.red(
            "/// PLEASE INPUT YOUR FIRST BULLET POINT FOR THIS PROJECT ///"
          )
        );
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "keyItemTwo",
    message: chalk.blue(
      "Please enter your second bullet point of this project. IF NO MORE BULLET POINTS ENTER NONE"
    ),
    validate: (keyItemTwo) => {
      if (!keyItemTwo) {
        log(
          chalk.red(
            "/// PLEASE INPUT YOUR SECOND BULLET POINT FOR THIS PROJECT ///"
          )
        );
      } else if (keyItemTwo == "none") {
        return true;
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "keyItemThree",
    message: chalk.blue(
      "Please enter your third bullet point of this project."
    ),
    validate: (keyItemThree) => {
      if (!keyItemThree) {
        log(
          chalk.red(
            "/// PLEASE INPUT YOUR THIRD BULLET POINT FOR THIS PROJECT ///"
          )
        );
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "frontEndToolsUsed",
    message: chalk.blue("What front end tools did you use for this project?"),
    validate: (frontEndToolsUsed) => {
      if (!frontEndToolsUsed) {
        log(
          chalk.red(
            "/// PLEASE INPUT YOUR FRONT END TOOLS USED FOR THIS PROJECT ///"
          )
        );
      } else {
        return true;
      }
    }
  },
  {
    type: "input",
    name: "backEndToolsUsed",
    message: chalk.blue("What back end tools did you use for this project?"),
    validate: (backEndToolsUsed) => {
      if (!backEndToolsUsed) {
        log(
          chalk.red(
            "/// PLEASE INPUT YOUR BACK END TOOLS USED FOR THIS PROJECT ///"
          )
        );
      } else {
        return true;
      }
    }
  }
];

export default allQuestions;