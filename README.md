# Steroid-slot

[![Build Status](https://travis-ci.org/bredele/steroid-slot.svg?branch=master)](https://travis-ci.org/bredele/steroid-slot)
[![NPM](https://img.shields.io/npm/v/steroid-slot.svg?style=flat-square)](https://www.npmjs.com/package/steroid-slot)
[![Downloads](https://img.shields.io/npm/dm/steroid-slot.svg?style=flat-square)](http://npm-stat.com/charts.html?package=steroid-slot)
[![pledge](https://bredele.github.io/contributing-guide/community-pledge.svg)](https://github.com/bredele/contributing-guide/blob/master/community.md)

Create placeholder inside streaming web component and fill with your own markup . Ideal with [steroid](https://github.com/bredele/steroid) and [steroid-hook](https://github.com/bredele/steroid-hook), this module allows you to have the exact same API than web components slot elements.

## Usage

```js
const html = require('steroid')
const Slot = require('steroid-slot')

html`
<main>
  <Carousel>
    <article slot="slide">hello</article>
    <article slot="slide">world</article>
  </Carousel>
</main>
`

function Carousel(params, children) {
  return html`
  <section class="carousel">
    <Slot name="slide" from="${children}" />
  </section>
  `
}
```

Check out [API](/test) for more information.

## Installation

```shell
npm install steroid-slot --save
```

[![NPM](https://nodei.co/npm/steroid-slot.png)](https://nodei.co/npm/steroid-slot/)

## Question

For questions and feedback please use our [twitter account](https://twitter.com/bredeleca). For support, bug reports and or feature requests please make sure to read our
<a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">community guideline</a> and use the issue list of this repo and make sure it's not present yet in our reporting checklist.

## Contribution

Steroid-slot is an open source project and would not exist without its community. If you want to participate please make sure to read our <a href="https://github.com/bredele/contributing-guide/blob/master/community.md" target="_blank">guideline</a> before making a pull request. If you have any steroid-slot related project, component or other let everyone know in our wiki.


## Licence

The MIT License (MIT)

Copyright (c) 2016 Olivier Wietrich

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
