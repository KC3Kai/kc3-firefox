# KC3 Firefox

![KC3改 Logo](http://puu.sh/h4Gbb.png)

The Firefox port for [KC3Kai](https://github.com/KC3Kai/KC3Kai).

## Installation

We are not yet in production stage, so in order to run, you will need development tools such as `npm` and knowledge in installing JS apps.

#### Install node modules
```
npm install
```

#### Build the application
```
npm run build
```

#### Load the add-on in Firefox
* `about:debugging#addons`
* _Load Temporary Add-on_
* Browse for `kc3-firefox/build/release/manifest.json`
* Naigate to [kancolle game page](http://www.dmm.com/netgame/social/-/gadgets/=/app_id=854854/)

## How it works

#### Background service is started
* Listens to network (`src/sevice/network/network.firefox.js`)
  * Done via Firefox WebExtension API, and not local proxy servers
  * Works similar to KC3's devtools network listening
  * This time, you DO NOT NEED devtools open. It is actually recommended to close devtools since it may jeopardize the performance
* Detects KanColle API (`src/service/api/*`)
  * ~
* Handles requests from widgets (`src/service/gateway/*`)
  * ~
* Stores data that needs to persist (`src/service/store/*`)
  * ~

#### Content Scripts are injected into web pages
* All pages of DMM Website (`src/content/dmm.js`)
  * Applies Region Cookies
* KanColle game page (`src/content/netgame.js`)
  * Cleans the page via CSS, removes DMM headers and sidebars
  * Adds "widgets" that show game information
  * Has ability to customize widgets thru drag-drop
  * _More info about widgets and customization below_
* Osapi iframes (`src/content/osapi.js`)
  * Cleans the spacing via CSS to match frame size

#### Game Page Customization
* ~
  * ~
