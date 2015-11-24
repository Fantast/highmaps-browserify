# highmaps-browserify

Browserify bundle for [Highmaps](http://www.highcharts.com/products/highmaps).

This project is heavily based on [highcharts-browserify](https://github.com/soldair/highcharts-browserify) project, has a dependency on it, and just adds support for Map module.

## Installation

```shell
$ npm install --save highmaps-browserify
```

## How to use

```js
var $ = require('jquery');
var HighCharts = require('highmaps-browserify/modules/map');

new Highcharts.Map({
  ...
});
```
