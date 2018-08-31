// Jauge (spec)
// ============
const { expect } = require('chai')
const { countFold, meanFold, varianceFold } = require('./BeckmanFold1')

describe('countFold', () => {
  const list = [1, 3, 4, 8]
  const dic = { '1': 1, '2': 2 }

  it('should count appropriately', () => {
    expect(countFold(list)).to.equal(list.length)
  })
  it('should count return 0 on empty list', () => {
    expect(countFold([])).to.equal(0)
  })
  it('should return a TypeError when no input', () => {
    expect(countFold).to.throw()
  })
  it('should return a TypeError on non Array Object', () => {
    expect(() => countFold(dic)).to.throw()
  })
})

describe('meanFold', () => {
  const list = [1, 1, 1, 1]
  const seq = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const dic = { '1': 1, '2': 2 }

  it('should mean a list of 1 to 1', () => {
    expect(meanFold(list)).to.deep.equal({ mean: 1, count: 4 })
  })
  it('should mean a list of a seq from 1 to 9 to 5', () => {
    expect(meanFold(seq)).to.deep.equal({ mean: 5, count: 9 })
  })
  it('should return mean NaN on empty list', () => {
    expect(meanFold([])).to.deep.equal({ mean: NaN, count: 0 })
  })
  it('should return a TypeError when no input', () => {
    expect(meanFold).to.throw()
  })
  it('should return a TypeError on non Array Object', () => {
    expect(() => meanFold(dic)).to.throw()
  })
})

describe('varianceFold', () => {
  const list = [1, 1, 1, 1]
  const seq = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  const dic = { '1': 1, '2': 2 }

  it('should return variance NaN on empty list', () => {
    expect(varianceFold([])).to.deep.equal({ variance: NaN, count: 0 })
  })

  // it('should var a list of 1 to 0', () => {
  //   expect(varianceFold(list)).to.deep.equal({ variance: 0, count: 4 })
  // })
})
