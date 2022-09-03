import Fastify from "fastify";
import { FastifyRequest, FastifyReply } from "fastify";
import indexRouter from "./routes";
import codeRouter from "./routes/code";

const fastify = Fastify({
  logger: true,
});

fastify.register(indexRouter);
fastify.register(codeRouter);
fastify.listen({ port: 8080, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
