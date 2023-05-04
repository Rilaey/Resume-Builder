const generateMyResume = (data) => {
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
            <h1>${data.fullName}</h1>
          </div>
          <div class="header-location-div">
            <h3>${data.city}, ${data.state}</h3>
          </div>
          <div class="header-links-div">
            <h3>
              LinkedIn: ${data.linkedIn} |
              Github: ${data.github} | Portfolio:
              ${data.portfolio}
            </h3>
          </div>
        </header>

        <section class="summary-section">
          <div class="summary-header-div">
            <h2>Summary</h2>
          </div>
          <div class="summary-paragraph-div">
            <p>
                ${data.personalSummary}
            </p>
          </div>
        </section>

        <section class="tech-skills-section">
          <div class="tech-skills-header">
            <h2>Technical Skills</h2>
          </div>
          <div class="tech-skills-paragraph">
            <p>
              Front end skills: ${data.frontEndSkills}
            </p>
            <p>
              Back end skills: ${data.backEndSkills}
            </p>
          </div>
        </section>

        <section class="projects-section">
          <div class="projects-header">
            <h2>Projects</h2>
          </div>
          <div class="projects-content">
            <h4>
              ${data.projectTitle} |
            <a href="${data.projectGithubLink}"
                >${data.projectGithubLink}</a
              >
              |
              <a href="${data.projectApplicationLink}"
                >${data.projectApplicationLink}</a
              >
            </h4>
            <ul>
              <li>
               ${data.keyItemOne}
              </li>
              <li>
                ${data.keyItemTwo}
              </li>
              <li>
                ${data.keyItemThree}
              </li>
              <li>Front end tools used: ${data.frontEndToolsUsed}</li>
              <li>Back end tools used: ${data.backEndToolsUsed}</li>
            </ul>
          </div>
        </section>

        <section class="experience-section">
          <div class="experience-header">
            <h2>Experience</h2>
          </div>

          <div class="work-history">
            <div class="work-title">
              <p><strong>${data.jobTitle}</strong></p>
              <p><strong>${data.companyName}</strong></p>
            </div>
            <div class="work-time">
              <p>${data.startYear}-${data.endYear}</p>
              <p>${data.companyCity}, ${data.companyState}</p>
            </div>
          </div>

          <div class="work-summary">
            <p>
              ${data.jobSummary}
            </p>
          </div>

          <div class="key-list">
            <ul>
              <li>
                ${data.jobKeyPointOne}
              </li>
              <li>${data.jobKeyPointTwo}</li>
              <li>${data.jobKeyPointThree}</li>
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
                >${data.major}: ${data.universityName}, ${data.universityCity},
                ${data.universityState}</strong>
              >
            </p>
          </div>

          <div class="education-summary">
            <p>
              ${data.educationSummary}
            </p>
          </div>
        </section>
      </body>
    </html>
    `;
};

export default generateMyResume;
