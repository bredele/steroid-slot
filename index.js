/**
 * Dependencies
 */

const engine = require('trumpet')
const Readable = require('stream').Readable


/**
 * Expose 'content' to be used primarly
 * with sa declarative syntax
 * @see https://github.com/bredele/steroid-hook
 */

module.exports = slot


/**
 *
 */

function slot(params) {
  return slot.query(params.name, params.from)
}


/**
 *
 *
 */

slot.query = function(selector, source) {
  const query = engine()
  const dest = new Readable
  dest._read = function(){}
  query.selectAll(`[slot="${selector}"]`, function (el) {
    el.createReadStream({
      outer: true
    }).on('data', data => dest.push(data))
  })
  query.on('end', () => dest.push(null))
  source.pipe(query)
  return dest
}
