# groestl-hash-js

> Performs the groestl hash.

## Installation
```
$ npm install --save groestl-hash-js
```

## Usage

```js
var groestl = require('groestl-hash-js');

groestl.groestl512('The great experiment continues.');
// -> '6cea044acf31194eab7d1adb704712c34dd4f0b6a470b0f297832addab691faa459474c651efdbebddb138a2a9adb41705e0fb75741775314ddd8e5449ace986'

groestl.groestl('Groestl is an Austrian dish, usually made of leftover potatoes and pork, cut into slice.');
// -> 'eefdf4c9d6b6fd53390049388de8974525b406206114a8885016aa3661965253'

groestl.groestl_2('Groestl is an Austrian dish, usually made of leftover potatoes and pork, cut into slice.');
// -> '55415989225c5c902f5003679a98fac117555890a7c3119ab1d570c89e77b072'

```

## API

### groestl512(str[,input,output])

#### str

Type: `string`

Get the groestl hash (512 bit output) as `string` (output 0), a 8 bit `array` (output 1), a 32 bit `array` (output 2).

### groestl(str[,input,output])

#### str

Type: `string` (input 0), 8 bit `array` (input 1), 32 bit `array` (input 2)

Get the groestl hash (256 bit output) as `string` (output 0), a 8 bit `array` (output 1), a 32 bit `array` (output 2).

### groestl_2(str[,input,output])

#### str

Type: `string` (input 0), 8 bit `array` (input 1), 32 bit `array` (input 2)

Get the groestl hash (256 bit output) as `string` (output 0), a 8 bit `array` (output 1), a 32 bit `array` (output 2).