import { FastifyInstance } from "fastify";

export default async function indexRouter(fastify: FastifyInstance) {
  fastify.get("/", (request, reply) => {
    reply.send({
      message: "Hello there, this is melon!!!",
      status: 200,
    });
  });
}
