# materia-jm-addon
[![Build Status](https://travis-ci.org/GeoAstronaute/jm-addon.svg?branch=master)](https://travis-ci.org/GeoAstronaute/jm-addon)
[![codecov](https://codecov.io/gh/GeoAstronaute/jm-addon/branch/master/graph/badge.svg)](https://codecov.io/gh/GeoAstronaute/jm-addon)
[![npm version](https://badge.fury.io/js/jm-addon.svg)](http://badge.fury.io/js/jm-addon)
[![devDependency Status](https://david-dm.org/GeoAstronaute/jm-addon/dev-status.svg)](https://david-dm.org/GeoAstronaute/jm-addon?type=dev)
[![GitHub issues](https://img.shields.io/github/issues/GeoAstronaute/jm-addon.svg)](https://github.com/GeoAstronaute/jm-addon/issues)
[![GitHub stars](https://img.shields.io/github/stars/GeoAstronaute/jm-addon.svg)](https://github.com/GeoAstronaute/jm-addon/stargazers)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/GeoAstronaute/jm-addon/master/LICENSE)

## Demo
https://GeoAstronaute.github.io/jm-addon/

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Development](#development)
- [License](#license)

## About

addon tes

## Installation

Install through npm:
```
npm install --save jm-addon
```

Then include in your apps module:

```typescript
import { NgModule } from '@angular/core';
import { JmAddonModule } from 'jm-addon';

@NgModule({
  imports: [
    JmAddonModule.forRoot()
  ]
})
export class MyModule {}
```

Finally use in one of your apps components:
```typescript
import { Component } from '@angular/core';

@Component({
  template: '<hello-world></hello-world>'
})
export class MyComponent {}
```

You may also find it useful to view the [demo source](https://github.com/GeoAstronaute/jm-addon/blob/master/demo/demo.component.ts).

### Usage without a module bundler
```
<script src="node_modules/jm-addon/bundles/jm-addon.umd.js"></script>
<script>
    // everything is exported jmAddon namespace
</script>
```

## Documentation
All documentation is auto-generated from the source via [compodoc](https://compodoc.github.io/compodoc/) and can be viewed here:
https://GeoAstronaute.github.io/jm-addon/docs/

## Development

### Prepare your environment
* Install [Node.js](http://nodejs.org/) and [yarn](https://yarnpkg.com/en/docs/install)
* Install local dev dependencies: `yarn` while current directory is this repo

### Development server
Run `yarn start` to start a development server on port 8000 with auto reload + tests.

### Testing
Run `yarn test` to run tests once or `yarn run test:watch` to continually run tests.

### Release
* Bump the version in package.json (once the module hits 1.0 this will become automatic)
```bash
yarn run release
```

## License

MIT
