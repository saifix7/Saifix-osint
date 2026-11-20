<div id="top"></div>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <!-- Maine yahan koi image nahi rakhi taaki infoooze ka logo na aaye. Aap apna logo yahan add kar sakte hain. -->
  <h1 align="center" style="font-size: 50px; font-weight: bold; color: #7c3aed; letter-spacing: 2px;">SAIFIX OSINT</h1>
  <p align="center">
    <b>One Brand, Infinite Possibilities</b>
  </p>

  <p align="center">
    A powerful, interactive OSINT (Open-Source Intelligence) tool created by <b>Saif Ali (SAIFIX7)</b>.
    <br />
    <a href="https://github.com/saifix7/Saifix-osint/issues/new"><strong>Report Bug</strong></a>
    ·
    <a href="https://github.com/saifix7/Saifix-osint/issues"><strong>Request Feature</strong></a>
  </p>

  <img alt="GitHub Repo stars" src="https://img.shields.io/github/stars/saifix7/Saifix-osint?style=flat-square&color=blue">
  <img alt="GitHub forks" src="https://img.shields.io/github/forks/saifix7/Saifix-osint?style=flat-square&color=green">
  <img alt="Node Version" src="https://img.shields.io/badge/Node.js-%3E%3D%2012-brightgreen?style=flat-square&logo=node.js">
  <img alt="License" src="https://img.shields.io/badge/License-MIT-purple?style=flat-square">
  <br />
  <br />
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#features">Features</a></li>
    <li><a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a>
      <ul>
        <li><a href="#interactive-menu">Interactive Menu</a></li>
        <li><a href="#command-line-options">Command Line Options</a></li>
      </ul>
    </li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->
## 📌 About The Project

**Saifix OSINT** is an enhanced, powerful, and user-friendly Open-Source Intelligence tool. It allows you to quickly and easily gather information about a specific target, including websites, IP addresses, usernames, and more.

The biggest and most noticeable upgrade in this version is the **Interactive Menu System**. 
You no longer need to memorize complex commands or flags! Just start the tool, choose a number from the menu, enter your target (like an IP or domain), and let the tool do all the magic. It is designed to be beginner-friendly while still powerful for advanced users.

---

<!-- FEATURES -->
## 🚀 Features of Saifix OSINT

Here is the complete list of what Saifix OSINT can do:

1. **Interactive Menu System (New & Enhanced)**
2. **InstaGram Recon**: Gather information on an Instagram user.
3. **Subdomain Scanner**: Find and enumerate subdomains of a given website.
4. **Ports Scan**: Search for open ports on a target.
5. **User Recon**: Search for a username across multiple social media platforms.
6. **Mail Finder**: Search for an email address associated with a username or domain.
7. **URL Scanner**: Analyze suspicious URLs for potential threats.
8. **Exif Metadata**: Extract EXIF data from images (camera model, date, location).
9. **Whois Lookup**: Find registration information for a specific domain.
10. **IP Lookup**: Find location and hostname info for a specific IP address.
11. **Header Info**: View and analyze HTTP headers of a website.
12. **Website Age**: Find out how long a website has been registered.
13. **DNS Lookup**: View DNS records for a domain.
14. **Git Recon**: Gather info on a GitHub user (repos, contributions, etc.).
15. **URL Expander**: Expand shortened URLs to see their real destination.
16. **Youtube Lookup**: View metadata of a YouTube video (title, tags, etc.).
17. **UserAgent Lookup**: Identify the browser and device type.

---

<!-- GETTING STARTED -->
## 🛠️ Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You need **Node.js** (version 12 or later) installed on your system to run this tool.

- For **Termux** (Android), run these commands in Termux:
  ```sh
  pkg update && pkg upgrade -y
  pkg install nodejs-lts git -y
