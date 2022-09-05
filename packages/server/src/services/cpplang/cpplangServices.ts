import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { codeRouterRequestType } from "../../controllers/codeRouteHandler";
import generateFileName from "../../utils/generateFileName";
import compileCppCode, { runCppCode } from "./executeCode";
import createFilesForCppLang from "./createFiles";

export default async function cpplangServices(
  fastify: FastifyInstance,
  request: FastifyRequest<codeRouterRequestType>,
  reply: FastifyReply
) {
  const filename = generateFileName(10);
  const { code_body, code_input } = request.body;

  try {
    await createFilesForCppLang(filename, code_body, code_input);
    await compileCppCode(filename);
    const response = await runCppCode(filename);
    reply.send(response);
  } catch (err) {
    reply.status(500).send(err);
  }
}
