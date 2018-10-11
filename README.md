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

### Continuous Integration

This repository is configured for deployment to https://rowrow.io and https://www.rowrow.io.

Deplyoment is configured to [automatically build on Zeit Now](https://zeit.co/docs/integrations/now-for-github) and alias to _both_ domains after every push to _master_ branch.

_Trick:_: You can auto-deploy and -alias to just one domain, that container will be located in the US (close to Github). If you are in another timezone you can the still _manually_ alias the same deployment, which will give you a container 'closer to home'.

I.e.: Doing manual alias afterwards with ```now alias projethashedname.now.sh www.rowrow.io``` has positive side effect that this container then runs in developer's own time zone (in my case Europe), while the auto-build apparently runs in Github's time zone (US East). :) 

### Manual deployment

Manual Zeit deployment is auto-aliased to domain ```www.rowrow.io``` *and* ```www.rowrow.io``` through _now.json_ entry:

```
{
    "alias": ["rowrow.io", "www.rowrow.io"],
    "name": "rowrow"
}
```

Simply run ```now && now alias``` to deploy and alias in one step.


### Hickups

The free Zeit Now account has a limited number of deployments. You may need to destroy older deployments like this ```now rm nameofproject.now.sh``` before being able to create new deployments through CLI or pushing to Git.

### Acknowledgment

So far this is mostly based on a tutorial by [Ankur Singhal](https://medium.com/@ankurr.singhal)

### Development

Useful commands:
```
npm run dev
npm run test-watch
vue ui
```
