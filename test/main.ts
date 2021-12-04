import test from 'ava'
import add from '../source/index.js'

test('main', (t) => {
	t.is(add(0, 0), 0)
	t.is(add(41, 68), 109)
	t.is(add(-10, 20), 10)
})
