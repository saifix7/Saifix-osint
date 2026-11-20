const chalk = require('chalk');
const args = require('args');
const userrecon = require('./userRecon');
const mailfinder = require('./mailFinder');
const useragent = require('./userAgent');
const instaRecon = require('./instaRecon');
const whois = require('./whoIs');
const IPlookup = require('./ipLookup');
const dnsLookup = require('./dnsLookup');
const portScanner = require('./portScanner');
const headerLookup = require('./headerLookup');
const urlExpander = require('./urlExpander');
const gitRecon = require('./gitRecon');
const domainAge = require('./domainAge');
const subdomainScanner = require('./subdomainScanner');
const exifMetadata = require('./exif');
const scanUrl = require('./scanUrl');
const youtubeLookup = require('./youtubeLookup');
const { input } = require('./helper');
const pkg = require('../package.json');

// Menu entries: number = index + 1
const features = [
  ['User Recon', 'Search for a username across multiple platforms', userrecon],
  ['Email Finder', 'Search for an email associated with a username', mailfinder],
  ['Useragent', 'Finds browser information', useragent],
  ['Whois Info', 'Find registration information for a domain', whois],
  ['Insta Recon', 'Find information of an Instagram user', instaRecon],
  ['IP Lookup', 'Find information of a specific IP address', IPlookup],
  ['Ports Scan', 'Find open ports of a website', portScanner],
  ['Website Age', 'Find out how long a website has been active', domainAge],
  ['Header Info', 'View HTTP headers of a website', headerLookup],
  ['Website Scan', 'Analyze a suspicious URL', scanUrl],
  ['Git Recon', 'Find information of a GitHub user', gitRecon],
  ['URL Expander', 'Expand shortened URLs to the full destination', urlExpander],
  ['Subdomain', 'Find and enumerate the subdomains of a website', subdomainScanner],
  ['Exif Metadata', 'Extract Exif metadata from images', exifMetadata],
  ['DNS Records', 'View DNS records for a specific domain', dnsLookup],
  ['Youtube Metadata', 'View the metadata of a YouTube video', youtubeLookup],
];

const colors = ['#FF5F6D', '#FF8A5C', '#FFB347', '#FFD166', '#9BE564', '#4ADE80', '#2DD4BF', '#38BDF8'];

const bannerText = String.raw`
  ____    _    ___ _____ ___ __  __
 / ___|  / \  |_ _|  ___|_ _|\ \/ /
 \___ \ / _ \  | || |_   | |  \  /
  ___) / ___ \ | ||  _|  | |  /  \
 |____/_/   \_\___|_|   |___|/_/\_\
`;

const banner = () => {
  const lines = bannerText.split('\n');
  lines.forEach((line, i) => {
    console.log(chalk.hex(colors[(i * 2) % colors.length]).bold(line));
  });
  console.log(`${' '.repeat(30)}${chalk.greenBright(`v${pkg.version}`)}\n`);
};

const printMenu = () => {
  const width = 66;
  const line = chalk.cyan('─'.repeat(width));
  console.log(line);
  features.forEach(([name, desc], index) => {
    const num = String(index + 1).padStart(2, '0');
    console.log(
      ` ${chalk.cyan('[')}${chalk.hex('#FFA500').bold(num)}${chalk.cyan(']')} `
        + `${chalk.whiteBright.bold(name.padEnd(18))}${chalk.gray(desc)}`,
    );
  });
  console.log(line);
  console.log(
    ` ${chalk.cyan('[')}${chalk.redBright.bold('00')}${chalk.cyan(']')} `
      + `${chalk.whiteBright.bold('Exit'.padEnd(18))}${chalk.gray('Close and exit the tool')}`,
  );
  console.log(`${line}\n`);
};

const validOptions = Array.from({ length: features.length + 1 }, (_, i) => i);

const exitTool = () => {
  console.log(chalk.hex('#FFA500')('\nThank You for using SAIFIX\n'));
  process.exit(0);
};

const takeOption = async () => {
  const option = parseInt(
    await input(
      'Enter the number of the feature you want to use:',
      'select',
      validOptions,
    ),
    10,
  );

  if (option === 0) {
    exitTool();
    return;
  }

  const feature = features[option - 1];
  if (!feature) {
    takeOption();
    return;
  }

  console.log('');
  try {
    // Each feature asks for its own input, prints the result and then
    // calls goBack(), which returns here to the menu.
    await feature[2](null, true);
  } catch (error) {
    console.log(chalk.redBright(`\nSomething went wrong: ${error.message}`));
    require('./helper').goBack();
  }
};

const home = async () => {
  console.clear();
  banner();
  printMenu();
  await takeOption();
};

const showHelp = () => args.showHelp();

module.exports = {
  banner,
  home,
  showHelp,
};
