# SAIFIX

Interactive, menu-driven OSINT toolkit (Node.js).

## Install & Run
```bash
npm install
npm start        # or: node bin/saifix.js
```

Menu mein number type karein (1-16), phir tool input poochega, result dikhega,
aur menu wapas aayega. `0` dabane par exit.

Direct flags bhi kaam karte hain, e.g. `node bin/saifix.js -p 8.8.8.8`, `node bin/saifix.js -h`.

## Features
1 User Recon · 2 Email Finder · 3 Useragent · 4 Whois · 5 Insta Recon · 6 IP Lookup ·
7 Port Scan · 8 Website Age · 9 Header Info · 10 Website Scan · 11 Git Recon ·
12 URL Expander · 13 Subdomain · 14 Exif Metadata · 15 DNS Records · 16 YouTube Metadata

Results `./results/` folder mein save hote hain. Subdomain Recon (`-c`) ke liye `amass` chahiye.

Based on the MIT-licensed project by DevXprite.
