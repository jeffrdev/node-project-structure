export default async function (fastify, options) {
  fastify.get('/', async (request, reply) => {
    reply
      .type('text/html')
      .send('<h1>Welcome!</h1><h3>Thanks for using Node Project Structure.</h3>')
  })
}
