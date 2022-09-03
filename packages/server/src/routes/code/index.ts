import {
  FastifyInstance,
  FastifyRequest,
  RequestGenericInterface,
} from "fastify";
import codeRouterHandler from "../../controllers/codeRouteHandler";

const codeRouterSchema = {
  body: {
    type: "object",
    properties: {
      lang: { type: "string" },
      code_body: { type: "string" },
      code_input: { type: "string" },
    },
    required: ["lang", "code_body", "code_input"],
  },
} as const;

interface codeRouterRequestType extends RequestGenericInterface {
  Body: {
    lang: string;
    code_body: string;
    code_input: string;
  };
}

export default async function codeRouter(fastify: FastifyInstance) {
  fastify.route<codeRouterRequestType>({
    method: "POST",
    url: "/code",
    schema: codeRouterSchema,
    handler: async (request, reply) => {
      await codeRouterHandler(fastify, request, reply);
    },
  });
}
