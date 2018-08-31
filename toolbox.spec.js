const { expect } = require('chai')
const { foldList } = require('./toolbox')

describe('foldList', () => {
  it('should foldList appropriately', () => {
    expect(foldList((a, b) => a + b, 0, [1, 2, 3])).to.deep.equal([0, 1, 3, 6])
  })

  const list = [1, 3, 4, 8]
  const countList = [0, 1, 4, 8, 16]
  it('should foldList appropriately', () => {
    const list = [1, 3, 4, 8]
    const countList = [0, 1, 4, 8, 16]
    expect(foldList((a, b) => a + b, 0, list)).to.deep.equal(countList)
  })
})
