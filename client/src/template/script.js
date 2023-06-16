const template = (formState) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="./styles.css" rel="stylesheet" />
        <title>Resume</title>
      </head>
      <body>
        <header class="header-layout">
          <div class="header-name-div">
            <h1>${formState.fullName}</h1>
          </div>
          <div class="header-location-div">
            <h3>${formState.city}, ${formState.state}</h3>
          </div>
          <div class="header-links-div">
            <h3>
              LinkedIn: ${formState.linkedIn} |
              Github: ${formState.github} | Portfolio:
              ${formState.portfolio}
            </h3>
          </div>
        </header>

        <section class="summary-section">
          <div class="summary-header-div">
            <h2>Summary</h2>
          </div>
          <div class="summary-paragraph-div">
            <p>
                ${formState.personalSummary}
            </p>
          </div>
        </section>

        <section class="tech-skills-section">
          <div class="tech-skills-header">
            <h2>Technical Skills</h2>
          </div>
          <div class="tech-skills-paragraph">
            <p>
              Front end skills: ${formState.frontEndSkills}
            </p>
            <p>
              Back end skills: ${formState.backEndSkills}
            </p>
          </div>
        </section>

        <section class="projects-section">
          <div class="projects-header">
            <h2>Projects</h2>
          </div>
          <div class="projects-content">
            <h4>
              ${formState.projectTitle} |
            <a href="${formState.projectGithubLink}"
                >${formState.projectGithubLink}</a
              >
              |
              <a href="${formState.projectionApplicationLink}"
                >${formState.projectionApplicationLink}</a
              >
            </h4>
            <ul>
              <li>
               ${formState.keyItemOne}
              </li>
              <li>
                ${formState.keyItemTwo}
              </li>
              <li>
                ${formState.keyItemThree}
              </li>
              <li>Front end tools used: ${formState.frontEndToolsUsed}</li>
              <li>Back end tools used: ${formState.backEndToolsUsed}</li>
            </ul>
          </div>
        </section>

        <section class="experience-section">
          <div class="experience-header">
            <h2>Experience</h2>
          </div>

          <div class="work-history">
            <div class="work-title">
              <p><strong>${formState.jobTitle}</strong></p>
              <p><strong>${formState.companyName}</strong></p>
            </div>
            <div class="work-time">
              <p>${formState.startYear}-${formState.endYear}</p>
              <p>${formState.companyCity}, ${formState.companyState}</p>
            </div>
          </div>

          <div class="work-summary">
            <p>
              ${formState.jobSummary}
            </p>
          </div>

          <div class="key-list">
            <ul>
              <li>
                ${formState.jobKeyPointOne}
              </li>
              <li>${formState.jobKeyPointTwo}</li>
              <li>${formState.jobKeyPointThree}</li>
            </ul>
          </div>
        </section>

        <section class="education-section">
          <div class="education-header">
            <h2>Education</h2>
          </div>

          <div class="education-title">
            <p>
              <strong
                >${formState.major}: ${formState.universityName}, ${formState.universityCity},
                ${formState.universityState}</strong>
              >
            </p>
          </div>

          <div class="education-summary">
            <p>
              ${formState.universitySummary}
            </p>
          </div>
        </section>
      </body>
    </html>
    `;
};

export default template;
