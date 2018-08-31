// functional toolbox
function foldList(fn, init, list) {
  const res = list.reduce(
    (acc, newVal, idx) => {
      const res = fn(acc[idx], newVal)
      return [...acc, res]
    },
    [init]
  )
  return res
}

module.exports = {
  foldList,
}
