const MAX = 360
const PHI = (1 + Math.sqrt(5)) / 2

function* hueGenerator(saturation = 50, lightness = 50, startingAngle = 0, maxSize = Infinity) {
	this.idx = 0
	const getString = hue => `hsl(${hue}, ${saturation}%, ${lightness}%)`
	while (this.idx < maxSize) {
		const angle = startingAngle + this.idx * PHI * MAX
		const hue = Math.round(angle % MAX)
		yield getString(hue)
		this.idx++
	}
}

function getGenerator(saturation = 50, lightness = 50, startingAngle = 0) {
	const self = {}
	self.next = function() {
		self.generator = self.generator || hueGenerator(saturation, lightness, startingAngle)
		return self.generator.next().value
	}
	self.asArray = function(length = 1e4) {
		const limitedGenerator = hueGenerator(saturation, lightness, startingAngle, length)
		const array = Array.from(limitedGenerator)
		return array
	}
	return self
}

module.exports = getGenerator
