import Fastify from "fastify";
import indexRouter from "./routes";
import codeRouter from "./routes/code";
import fastifyCors from "@fastify/cors";
import path from "path";

global.appRoot = path.resolve("./");
const fastify = Fastify({
  logger: true,
});
fastify.register(indexRouter);
fastify.register(codeRouter);

fastify.register(fastifyCors, {
  origin: "*",
  methods: "GET,PUT,POST,DELETE,OPTIONS",
});

fastify.listen({ port: 8080, host: "0.0.0.0" }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
});
