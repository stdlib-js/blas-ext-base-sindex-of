<!--

@license Apache-2.0

Copyright (c) 2025 The Stdlib Authors.

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


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# sindexOf

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Return the first index of a specified search element in a single-precision floating-point strided array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/blas-ext-base-sindex-of
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var sindexOf = require( '@stdlib/blas-ext-base-sindex-of' );
```

#### sindexOf( N, searchElement, x, strideX )

Returns the first index of a specified search element in a single-precision floating-point strided array.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, 3.0 ] );

var idx = sindexOf( x.length, 3.0, x, 1 );
// returns 2
```

The function has the following parameters:

-   **N**: number of indexed elements.
-   **searchElement**: search element.
-   **x**: input [`Float32Array`][@stdlib/array/float32].
-   **strideX**: stride length.

If the function is unable to find a search element, the function returns `-1`.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, 3.0 ] );

var idx = sindexOf( x.length, 8.0, x, 1 );
// returns -1
```

The `N` and stride parameters determine which elements in the strided array are accessed at runtime. For example, to search every other element:

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, 3.0 ] );

var idx = sindexOf( 4, -1.0, x, 2 );
// returns 3
```

Note that indexing is relative to the first index. To introduce an offset, use [`typed array`][mdn-typed-array] views.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

// Initial array...
var x0 = new Float32Array( [ 1.0, -2.0, 3.0, -4.0, 5.0, -6.0 ] );

// Create an offset view...
var x1 = new Float32Array( x0.buffer, x0.BYTES_PER_ELEMENT*1 ); // start at 2nd element

// Find index...
var idx = sindexOf( 3, -6.0, x1, 2 );
// returns 2
```

#### sindexOf.ndarray( N, searchElement, x, strideX, offsetX )

Returns the first index of a specified search element in a single-precision floating-point strided array using alternative indexing semantics.

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, 3.0 ] );

var idx = sindexOf.ndarray( x.length, 3.0, x, 1, 0 );
// returns 2
```

The function has the following additional parameters:

-   **offsetX**: starting index.

While [`typed array`][mdn-typed-array] views mandate a view offset based on the underlying buffer, the offset parameter supports indexing semantics based on a starting index. For example, to access only the last three elements of the strided array

```javascript
var Float32Array = require( '@stdlib/array-float32' );

var x = new Float32Array( [ -2.0, 1.0, 3.0, -5.0, 4.0, 0.0, -1.0, 3.0 ] );

var idx = sindexOf.ndarray( 3, 3.0, x, 1, x.length-3 );
// returns 2
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   When searching for a search element, the function checks for equality using the strict equality operator `===`. As a consequence, `NaN` values are considered distinct, and `-0` and `+0` are considered the same.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var discreteUniform = require( '@stdlib/random-array-discrete-uniform' );
var sindexOf = require( '@stdlib/blas-ext-base-sindex-of' );

var x = discreteUniform( 10, -100, 100, {
    'dtype': 'float32'
});
console.log( x );

var idx = sindexOf( x.length, 80.0, x, 1 );
console.log( idx );
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->

* * *

<section class="c">

## C APIs

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- C usage documentation. -->

<section class="usage">

### Usage

```c
#include "stdlib/blas/ext/base/sindex_of.h"
```

#### stdlib_strided_sindex_of( N, searchElement, \*X, strideX )

Returns the first index of a specified search element in a single-precision floating-point strided array.

```c
float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };

int idx = stdlib_strided_sindex_of( 4, 3.0f, x, 1 );
// returns 2
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **searchElement**: `[in] float` search element.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.

```c
CBLAS_INT N stdlib_strided_sindex_of( const CBLAS_INT N, const float searchElement, const float *X, const CBLAS_INT strideX );
```

#### stdlib_strided_sindex_of_ndarray( N, searchElement, \*X, strideX, offsetX )

Returns the first index of a specified search element in a single-precision floating-point strided array using alternative indexing semantics.

```c
float x[] = { 1.0f, 2.0f, 3.0f, 4.0f };

int idx = stdlib_strided_sindex_of( 4, 3.0f, x, 1, 0 );
// returns 2
```

The function accepts the following arguments:

-   **N**: `[in] CBLAS_INT` number of indexed elements.
-   **searchElement**: `[in] float` search element.
-   **X**: `[in] float*` input array.
-   **strideX**: `[in] CBLAS_INT` stride length.
-   **offsetX**: `[in] CBLAS_INT` starting index.

```c
CBLAS_INT stdlib_strided_sindex_of_ndarray( const CBLAS_INT N, const float searchElement, const float *X, const CBLAS_INT strideX, const CBLAS_INT offsetX );
```

</section>

<!-- /.usage -->

<!-- C API usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- C API usage examples. -->

<section class="examples">

### Examples

```c
#include "stdlib/blas/ext/base/sindex_of.h"
#include <stdio.h>

int main( void ) {
    // Create a strided array:
    float x[] = { 1.0f, -2.0f, 3.0f, -4.0f, 5.0f, -6.0f, 7.0f, -8.0f };

    // Specify the number of indexed elements:
    const int N = 8;

    // Specify a stride:
    const int strideX = 1;

    // Perform a search:
    int idx = stdlib_strided_sindex_of( N, 5.0f, x, strideX );

    // Print the result:
    printf( "index value: %d\n", idx );
}
```

</section>

<!-- /.examples -->

</section>

<!-- /.c -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

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

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/blas-ext-base-sindex-of.svg
[npm-url]: https://npmjs.org/package/@stdlib/blas-ext-base-sindex-of

[test-image]: https://github.com/stdlib-js/blas-ext-base-sindex-of/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/blas-ext-base-sindex-of/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/blas-ext-base-sindex-of/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/blas-ext-base-sindex-of?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/blas-ext-base-sindex-of.svg
[dependencies-url]: https://david-dm.org/stdlib-js/blas-ext-base-sindex-of/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/blas-ext-base-sindex-of/tree/deno
[deno-readme]: https://github.com/stdlib-js/blas-ext-base-sindex-of/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/blas-ext-base-sindex-of/tree/umd
[umd-readme]: https://github.com/stdlib-js/blas-ext-base-sindex-of/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/blas-ext-base-sindex-of/tree/esm
[esm-readme]: https://github.com/stdlib-js/blas-ext-base-sindex-of/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/blas-ext-base-sindex-of/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/blas-ext-base-sindex-of/main/LICENSE

[@stdlib/array/float32]: https://github.com/stdlib-js/array-float32

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

</section>

<!-- /.links -->
