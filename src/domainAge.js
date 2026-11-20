const moment = require('moment');
const whoisJson = require('whois-json');
const {
  list,
  input,
  info,
  goBack,
  currentTimeStamp,
  saveTo,
  exit,
  errorMsg,
} = require('./helper');

const domainAge = async (website, showHome = false, i = 1) => {
  website = website || (await input('Enter Website (example.com):', 'url'));

  const path = `${process.cwd()}/results/saifix_domainAge_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  try {
    const whoisData = await whoisJson(website);
    for (const key in whoisData) {
      if (key.includes('date') || key.includes('Date')) {
        if (!key.includes('Database')) {
          list('+', key, moment(whoisData[key]).format('Do MMMM YYYY h:mm:ss a'));
          saveTo(
            path,
            key,
            moment(whoisData[key]).format('Do MMMM YYYY h:mm:ss a'),
          );
        }
      }
      if (key.includes('creationDate')) {
        list('+', 'Website Age', moment(whoisData.creationDate).fromNow(true));
        saveTo(path, 'Website Age', moment(whoisData.creationDate).fromNow(true));
      }
    }
    if (!showHome) exit();
  } catch (error) {
    errorMsg();
  }
  if (showHome) goBack();
};
module.exports = domainAge;
