/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
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

var tape = require( 'tape' );
var abs = require( '@stdlib/math-base-special-abs' );
var sqrt = require( '@stdlib/math-base-special-sqrt' );
var randu = require( '@stdlib/random-base-randu' );
var round = require( '@stdlib/math-base-special-round' );
var PINF = require( '@stdlib/constants-float64-pinf' );
var NINF = require( '@stdlib/constants-float64-ninf' );
var EPS = require( '@stdlib/constants-float64-eps' );
var MAX_SAFE_INTEGER = require( '@stdlib/constants-float64-max-safe-integer' );
var isnan = require( '@stdlib/math-base-assert-is-nan' );
var isPositiveZero = require( '@stdlib/math-base-assert-is-positive-zero' );
var isNegativeZero = require( '@stdlib/math-base-assert-is-negative-zero' );
var pow = require( './../lib' );


// FIXTURES //

var squaredSmall = require( './fixtures/julia/squared_small.json' );
var squaredLarge = require( './fixtures/julia/squared_large.json' );
var cubedSmall = require( './fixtures/julia/cubed_small.json' );
var cubedLarge = require( './fixtures/julia/cubed_large.json' );
var toTheFourthSmall = require( './fixtures/julia/to_the_fourth_small.json' );
var toTheFourthLarge = require( './fixtures/julia/to_the_fourth_large.json' );
var baseNearUnitySmall = require( './fixtures/julia/base_near_unity_small.json' );
var baseNearUnityLarge = require( './fixtures/julia/base_near_unity_large.json' );
var baseNearUnityHuge = require( './fixtures/julia/base_near_unity_huge.json' );
var subnormalResults = require( './fixtures/julia/subnormal_results.json' );
var negativeExpSmallSmall = require( './fixtures/julia/negative_exp_small_small.json' );
var negativeExpSmallLarge = require( './fixtures/julia/negative_exp_small_large.json' );
var negativeExpLargeSmall = require( './fixtures/julia/negative_exp_large_small.json' );
var negativeExpLargeLarge = require( './fixtures/julia/negative_exp_large_large.json' );
var smallSmall = require( './fixtures/julia/small_small.json' );
var smallLarge = require( './fixtures/julia/small_large.json' );
var largeSmall = require( './fixtures/julia/large_small.json' );
var decimalDecimal = require( './fixtures/julia/decimal_decimal.json' );
var decimalInteger = require( './fixtures/julia/decimal_integer.json' );
var integerDecimal = require( './fixtures/julia/integer_decimal.json' );
var integerInteger = require( './fixtures/julia/integer_integer.json' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof pow, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function accepts two parameters: a base and an exponent', function test( t ) {
	t.strictEqual( pow.length, 2.0, 'arity is 2' );
	t.end();
});

tape( 'the function evaluates the exponential function (`y = 2` and `x` small)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = squaredSmall.x;
	y = squaredSmall.y;
	expected = squaredSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the exponential function (`y = 2` and `x` large)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = squaredLarge.x;
	y = squaredLarge.y;
	expected = squaredLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the exponential function (`y = 3` and `x` small)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = cubedSmall.x;
	y = cubedSmall.y;
	expected = cubedSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the exponential function (`y = 3` and `x` large)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = cubedLarge.x;
	y = cubedLarge.y;
	expected = cubedLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the exponential function (`y = 4` and `x` small)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = toTheFourthSmall.x;
	y = toTheFourthSmall.y;
	expected = toTheFourthSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the exponential function (`y = 4` and `x` large)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = toTheFourthLarge.x;
	y = toTheFourthLarge.y;
	expected = toTheFourthLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the exponential function (`x ~ 1`, `y` small)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = baseNearUnitySmall.x;
	y = baseNearUnitySmall.y;
	expected = baseNearUnitySmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the exponential function (`x ~ 1`, `y` large)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = baseNearUnityLarge.x;
	y = baseNearUnityLarge.y;
	expected = baseNearUnityLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the exponential function (`x ~ 1`, `y` huge)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = baseNearUnityHuge.x;
	y = baseNearUnityHuge.y;
	expected = baseNearUnityHuge.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the exponential function (subnormal results)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = subnormalResults.x;
	y = subnormalResults.y;
	expected = subnormalResults.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the exponential function (negative exponents; `x` small, `y` small)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = negativeExpSmallSmall.x;
	y = negativeExpSmallSmall.y;
	expected = negativeExpSmallSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		if ( expected[i] === null ) {
			t.strictEqual( actual, PINF, 'pow('+x[i]+','+y[i]+') returns +infinity' );
		} else {
			t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
		}
	}
	t.end();
});

tape( 'the function evaluates the exponential function (negative exponents; `x` small, `y` large)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = negativeExpSmallLarge.x;
	y = negativeExpSmallLarge.y;
	expected = negativeExpSmallLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		if ( expected[i] === null ) {
			t.strictEqual( actual, PINF, 'pow('+x[i]+','+y[i]+') returns +infinity' );
		} else {
			t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
		}
	}
	t.end();
});

tape( 'the function evaluates the exponential function (negative exponents; `x` large, `y` small)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = negativeExpLargeSmall.x;
	y = negativeExpLargeSmall.y;
	expected = negativeExpLargeSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		if ( expected[i] === null ) {
			t.strictEqual( actual, PINF, 'pow('+x[i]+','+y[i]+') returns +infinity' );
		}
		else if ( expected[i] === 5.0e-324 ) {
			// Julia, Python, and R occasionally return the min subnormal value, when, in fact, the result should underflow; e.g., `pow(571413458040000, -21.92803603935001)` returns `0` for this implementation, and `5.0e-324` on other platforms. The answer checked on Wolfram Alpha is `2.564828778186e-324`, which is less than the min subnormal. This discrepancy arises, at least when compared to Julia's Openlibm, due to differences in our `ldexp` and their `scalbn`.
			t.strictEqual( actual === expected[i] || actual === 0.0, true, 'pow('+x[i]+','+y[i]+') returns '+expected[i]+' or 0' );
		}
		else {
			t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
		}
	}
	t.end();
});

tape( 'the function evaluates the exponential function (negative exponents; `x` large, `y` large)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = negativeExpLargeLarge.x;
	y = negativeExpLargeLarge.y;
	expected = negativeExpLargeLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		if ( expected[i] === null ) {
			t.strictEqual( actual, PINF, 'pow('+x[i]+','+y[i]+') returns +infinity' );
		} else {
			t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
		}
	}
	t.end();
});

tape( 'the function evaluates the exponential function (near overflow)', function test( t ) {
	var x;
	var y;
	var v;

	x = 2.0;
	y = 1024;
	v = pow( x, y );
	t.strictEqual( v, PINF, 'pow('+x+','+y+') returns +infinity' );

	x = 2.0;
	y = 1023;
	v = pow( x, y );
	t.strictEqual( v, 8.98846567431158e307, 'pow('+x+','+y+') returns 8.98846567431158e307' );

	x = 2.001355585648339;
	y = 1023;
	v = pow( x, y );
	t.strictEqual( v, PINF, 'pow('+x+','+y+') returns +infinity' );

	x = 2.0;
	y = 1025;
	v = pow( x, y );
	t.strictEqual( v, PINF, 'pow('+x+','+y+') returns +infinity' );

	x = 1.998647974895499;
	y = 1025;
	v = pow( x, y );
	t.strictEqual( v, PINF, 'pow('+x+','+y+') returns +infinity' );

	x = 2.0 + ( EPS*2.0 );
	y = 1024;
	v = pow( x, y );
	t.strictEqual( v, PINF, 'pow('+x+','+y+') returns +infinity' );

	t.end();
});

tape( 'the function evaluates the exponential function (near underflow)', function test( t ) {
	var x;
	var y;
	var v;

	x = 2.0;
	y = -1075;
	v = pow( x, y );
	t.strictEqual( v, 0.0, 'pow('+x+','+y+') returns 0' );

	x = 1.9987108395124398;
	y = -1075;
	v = pow( x, y );
	t.strictEqual( v, 5.0e-324, 'pow('+x+','+y+') returns 5e-324' );

	// Wolfram Alpha: 2.47032822920649828116748364864574508116622553173015e-324
	x = 1.9999999999999998;
	y = -1075;
	v = pow( x, y );
	t.strictEqual( v, 0.0, 'pow('+x+','+y+') returns 0' );

	x = 1.9999999999999999;
	y = -1075;
	v = pow( x, y );
	t.strictEqual( v, 0.0, 'pow('+x+','+y+') returns 0' );

	t.end();
});

tape( 'the function evaluates the exponential function (small `x`, large `y`)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = smallLarge.x;
	y = smallLarge.y;
	expected = smallLarge.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		if ( expected[i] === 5.0e-324 ) {
			t.strictEqual( actual === expected[i] || actual === 0.0, true, 'pow('+x[i]+','+y[i]+') returns 5e-324 or 0' );
		} else {
			t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
		}
	}
	t.end();
});

tape( 'the function evaluates the exponential function (large `x`, small `y`)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = largeSmall.x;
	y = largeSmall.y;
	expected = largeSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the exponential function (small `x`, small `y`)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = smallSmall.x;
	y = smallSmall.y;
	expected = smallSmall.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the exponential function (decimal `x`, decimal `y`)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = decimalDecimal.x;
	y = decimalDecimal.y;
	expected = decimalDecimal.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the exponential function (decimal `x`, integer `y`)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = decimalInteger.x;
	y = decimalInteger.y;
	expected = decimalInteger.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the exponential function (integer `x`, decimal `y`)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = integerDecimal.x;
	y = integerDecimal.y;
	expected = integerDecimal.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function evaluates the exponential function (integer `x`, integer `y`)', function test( t ) {
	var expected;
	var actual;
	var x;
	var y;
	var i;

	x = integerInteger.x;
	y = integerInteger.y;
	expected = integerInteger.expected;
	for ( i = 0; i < x.length; i++ ) {
		actual = pow( x[i], y[i] );
		t.strictEqual( actual, expected[i], 'pow('+x[i]+','+y[i]+') returns '+expected[i] );
	}
	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` for the exponent', function test( t ) {
	var v;

	v = pow( -3.0, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = pow( 0.0, NaN );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'the function returns `NaN` if provided `NaN` for the base', function test( t ) {
	var v;

	v = pow( NaN, 5.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = pow( NaN, 1.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = pow( NaN, 0.0 );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'any number raised to the zero power is `1`', function test( t ) {
	var x;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		x = ( randu()*1.0e6 ) - 5.0e5;
		v = pow( x, 0.0 );
		t.strictEqual( v, 1.0, 'pow('+x+',0.0) returns 1' );
	}
	t.strictEqual( pow( PINF, 0.0 ), 1.0, 'inf^0 = 1' );
	t.strictEqual( pow( NINF, 0.0 ), 1.0, '(-inf)^0 = 1' );
	t.strictEqual( pow( 0.0, 0.0 ), 1.0, '0^0 = 1' );
	t.end();
});

tape( 'any number raised to the `-1` power is the reciprocal of that number', function test( t ) {
	var x;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		x = ( randu()*1.0e6 ) - 5.0e5;
		v = pow( x, -1.0 );
		t.strictEqual( v, 1/x, 'pow('+x+',0.0) returns '+(1/x) );
	}
	t.strictEqual( isPositiveZero( pow( PINF, -1.0 ) ), true, 'inf^-1 = 0' );
	t.strictEqual( isNegativeZero( pow( NINF, -1.0 ) ), true, '(-inf)^0 = -0' );
	t.strictEqual( pow( 0.0, -1.0 ), PINF, '0^-1 = +infinity' );
	t.strictEqual( pow( -0.0, -1.0 ), NINF, '(-0)^-1 = -infinity' );
	t.end();
});

tape( 'unity raised to any power is `1`', function test( t ) {
	var y;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		y = ( randu()*1.0e6 ) - 5.0e5;
		v = pow( 1.0, y );
		t.strictEqual( v, 1.0, 'pow(1.0,'+y+') returns 1' );
	}
	t.strictEqual( pow( 1.0, PINF ), 1.0, '1^inf = 1' );
	t.strictEqual( pow( 1.0, NINF ), 1.0, '1^(-inf) = 1' );
	t.strictEqual( pow( 1.0, 0.0 ), 1.0, '1^0 = 1' );
	t.end();
});

tape( '`-1` raised to any odd integer is `-1`', function test( t ) {
	var v;
	var i;
	for ( i = -51; i < 53; i += 2 ) {
		v = pow( -1.0, i );
		t.strictEqual( v, -1.0, 'pow(1.0,'+i+') returns -1' );
	}
	t.end();
});

tape( '`+-0` raised to `-infinity` is `+infinity`', function test( t ) {
	var v;

	v = pow( +0.0, NINF );
	t.strictEqual( v, PINF, 'returns expected value' );

	v = pow( -0.0, NINF );
	t.strictEqual( v, PINF, 'returns expected value' );

	t.end();
});

tape( '`+-0` raised to `+infinity` is `0`', function test( t ) {
	var v;

	v = pow( +0.0, PINF );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	v = pow( -0.0, PINF );
	t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );

	t.end();
});

tape( '`+-0` raised to any positive finite number which is not an odd integer is `0`', function test( t ) {
	var y;
	var i;
	var v;

	y = [
		2,
		3.14,
		1.0e5,
		5.1,
		9.999999
	];

	for ( i = 0; i < y.length; i++ ) {
		v = pow( +0.0, y[ i ] );
		t.strictEqual( isPositiveZero( v ), true, 'pow(0,'+y[i]+') returns +0' );

		v = pow( -0.0, y[ i ] );
		t.strictEqual( isPositiveZero( v ), true, 'pow(-0,'+y[i]+') returns +0' );
	}
	t.end();
});

tape( '`+-0` raised to any positive odd integer is `+-0`', function test( t ) {
	var i;
	var v;

	for ( i = 1; i < 101; i += 2 ) {
		v = pow( +0.0, i );
		t.strictEqual( isPositiveZero( v ), true, 'pow(0,'+i+') returns +0' );

		v = pow( -0.0, i );
		t.strictEqual( isNegativeZero( v ), true, 'pow(-0,'+i+') returns -0' );
	}
	t.end();
});

tape( '`+-0` raised to any negative finite number which is not an odd integer is `+infinity`', function test( t ) {
	var y;
	var i;
	var v;

	y = [
		-2,
		-3.14,
		-1.0e5,
		-5.1,
		-9.999999
	];

	for ( i = 0; i < y.length; i++ ) {
		v = pow( +0.0, y[ i ] );
		t.strictEqual( v, PINF, 'pow(0,'+y[i]+') returns +infinity' );

		v = pow( -0.0, y[ i ] );
		t.strictEqual( v, PINF, 'pow(-0,'+y[i]+') returns +infinity' );
	}
	t.end();
});

tape( '`+-0` raised to any negative odd integer is `+-infinity`', function test( t ) {
	var i;
	var v;

	for ( i = -101; i < 0; i += 2 ) {
		v = pow( +0.0, i );
		t.strictEqual( v, PINF, 'pow(0,'+i+') returns +infinity' );

		v = pow( -0.0, i );
		t.strictEqual( v, NINF, 'pow(-0,'+i+') returns -infinity' );
	}
	t.end();
});

tape( '`-1` raised to `+-infinity` is indeterminate and the function returns `NaN`', function test( t ) {
	var v;

	v = pow( -1.0, PINF );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	v = pow( -1.0, NINF );
	t.strictEqual( isnan( v ), true, 'returns expected value' );

	t.end();
});

tape( 'raising any number to the `1/2` power returns the same results as evaluating the principal square root', function test( t ) {
	var x;
	var v;
	var i;
	for ( i = 0; i < 500; i++ ) {
		x = randu()*1.0e5;
		v = pow( x, 0.5 );
		t.strictEqual( v, sqrt( x ), 'returns sqrt('+x+')' );
	}
	t.end();
});

tape( 'raising any number to the `-1/2` power returns the same results as evaluating the inverse of the principal square root', function test( t ) {
	var x;
	var v;
	var i;
	for ( i = 0; i < 500; i++ ) {
		x = randu()*1.0e5;
		v = pow( x, -0.5 );
		t.strictEqual( v, 1.0/sqrt( x ), 'returns sqrt('+x+')' );
	}
	t.end();
});

tape( 'the function returns `+infinity` if a positive number greater than `1` is raised to `+infinity`', function test( t ) {
	var x;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		x = 1.0 + ( randu()*1.0e5 );
		v = pow( x, PINF );
		t.strictEqual( v, PINF, 'pow('+x+',+infinity) returns +infinity' );
	}
	t.end();
});

tape( 'the function returns `+infinity` if a negative number less than `-1` is raised to `+infinity`', function test( t ) {
	var x;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		x = ( -randu()*1.0e5 ) - 1.0;
		v = pow( x, PINF );
		t.strictEqual( v, PINF, 'pow('+x+',+infinity) returns +infinity' );
	}
	t.end();
});

tape( 'the function returns `+infinity` if `-infinity` is raised to `+infinity`', function test( t ) {
	var v = pow( NINF, PINF );
	t.strictEqual( v, PINF, 'returns +infinity' );
	t.end();
});

tape( 'the function returns `(-0)^y` if `-infinity` is raised to a numeric `y` power', function test( t ) {
	var y;
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		y = ( randu()*100.0 ) - 50.0;
		v = pow( NINF, y );
		t.strictEqual( v, pow( -0.0, -y ), 'pow(-infinity,'+y+') returns pow(-0,-'+y+')' );
	}
	v = pow( NINF, NINF );
	t.strictEqual( v, pow( -0.0, PINF ), 'pow(-infinity,-infinity) returns pow(-0,+infinity)' );

	v = pow( NINF, PINF );
	t.strictEqual( v, pow( -0.0, NINF ), 'pow(-infinity,+infinity) returns pow(-0,-infinity)' );

	v = pow( NINF, 5.0 );
	t.strictEqual( v, pow( -0.0, -5.0 ), 'pow(-infinity,5) returns pow(-0,-5)' );

	v = pow( NINF, 2.0 );
	t.strictEqual( v, pow( -0.0, -2.0 ), 'pow(-infinity,2) returns pow(-0,-2)' );

	v = pow( NINF, -5.0 );
	t.strictEqual( v, pow( -0.0, 5.0 ), 'pow(-infinity,-5) returns pow(-0,5)' );

	v = pow( NINF, -2.0 );
	t.strictEqual( v, pow( -0.0, 2.0 ), 'pow(-infinity,-2) returns pow(-0,2)' );

	t.end();
});

tape( 'the function returns `0` if a positive number greater than `1` is raised to `-infinity`', function test( t ) {
	var x;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		x = 1.0 + ( randu()*1.0e5 );
		v = pow( x, NINF );
		t.strictEqual( v, 0.0, 'pow('+x+',-infinity) returns 0' );
	}
	t.end();
});

tape( 'the function returns `0` if `+infinity` is raised to `-infinity`', function test( t ) {
	var v = pow( PINF, NINF );
	t.strictEqual( v, 0.0, 'returns 0' );
	t.end();
});

tape( 'the function returns `0` if `+infinity` is raised to any negative finite number', function test( t ) {
	var y;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		y = -(randu() * 1.0e5) - EPS;
		v = pow( PINF, y );
		t.strictEqual( isPositiveZero( v ), true, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `+infinity` if `+infinity` is raised to any positive finite number', function test( t ) {
	var y;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		y = ( randu()*1.0e5 ) + EPS;
		v = pow( PINF, y );
		t.strictEqual( v, PINF, 'returns expected value' );
	}
	t.end();
});

tape( 'the function returns `0` if a negative number less than `-1` is raised to `-infinity`', function test( t ) {
	var x;
	var v;
	var i;
	for ( i = 0; i < 100; i++ ) {
		x = ( -randu()*1.0e5 ) - 1.0;
		v = pow( x, NINF );
		t.strictEqual( v, 0.0, 'pow('+x+',-infinity) returns 0' );
	}
	t.end();
});

tape( 'the function returns `NaN` if asked to raise a negative number to an exponent whose absolute value is greater than 0 but less than 1', function test( t ) {
	var x;
	var y;
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		x = ( -randu()*1.0e5 ) - EPS;
		y = randu();
		if ( y === 0.0 || y === 1.0 ) {
			continue;
		}
		v = pow( x, y );
		t.strictEqual( isnan( v ), true, 'pow('+x+','+y+') returns NaN' );
	}
	t.end();
});

tape( 'if `y > 2^64` and `x` is greater than `1`, the function overflows', function test( t ) {
	var x;
	var y;
	var v;

	x = 1.0 + EPS; // smallest value greater than 1.0
	y = 3.6893488147419103e19; // 2.0^65
	v = pow( x, y );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'if `y < -(2^64)` and `x` is greater than `1`, the function underflows', function test( t ) {
	var x;
	var y;
	var v;

	x = 1.0 + EPS; // smallest value greater than 1.0
	y = -3.6893488147419103e19; // -(2.0)^65
	v = pow( x, y );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if `y > 2^64` and `x` is less than `1`, the function underflows', function test( t ) {
	var x;
	var y;
	var v;

	x = 1.0 - EPS; // greatest value less than 1.0
	y = 3.6893488147419103e19; // 2.0^65
	v = pow( x, y );
	t.strictEqual( v, 0.0, 'returns expected value' );
	t.end();
});

tape( 'if `y < -(2^64)` and `x` is less than `1`, the function overflows', function test( t ) {
	var x;
	var y;
	var v;

	x = 1.0 - EPS; // greatest value less than 1.0
	y = -3.6893488147419103e19; // -(2.0^65)
	v = pow( x, y );
	t.strictEqual( v, PINF, 'returns expected value' );
	t.end();
});

tape( 'if `y > 2^31` and `|x|` significantly less than unity, the function underflows', function test( t ) {
	var exp;
	var x;
	var y;
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		x = 0.5 * randu();

		exp = round( randu()*32.0 ) + 32;
		y = pow( 2.0, exp );

		v = pow( x, y );
		t.strictEqual( isPositiveZero( v ), true, 'pow('+x+','+y+') returns +0' );

		if ( y < MAX_SAFE_INTEGER ) {
			y += 1;
			v = pow( -x, y );
			t.strictEqual( isNegativeZero( v ), true, 'pow(-'+x+','+y+') returns -0' );
		}
	}
	t.end();
});

tape( 'if `y < -(2^31)` and `|x|` significantly less than unity, the function overflows', function test( t ) {
	var exp;
	var x;
	var y;
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		x = 0.5 * randu();

		exp = round( randu()*32.0 ) + 32;
		y = -pow( 2.0, exp );

		v = pow( x, y );
		t.strictEqual( v, PINF, 'pow('+x+','+y+') returns +infinity' );

		if ( abs(y) < MAX_SAFE_INTEGER ) {
			y -= 1;
			v = pow( -x, y );
			t.strictEqual( v, NINF, 'pow(-'+x+','+y+') returns -infinity' );
		}
	}
	t.end();
});

tape( 'if `y < -(2^31)` and `|x|` significantly greater than unity, the function underflows', function test( t ) {
	var exp;
	var x;
	var y;
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		x = 2.0 + ( randu()*1.0e5 );

		exp = round( randu()*32.0 ) + 32;
		y = -pow( 2.0, exp );

		v = pow( x, y );
		t.strictEqual( isPositiveZero( v ), true, 'pow('+x+','+y+') returns +0' );

		if ( abs(y) < MAX_SAFE_INTEGER ) {
			y -= 1;
			v = pow( -x, y );
			t.strictEqual( isNegativeZero( v ), true, 'pow(-'+x+','+y+') returns -0' );
		}
	}
	t.end();
});

tape( 'if `y > 2^31` and `|x|` significantly greater than unity, the function overflows', function test( t ) {
	var exp;
	var x;
	var y;
	var v;
	var i;

	for ( i = 0; i < 100; i++ ) {
		x = 2.0 + ( randu()*1.0e5 );

		exp = round( randu()*32.0 ) + 32;
		y = pow( 2.0, exp );

		v = pow( x, y );
		t.strictEqual( v, PINF, 'pow('+x+','+y+') returns +infinity' );

		if ( y < MAX_SAFE_INTEGER ) {
			y += 1;
			v = pow( -x, y );
			t.strictEqual( v, NINF, 'pow(-'+x+','+y+') returns -infinity' );
		}
	}
	t.end();
});
