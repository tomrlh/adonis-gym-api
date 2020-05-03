'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

class ContentType {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle ({ request }, next) {
    console.log('CONTENTTYPE MIDDLEWARE')
    let headers = request.headers()
    headers.accept = 'application/json'

    await next()
  }
}

module.exports = ContentType
