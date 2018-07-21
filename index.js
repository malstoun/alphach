function rgba(cstring, alpha) {
	const regexp = /rgba?\((\d+){1,3},\s*(\d+){1,3},\s*(\d+){1,3}(,\s*([0-9.]){1,3})*\)/;
	return cstring.replace(regexp, `rgba($1, $2, $3, ${alpha})`)
}

function color(cstring, alpha) {
	const colorModel = cstring.slice(0, 3);

	switch (colorModel) {
		case 'rgb':
			return rgba(cstring, alpha);
		default:
			throw new Error(`${colorModel} color model isn\'t currently supported`);
	}
}

module.exports = color;
