const MAX = 360
const PHI = (1 + Math.sqrt(5)) / 2

function* hueGenerator(saturation = 50, lightness = 50, startingIdx = 0, maxSize = Infinity) {
	this.idx = startingIdx % MAX
	const getString = hue => `hsl(${hue}, ${saturation}%, ${lightness}%)`
	while (this.idx < maxSize) {
		const hue = Math.round((this.idx * PHI * MAX) % MAX)
		yield getString(hue)
		this.idx++
	}
}

function getGenerator(saturation = 50, lightness = 50, startingIdx = 0) {
	const self = {}
	self.next = function() {
		self.generator = self.generator || hueGenerator(saturation, lightness, startingIdx)
		return self.generator.next().value
	}
	self.asArray = function(length = 1e4) {
		const limitedGenerator = hueGenerator(saturation, lightness, startingIdx, length)
		const array = Array.from(limitedGenerator)
		return array
	}
	return self
}

module.exports = getGenerator
