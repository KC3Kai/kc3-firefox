## KC3 Firefox

![KC3改 Logo](http://puu.sh/h4Gbb.png)

The Firefox port for [KC3Kai](https://github.com/KC3Kai/KC3Kai).

### Installation

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
