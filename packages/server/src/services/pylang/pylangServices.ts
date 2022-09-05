import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { codeRouterRequestType } from "../../controllers/codeRouteHandler";
import generateFileName from "../../utils/generateFileName";
import createFilesForPython from "./createFiles";
import compileAndRunPythonCode from "./executeCode";

export default async function pylangServices(
  fastify: FastifyInstance,
  request: FastifyRequest<codeRouterRequestType>,
  reply: FastifyReply
) {
  const filename = generateFileName(10);
  const { code_body, code_input } = request.body;
  try {
    await createFilesForPython(filename, code_body, code_input);
    const response = await compileAndRunPythonCode(filename);
    reply.send(response);
  } catch (err) {
    reply.status(500).send(err);
  }
}
