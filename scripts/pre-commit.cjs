const { execSync } = require('child_process');
const chalk = require('chalk');


const fileExtensions = {
    spec: /\.spec\.js$/,
  };

const wordMatchers = {
    fit:  '\\s*fit\\(',
    fdescribe: '\\s*fdescribe\\(',
  };

  let status = 0;
for (let [word, matcher] of Object.entries(wordMatchers)) {
  const gitCommand = `git diff --staged -G"${matcher}" --name-only`;
  const failedFiles = execSync(gitCommand).toString();
  const filesAsArray = failedFiles.split('\n');
  const filesToAlert = filesAsArray.filter((file) =>
    fileExtensions.spec.test(file.trim())
  );

  
  if (filesToAlert.length) {
    status = 1;
    console.log(
      chalk.bgRed.whiteBright('Error:'),
      `Following files contain '${word}' in them:`
    );
    console.log(chalk.white(filesToAlert.join('\n')));
  }
}
process.exit(status)