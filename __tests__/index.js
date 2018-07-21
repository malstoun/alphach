const color = require('../index');

describe('rgb(a) model', () => {
	it('should add numbered alpha channel to rgba', () => {
		expect(color('rgba(1, 2, 3, .6)', 1)).toBe('rgba(1, 2, 3, 1)')
	});

	it('should add string alpha channel to rgba', () => {
		expect(color('rgba(1, 2, 3, .3)', '.6')).toBe('rgba(1, 2, 3, .6)');
	});

	it('should add numbered alpha channel to rgb', () => {
		expect(color('rgb(1, 2, 3)', 1)).toBe('rgba(1, 2, 3, 1)');
	});

	it('should add string alpha channel to rgb', () => {
		expect(color('rgb(1, 2, 3)', '.3')).toBe('rgba(1, 2, 3, .3)');
	});

	it('should ignore spaces', () => {
		expect(color('rgb(1, 2, 3)', '0.1')).toBe('rgba(1, 2, 3, 0.1)');
		expect(color('rgb(1,2,3)', '0.1')).toBe('rgba(1, 2, 3, 0.1)');
	});
});

it('should throw if color model isn\'t supported', () => {
	expect(() => color("hsla(120,100%,50%", '.3')).toThrow();
});
