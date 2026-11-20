const { spawn } = require('child_process');
const {
  input, errorMsg, currentTimeStamp, info, goBack, exit,
} = require('./helper');

const subdomainRecon = async (host, showHome = false) => {
  host = host || (await input('Enter Domain (example.com):'));

  const path = `${process.cwd()}/results/saifix_subdomainRecon_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  let finished = false;
  const finish = () => {
    if (finished) return;
    finished = true;
    if (showHome) goBack();
    else exit();
  };

  const command = spawn('amass', ['enum', '-passive', '-d', host, '-o', path]);
  command.stdout.on('data', (output) => {
    console.log(output.toString());
  });
  command.on('error', () => {
    errorMsg(
      'amass might not be installed, try installing it: go install -v github.com/OWASP/Amass/v3/...@master',
    );
    finish();
  });
  command.on('close', finish);
};

module.exports = subdomainRecon;
