# hue-generator [![Build Status](https://travis-ci.org/YeasterEgg/hue-generator.svg?branch=master)](https://travis-ci.org/YeasterEgg/hue-generator)

> Generates colors maximizing hue distance

## Install

```
$ npm install hue-generator
```

## Usage

```js
const hueGenerator = require('hue-generator')

const generator = hueGenerator(50, 50) // saturation and lightness
const first = generator.next()
//=> 'hsl(0, 50%, 50%)'
const second = generator.next()
//=> 'hsl(222, 50%, 50%)'
const array = generator.asArray(10)
//=>
// [ 'hsl(0, 50%, 50%)',
//   'hsl(222, 50%, 50%)',
//   'hsl(85, 50%, 50%)',
//   'hsl(307, 50%, 50%)',
//   'hsl(170, 50%, 50%)',
//   'hsl(32, 50%, 50%)',
//   'hsl(255, 50%, 50%)',
//   'hsl(117, 50%, 50%)',
//   'hsl(340, 50%, 50%)',
//   'hsl(202, 50%, 50%)' ]
const third = generator.next()
//=> 'hsl(85, 50%, 50%)'
```

## API

### hueGenerator(saturation, lightness, [starting_hue = 0, max_size = Infinity])

#### saturation

Type: `integer`

#### lightness

Type: `integer`

#### starting_hue

Type: `integer`<br>
Default: 0

### Package generated with

Sindre Sorhus' [generator-nm](https://github.com/sindresorhus/generator-nm)

## License

MIT © [Yeasteregg](https://yegg.it)
