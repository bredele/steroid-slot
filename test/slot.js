/**
 * Test dependencies
 */

const test = require('tape')
const slot = require('..')
const fs = require('fs')
const concat = require('concat-stream')


test('should select slot name and return stream', assert => {
  assert.plan(1)
  slot.query(
    'header',
    fs.createReadStream(__dirname + '/test.html')
  ).pipe(concat(data => {
    assert.equal(data.toString(), '<header slot="header">hello</header>')
  }))
})


test('should select slots and return stream', assert => {
  assert.plan(1)
  slot.query(
    'button',
    fs.createReadStream(__dirname + '/test.html')
  ).pipe(concat(data => {
    assert.equal(data.toString(), '<button slot="button">foo</button><button slot="button">bar</button>')
  }))
})
