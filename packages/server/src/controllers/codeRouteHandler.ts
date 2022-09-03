import {
  FastifyInstance,
  FastifyReply,
  FastifyRequest,
  RequestGenericInterface,
} from "fastify";
import { FromSchema } from "json-schema-to-ts";
import clangServices from "../services/clang/clangServices";
import cpplangServices from "../services/cpplang/cpplangServices";
import pylangServices from "../services/pylang/pylangServices";

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

export interface codeRouterRequestType extends RequestGenericInterface {
  Body: {
    lang: string;
    code_body: string;
    code_input: string;
  };
}

export default async function codeRouterHandler(
  fastify: FastifyInstance,
  request: FastifyRequest<codeRouterRequestType>,
  reply: FastifyReply
) {
  const lang = request.body.lang;
  if (lang == "c") {
    await clangServices(fastify, request, reply);
  } else if (lang == "cpp") {
    await cpplangServices(fastify, request, reply);
  } else if (lang == "py") {
    await pylangServices(fastify, request, reply);
  } else {
    reply.status(400).send({
      message: "lang not supported currently",
    });
  }
}
