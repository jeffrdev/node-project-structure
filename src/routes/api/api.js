'use strict'

module.exports = async function (fastify, options) {
  fastify.get('/', async (request, reply) => {
    reply.send({
      message: 'Welcome! Thanks for using Node Project Structure.'
    })
  })
}
