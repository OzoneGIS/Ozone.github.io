# [Sustainable Sites](http://sustainability.ucmerced.edu)
[![version][version-badge]][CHANGELOG]
[![license][license-badge]][LICENSE]
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![jest](https://facebook.github.io/jest/img/jest-badge.svg)](https://github.com/facebook/jest)


**[Engineering Service Learning @ UC Merced](http://engineeringservicelearning.ucmerced.edu)** Working with the Department of Sustainability to provide access to sustainable initiatives in an interactive, hands-on manner.

**[Ozone](https://adriandarian.github.io/sustainable)** An interactive web app providing on-campus sustainable information. Ozone is Sustainable Sites' current project. Eventually hosted at [//sustainability.ucmerced.edu/map](http://sustainability.ucmerced.edu/map), it will provide information to help students, faculty, and visitors understand the efforts going on campus and how they can make the campus a greener healthier place to be.


## Quick Start:

1. Install Git from [Github's Getting Started Page](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
2. Open Terminal
3. Type: `git clone https://github.com/adriandarian/sustainable.git`

## Terminal Commands

1. Install NodeJs from [NodeJs Official Page](https://nodejs.org/en).
2. Open Terminal
3. Change your path to the repository directory: ```cd C://<path>/sustainable```
4. Run in terminal: ```npm install```
5. Change your path to the client folder: ```cd client```
6. Run in terminal: ```npm install```
7. Then run: ```npm start```
8. (optional for servers) Go back to the main folder of your repository: ```cd ..```
9. (optional for servers) Install Yarn []
9. (optional for servers) Run in terminal: ```yarn run dev```
10. Navigate to `http://localhost:3000/`
11. (optional) Run in terminal `npm i -g cross-env`
12. (optional for servers) The back-end server is hosted on `http://localhost:5000/`

### What's included

Within the download you'll find the following directories and files:
```
sustainable
├── .git/
├── node_modules/
├── .gitignore
├── LICENSE.md
├── package-lock.json
├── package.json
├── README.md
├── server.js
├── yarn.lock
└── client
    ├── .env
    ├── package.json
    ├── yarn.lock
    ├── node_modules/
    ├── build/
    ├── public
    |   ├── apple-icon.png
    |   ├── favicon.ico
    │   ├── index.html
    │   ├── manifest.json
    │   └── sidebar-5.jpg
    └── src
       ├── assets
       │   ├── css
       |   |   ├── animate.min.css
       |   |   ├── bootstrap.min.css
       |   |   ├── demo.css
       |   |   ├── Maps.css
       |   |   └── pe-icon-7-stroke.css
       │   ├── fonts
       |   |   ├── glyphicons-halflings-regular.eot
       |   |   ├── glyphicons-halflings-regular.svg
       |   |   ├── glyphicons-halflings-regular.ttf
       |   |   ├── glyphicons-halflings-regular.woff
       |   |   ├── glyphicons-halflings-regular.woff2
       |   |   ├── Pe-icon-7-stroke.eot
       |   |   ├── Pe-icon-7-stroke.svg
       |   |   ├── Pe-icon-7-stroke.ttf
       |   |   └── Pe-icon-7-stroke.woff
       │   ├── img
       |   |   ├── default-avatar.png
       |   |   ├── leed.png
       |   |   ├── loading-bubbles.svg
       |   |   ├── mask.png
       |   |   ├── new_logo.png
       |   |   ├── reactlogo.png
       |   |   ├── sidebar-1.jpg
       |   |   ├── sidebar-2.jpg
       |   |   ├── sidebar-3.jpg
       |   |   ├── sidebar-4.jpg
       |   |   ├── sidebar-5.jpg
       |   |   ├── tim_80x80.png
       |   |   ├── icons
       |   |   |   ├── brands/
       |   |   |   ├── regular/
       |   |   |   └── solid/
       │   │   └── faces
       |   |       ├── face-0.jpg
       |   |       ├── face-1.jpg
       |   |       ├── face-2.jpg
       |   |       ├── face-3.jpg
       |   |       ├── face-4.jpg
       |   |       ├── face-5.jpg
       |   |       ├── face-6.jpg
       |   |       ├── face-7.jpg
       |   |       └── tim_vector.jpe
       │   └── sass
       |       ├── light-bootstrap-dashboard.css
       │       ├── light-bootstrap-dashboard.scss
       │       └── lbd
       |           ├── _alerts.scss
       |           ├── _buttons.scss
       |           ├── _cards.scss
       |           ├── _chartist.scss
       |           ├── _checkbox-radio-switch.scss
       |           ├── _dropdown.scss
       |           ├── _footers.scss
       |           ├── _inputs.scss
       |           ├── _misc.scss
       |           ├── _mixins.scss
       |           ├── _navbars.scss
       |           ├── _responsive.scss
       |           ├── _sidebar-and-main-panel.scss
       |           ├── _tables.scss
       |           ├── _typography.scss
       |           ├── _variables.scss
       |           └── mixins
       |               ├── _buttons.scss
       |               ├── _cards.scss
       |               ├── _chartist.scss
       |               ├── _icons.scss
       |               ├── _inputs.scss
       |               ├── _labels.scss
       |               ├── _morphing-buttons.scss
       |               ├── _navbars.scss
       |               ├── _social-buttons.scss
       |               ├── _tabs.scss
       |               ├── _transparency.scss
       |               └── _vendor-prefixes.scss
       ├── components
       │   ├── Card
       │   │   └── Card.jsx
       │   ├── Footer
       │   │   └── Footer.jsx
       │   ├── FormInputs
       │   │   └── FormInputs.jsx
       │   ├── Header
       │   │   ├── Header.jsx
       │   │   └── HeaderLinks.jsx
       │   ├── Sidebar
       │   │   └── Sidebar.jsx
       │   ├── Tasks
       │   │   └── Tasks.jsx
       │   └── UserCard
       │       └── UserCard.jsx
       ├── containers
       │   └── App
       │       └── App.jsx
       ├── elements
       │   ├── CustomButton
       │   │   └── CustomButton.jsx
       │   ├── CustomCheckbox
       │   │   └── CustomCheckbox.jsx
       │   └── CustomRadio
       │       └── CustomRadio.jsx
       ├── index.js
       ├── logo.svg
       ├── registerServiceWorker.js
       ├── routes
       |   └── app.jsx
       ├── variables
       |   ├── Data.jsx
       │   └── Variables.jsx
       └── views
           ├── Dashboard
           │   └── Dashboard.jsx
           ├── Icons
           │   └── Icons.jsx
           ├── Maps
           │   └── Maps.jsx
           ├── Notifications
           │   └── Notifications.jsx
           ├── TableList
           │   └── TableList.jsx
           ├── Typography
           │   └── Typography.jsx
           └── UserProfile
               └── UserProfile.jsx
```


[CHANGELOG]: ./CHANGELOG.md

[LICENSE]: ./LICENSE.md
[version-badge]: https://img.shields.io/badge/version-1.1.0-blue.svg
[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg
