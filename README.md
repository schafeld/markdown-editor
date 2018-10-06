# markdown-editor

> Simple markdown editor created witch Vue.js using TDD

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


## Deployment
This repository is configured for deployment to rowrow.io.

Deplyoment is configured to [automatically build on Zeit Now](https://zeit.co/docs/integrations/now-for-github) and alias to https://roworow.to after every push to _master_ branch.
Auto-aliasing to a second domain like https://www.rowrow.io doesn't seem to be working from ```now.json``` configuration file.

Doing manual alias afterwards with ```now alias projethashedname.now.sh www.rowrow.io``` has positive side effect that this container then runs in developer's own time zone (in my case Europe), while the auto-build apparently runs in Github's time zone (US East). :) 