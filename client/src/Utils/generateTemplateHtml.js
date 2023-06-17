export const styles = `
  * {
  margin: auto 0;
  background-color: gray;
}

.header-layout, .tech-skills-section, .summary-section, .education-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 10px auto;
}

.header-name-div,
.header-location-div,
.header-links-div,
.summary-header-div,
.summary-paragraph-div,
.tech-skills-header,
.tech-skills-paragraph,
.projects-header,
.projects-content,
.work-history,
.experience-header,
.work-summary,
.degree,
.education-summary,
.education-title,
.education-header {
  margin: 5px 100px;
}

.projects-section, .experience-section {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.work-history {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    text-align: center;
}

.work-location, .work-time {
    margin: 5px 50px;
}
`;

export const generateTemplateHtml = (formState) => {
  // Generate your HTML template with placeholders
  const template = `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>${styles}</style>
        <title>Resume</title>
      </head>
      <body>
        <header class="header-layout">
          <div class="header-name-div">
            <h1>${formState.firstName} ${formState.lastName}</h1>
          </div>
          <div class="header-location-div">
            <h3>${formState.personalCity}, ${formState.personalState}</h3>
          </div>
          <div class="header-links-div">
            <h3>
              LinkedIn: ${formState.linkedIn} | Email: ${formState.email} |
              Github: ${formState.gitHub} | Portfolio:
              ${formState.portfolio} | Phone: ${formState.phoneNumber}
            </h3>
          </div>
        </header>

        <section class="summary-section">
          <div class="summary-header-div">
            <h2>Summary</h2>
          </div>
          <div class="summary-paragraph-div">
            <p>
                ${formState.summary}
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
              ${formState.title} |
            <a href="${formState.gitHubLink}"
                >${formState.gitHubLink}</a
              >
              |
              <a href="${formState.applicationLink}"
                >${formState.applicationLink}</a
              >
            </h4>
            <ul>
              <li>
               ${formState.keyPointOne}
              </li>
              <li>
                ${formState.keyPointTwo}
              </li>
              <li>
                ${formState.keyPointThree}
              </li>
              <li>Front end tools used: ${formState.frontTools}</li>
              <li>Back end tools used: ${formState.backTools}</li>
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
              <p><strong>${formState.company}</strong></p>
            </div>
            <div class="work-time">
              <p>${formState.startDate}-${formState.endDate}</p>
              <p>${formState.locationCity}, ${formState.locationState}</p>
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
                ${formState.keyAccomplishmentOne}
              </li>
              <li>${formState.keyAccomplishmentTwo}</li>
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
                >${formState.awardReceived}: ${formState.school}, ${formState.schoolCity},
                ${formState.schoolState}</strong>
              >
            </p>
            <p>${formState.schoolStartDate} - ${formState.schoolEndDate}</p>
          </div>

          <div class="education-summary">
            <p>
              ${formState.schoolSummary}
            </p>
          </div>
        </section>
      </body>
    </html>
    `;

  return template;
};
