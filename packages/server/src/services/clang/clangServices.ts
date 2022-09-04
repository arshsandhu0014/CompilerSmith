import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { codeRouterRequestType } from "../../controllers/codeRouteHandler";
import makeid from "../../utils/makeid";
import { code_compile_c, code_run_c } from "./code_execute_c";
import file_creation_in_c, {
  input_file_creation_in_c,
} from "./file_creation_in_c";

export default async function clangServices(
  fastify: FastifyInstance,
  request: FastifyRequest<codeRouterRequestType>,
  reply: FastifyReply
) {
  const file_name = makeid(10) + "file";
  const { code_body, code_input } = request.body;

  try {
    const response_1 = await file_creation_in_c(code_body, file_name);
    const response_2 = await input_file_creation_in_c(code_input, file_name);
    const response_3 = await code_compile_c(file_name);
    const response_4 = await code_run_c(file_name);
    reply.send(response_4);
  } catch (err: any) {
    throw new Error(err);
  }

  /** *
   *
   * file creation * compile
   * run
   *
   */
}
