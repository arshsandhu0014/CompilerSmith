import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { codeRouterRequestType } from "../../controllers/codeRouteHandler";
import { code_compile_cpp, code_run_cpp } from "./code_execute_cpp";
import file_creation_in_cpp, {
  input_file_creation_in_cpp,
} from "./file_creation_in_cpp";

function makeid(length: number) {
  let result: string = "";
  let characters: string =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  let charactersLength: number = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

export default async function cpplangServices(
  fastify: FastifyInstance,
  request: FastifyRequest<codeRouterRequestType>,
  reply: FastifyReply
) {
  const file_name = makeid(10) + "file";
  const { code_body, code_input } = request.body;
  try {
    const response_1 = await file_creation_in_cpp(code_body, file_name);
    const response_2 = await input_file_creation_in_cpp(code_input, file_name);
    const response_3 = await code_compile_cpp(file_name);
    const response_4 = await code_run_cpp(file_name);
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
