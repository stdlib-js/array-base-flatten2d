/**
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

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var isArray = require( '@stdlib/assert-is-array' );
var isFloat64Array = require( '@stdlib/assert-is-float64array' );
var zeroTo = require( '@stdlib/array-base-zero-to' );
var filled = require( '@stdlib/array-base-filled' );
var Float64Array = require( '@stdlib/array-float64' );
var pkg = require( './../package.json' ).name;
var flatten2d = require( './../lib' );


// MAIN //

bench( pkg+':size=100,lexicographic', function benchmark( b ) {
	var x;
	var i;
	var v;

	x = filled( zeroTo( 10 ), 10 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = flatten2d( x, [ 10, 10 ], false );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( v ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':size=100,colexicographic', function benchmark( b ) {
	var x;
	var i;
	var v;

	x = filled( zeroTo( 10 ), 10 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = flatten2d( x, [ 10, 10 ], true );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return an array' );
		}
	}
	b.toc();
	if ( !isArray( v ) ) {
		b.fail( 'should return an array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':assign:size=100,lexicographic', function benchmark( b ) {
	var out;
	var x;
	var i;
	var v;

	out = new Float64Array( 100 );
	x = filled( zeroTo( 10 ), 10 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = flatten2d.assign( x, [ 10, 10 ], false, out, 1, 0 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return a Float64Array' );
		}
	}
	b.toc();
	if ( !isFloat64Array( v ) ) {
		b.fail( 'should return a Float64Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

bench( pkg+':assign:size=100,colexicographic', function benchmark( b ) {
	var out;
	var x;
	var i;
	var v;

	out = new Float64Array( 100 );
	x = filled( zeroTo( 10 ), 10 );

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		v = flatten2d.assign( x, [ 10, 10 ], true, out, 1, 0 );
		if ( typeof v !== 'object' ) {
			b.fail( 'should return a Float64Array' );
		}
	}
	b.toc();
	if ( !isFloat64Array( v ) ) {
		b.fail( 'should return a Float64Array' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});
