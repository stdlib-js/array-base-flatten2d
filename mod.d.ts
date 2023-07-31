/*
* @license Apache-2.0
*
* Copyright (c) 2023 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

// TypeScript Version: 4.1

/// <reference types="https://cdn.jsdelivr.net/gh/stdlib-js/types@main/index.d.ts"/>

import { Collection } from '@stdlib/types/object';

/**
* Two-dimensional nested array.
*/
type Array2D<T> = Array<Collection<T>>;

/**
* Interface describing `flatten2d`.
*/
interface Flatten2d {
	/**
	* Flattens a two-dimensional nested array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @returns flattened array
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = flatten2d( x, [ 2, 2 ], false );
	* // returns [ 1, 2, 3, 4 ]
	*
	* @example
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = flatten2d( x, [ 2, 2 ], true );
	* // returns [ 1, 3, 2, 4 ]
	*/
	<T = unknown>( x: Array2D<T>, shape: Collection<number>, colexicographic: boolean ): Array<T>;

	/**
	* Flattens a two-dimensional nested array and assigns elements to a provided output array.
	*
	* ## Notes
	*
	* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
	*
	* @param x - input array
	* @param shape - array shape
	* @param colexicographic - specifies whether to flatten array values in colexicographic order
	* @param out - output array
	* @param stride - output array stride
	* @param offset - output array index offset
	* @returns output array
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = flatten2d.assign( x, [ 2, 2 ], false, new Float64Array( 4 ), 1, 0 );
	* // returns <Float64Array>[ 1, 2, 3, 4 ]
	*
	* @example
	* var Float64Array = require( `@stdlib/array/float64` );
	*
	* var x = [ [ 1, 2 ], [ 3, 4 ] ];
	*
	* var out = flatten2d.assign( x, [ 2, 2 ], true, new Float64Array( 4 ), 1, 0 );
	* // returns <Float64Array>[ 1, 3, 2, 4 ]
	*/
	assign<T = unknown, U = unknown>( x: Array2D<T>, shape: Collection<number>, colexicographic: boolean, out: Collection<U>, stride: number, offset: number ): Collection<T | U>;
}

/**
* Flattens a two-dimensional nested array.
*
* ## Notes
*
* -   The function assumes that all nested arrays have the same length (i.e., the input array is **not** a ragged array).
*
* @param x - input array
* @param shape - array shape
* @param colexicographic - specifies whether to flatten array values in colexicographic order
* @returns flattened array
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flatten2d( x, [ 2, 2 ], false );
* // returns [ 1, 2, 3, 4 ]
*
* @example
* var x = [ [ 1, 2 ], [ 3, 4 ] ];
*
* var out = flatten2d( x, [ 2, 2 ], true );
* // returns [ 1, 3, 2, 4 ]
*/
declare var flatten2d: Flatten2d;


// EXPORTS //

export = flatten2d;