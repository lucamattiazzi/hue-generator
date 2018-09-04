const MAX = 360
const PHI = (1 + Math.sqrt(5)) / 2

function getGenerator(saturation = 50, lightness = 50, startingAngle = 0) {
	const self = { idx: 0, saturation, lightness, startingAngle }
	self.next = function() {
		return self.getIdx(++self.idx)
	}
	self.getIdx = function(idx) {
		const angle = self.startingAngle + idx * PHI * MAX
		const hue = Math.round(angle % MAX)
		return `hsl(${hue}, ${self.saturation}%, ${self.lightness}%)`
	}
	self.asArray = function(length = 1e4) {
		const array = Array.from({ length }, (_, idx) => self.getIdx(idx))
		return array
	}
	self.reset = function() {
		self.idx = 0
	}
	return self
}

module.exports = getGenerator
