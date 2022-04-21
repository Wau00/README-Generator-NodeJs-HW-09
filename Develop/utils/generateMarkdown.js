
// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `
  # ${answers.title}

  # Description
${answers.description}

  ## Table of Content
- [Description](#Description)
- [Installation](#Install)
- [Usage](#Usage)
- [Colaborators](#Colaborators)
- [Test](#Test)
- [Contact](#Contact)
- [License](#License)  
  
  ## Install
${answers.install}
  
  ## Usage
${answers.usage}
  
  ## Colaborators
${answers.colaborator}
  
  ## Test
${answers.test}

  ## Contact
Feel free to contact me:
GitHub: [${answers.username}](https://github.com/${answers.username})
Email: ${answers.email}
  
  # License
This project is protected under ${answers.license} license. 
![License](https://img.shields.io/badge/license-${answers.license}-brightgreen) 
`;
}

module.exports = generateMarkdown;
