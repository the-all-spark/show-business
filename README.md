# About the project

## Name

**Show business**

## Description

Web application that allows users to view the latest news and articles about the show business industry.

# Deploy

Application is available at the [address](https://the-all-spark.github.io/show-business/).

# Functionality

- Used HTML5 and CSS3 (semantic layout, flexbox);
- Created blocks (and directories for each block) according to the BEM methodology (`page`; `header`, `main`, `dividing-line`, `footer`; `main-article`, `top-story-article`, `another-article`; `top-stories`; `screen`; `h1`, `h2`, `h3`, `h4`, `news-text`; `menu`, `burger-menu`, `button`);
- Followed the principles of 'pixel perfect' and accessibility;
- Created a responsive layout (for breakpoints: 1250px, 1100px, 900px, 768px, 460px, 380px, 320px);
- Added a burger menu when the screen width is less than 900px;
- Added a js-code to hide/show the burger menu.

# How to run the app locally

## For users:

1. download the project from the repository using [link](https://github.com/the-all-spark/show-business/tree/gh-pages) ('<> Code' > 'Download ZIP');

2. run application (double-click on `index.html`).

## For developers:

1. download the project from the repository using [link](https://github.com/the-all-spark/show-business/tree/main) ('<> Code' > 'Download ZIP'), then unpack it  
   or clone the repository using git  
   `$ git clone https://github.com/the-all-spark/show-business.git`

2. move to the application folder and open Visual Studio code (or other code editor)  
   `$ cd show-business`  
   `$ code .`

3. install dependencies  
   `$ npm install`

4. run application  
   `$ npm run start`

### Other scripts

`$ npm run build:css` - build CSS files using sass  
`$ npm run build:html` - copy HTML files from `src/` to `dist/`  
`$ npm run build:assets` - copy files and folders in 'assets' from `src/assets/` to `dist/assets/`  
`$ npm run build:js` - copy files in 'scripts' from `src/scripts/` to `dist/scripts/`  
`$ npm run build:all` - build CSS, copy HTML and assets files  
`$ npm run build:clean` - delete `dist/` folder and build application again

`$ npm run serve` - run live-server with application  
`$ npm run deploy` - build application and deploy it to GitHub Pages

# Results of application testing

HTML validation  
![HTML validation](/src/assets/testing_results/HTML-validation.jpg)

CSS validation  
![CSS validation](/src/assets/testing_results/CSS-validation.jpg)

Accessibility validation (with WAVE)
![Accessibility validation (with WAVE)](/src/assets/testing_results/WAVE.jpg)

Performance, Accessibility, Best Practices and SEO (with Lighthouse)
![Performance, Accessibility, Best Practices and SEO](/src/assets/testing_results/Lighthouse.jpg)

# Resources

## General

- [Figma file](https://www.figma.com/design/FXH4IrR8Vho44BpcloBNfc/DEMO-for-Dima-Bukovsky?node-id=0-1&p=f&t=T7qb3AKZnx3CF0fh-0) with the design of the application;
- [BEM methodology](https://en.bem.info/methodology/quick-start/) for folders' structure and styles' organization.

## Tools and technologies

- [Sass](https://sass-lang.com/) as a CSS compiler;
- [live-server](https://www.npmjs.com/package/live-server) for local server;
- [prettier](https://www.npmjs.com/package/prettier) for code formatting;
- [cpx](https://www.npmjs.com/package/cpx) for copying files;
- [concurrently](https://www.npmjs.com/package/concurrently) for running multiple commands simultaneously.

### Tools for checking code

- [W3C Markup Validation Service](https://validator.w3.org/) for checking HTML code;
- [CSS Validation Service](https://jigsaw.w3.org/css-validator/) for checking CSS code;
- 'Lighthouse'\_ tab in the browser's developer tools for checking Performance, Accessibility, Best Practices and SEO;
- [WAVE Browser Extensions](https://wave.webaim.org/) for checking accessibility;
