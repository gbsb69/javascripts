function is_string(str) {

	if (typeof str === 'string') {
		return 'is string';
	} else {
		return 'is not string'
	}
}

console.log(is_string(123));