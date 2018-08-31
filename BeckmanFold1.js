function countFold(xs) {
  if (xs.constructor !== Array) throw new TypeError('Illegal type for input!')
  return xs.reduce((acc, newVal) => acc + 1, 0)
}

function meanFold(xs) {
  if (xs.constructor !== Array) throw new TypeError('Illegal type for input!')
  return xs.reduce(
    ({ mean, count }, newVal) => {
      const K = 1 / (count + 1)
      return { mean: mean + K * (newVal - mean), count: count + 1 }
    },
    { mean: 0, count: 0 }
  )
}
module.exports = {
  countFold,
  meanFold,
}
