import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { codeRouterRequestType } from "../../controllers/codeRouteHandler";
import makeid from "../../utils/makeid";
import { code_compile_py } from "./code_execute_py";
import file_creation_in_py, {
  input_file_creation_in_py,
} from "./file_creation_in_py";

export default async function pylangServices(
  fastify: FastifyInstance,
  request: FastifyRequest<codeRouterRequestType>,
  reply: FastifyReply
) {
  const file_name = makeid(10) + "file";
  const { code_body, code_input } = request.body;
  try {
    const response_1 = await file_creation_in_py(code_body, file_name);
    const response_2 = await input_file_creation_in_py(code_input, file_name);
    const response_3 = await code_compile_py(file_name);
    reply.send(response_3);
  } catch (err: any) {
    throw new Error(err);
  }
}
