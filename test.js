import test from 'ava'
import hueGenerator from '.'

test('first three colors', t => {
	const generator = hueGenerator(50, 50)
	t.is(generator.next(), 'hsl(0, 50%, 50%)')
	t.is(generator.next(), 'hsl(222, 50%, 50%)')
	t.is(generator.next(), 'hsl(85, 50%, 50%)')
})
