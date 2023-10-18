/* 
You can see, arr is defined as an array, arr.length should be a number value, but in this example, the number value should convert to bool value.
it means if arr.length value is 0, convert value to false, if arr.length value is not 0, convert value to true.

These values are converted to false in the conditional statement: 
0, -0, "", null, undefined, NaN
*/

function trueOrFalse(val) {
	if (val == false || val == null || val == undefined) {
		return "false"
	} else {
		return "true"
	}
}