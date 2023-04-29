import chalk from "chalk";
const log = console.log;

const experienceQuestions = [
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
  }
];

export default experienceQuestions;