<!--

@license Apache-2.0

Copyright (c) 2023 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# flatten2d

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Flatten a two-dimensional nested array.

<section class="installation">

## Installation

```bash
npm install @stdlib/array-base-flatten2d
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var flatten2d = require( '@stdlib/array-base-flatten2d' );
```

#### flatten2d( x, shape, colexicographic )

Flattens a two-dimensional nested array.

```javascript
var x = [ [ 1, 2 ], [ 3, 4 ] ];

var out = flatten2d( x, [ 2, 2 ], false );
// returns [ 1, 2, 3, 4 ]
```

To flatten in colexicographic order, provide a third argument equal to `true`.

```javascript
var x = [ [ 1, 2 ], [ 3, 4 ] ];

var out = flatten2d( x, [ 2, 2 ], true );
// returns [ 1, 3, 2, 4 ]
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var flatten2d = require( '@stdlib/array-base-flatten2d' );

var x = [
    [ 1, 2, 3, 4 ],
    [ 5, 6, 7, 8 ],
    [ 9, 10, 11, 12 ],
    [ 13, 14, 15, 16 ]
];

var out = flatten2d( x, [ 0, 0 ], false );
// returns []

out = flatten2d( x, [ 0, 0 ], true );
// returns []

out = flatten2d( x, [ 1, 1 ], false );
// returns [ 1 ]

out = flatten2d( x, [ 1, 1 ], true );
// returns [ 1 ]

out = flatten2d( x, [ 2, 2 ], false );
// returns [ 1, 2, 5, 6 ]

out = flatten2d( x, [ 2, 2 ], true );
// returns [ 1, 5, 2, 6 ]

out = flatten2d( x, [ 3, 3 ], false );
// returns [ 1, 2, 3, 5, 6, 7, 9, 10, 11 ]

out = flatten2d( x, [ 3, 3 ], true );
// returns [ 1, 5, 9, 2, 6, 10, 3, 7, 11 ]

out = flatten2d( x, [ 4, 4 ], false );
// returns [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16 ]

out = flatten2d( x, [ 4, 4 ], true );
// returns [ 1, 5, 9, 13, 2, 6, 10, 14, 3, 7, 11, 15, 4, 8, 12, 16 ]
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-flatten2d.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-flatten2d

[test-image]: https://github.com/stdlib-js/array-base-flatten2d/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/array-base-flatten2d/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-flatten2d/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-flatten2d?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-flatten2d.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-flatten2d/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-flatten2d/tree/deno
[umd-url]: https://github.com/stdlib-js/array-base-flatten2d/tree/umd
[esm-url]: https://github.com/stdlib-js/array-base-flatten2d/tree/esm
[branches-url]: https://github.com/stdlib-js/array-base-flatten2d/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-flatten2d/main/LICENSE

</section>

<!-- /.links -->
