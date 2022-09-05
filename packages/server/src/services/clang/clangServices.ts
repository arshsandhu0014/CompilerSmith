import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { codeRouterRequestType } from "../../controllers/codeRouteHandler";
import generateFileName from "../../utils/generateFileName";
import createFilesForClang from "./createFiles";
import compileClangCode, { runClangCode } from "./executeCode";

export default async function clangServices(
  fastify: FastifyInstance,
  request: FastifyRequest<codeRouterRequestType>,
  reply: FastifyReply
) {
  const filename = generateFileName(10);
  const { code_body, code_input } = request.body;
  try {
    await createFilesForClang(filename, code_body, code_input);
    await compileClangCode(filename);
    const response = await runClangCode(filename);
    reply.send(response);
  } catch (err) {
    reply.status(500).send(err);
  }
}
