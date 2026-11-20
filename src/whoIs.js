/* eslint-disable no-restricted-syntax */
/* eslint-disable no-await-in-loop */
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

const whois = async (website, showHome = false, i = 1) => {
  website = website || (await input('Enter Domain (example.com):', 'url'));

  const path = `${process.cwd()}/results/saifix_whois_${currentTimeStamp()}.txt`;
  info('Results will be saved in ', path);

  try {
    const whoisData = await whoisJson(website);
    for (const key in whoisData) {
      if (!String(whoisData[key]).includes('REDACTED')) {
        await list(i++, key, whoisData[key]);
        saveTo(path, key, whoisData[key]);
      }
    }

    if (!showHome) exit();
  } catch (error) {
    errorMsg();
  }

  if (showHome) {
    goBack();
  }
};

module.exports = whois;
