import fs from "fs/promises";
import createInputTextFile from "../../utils/createInputTextFile";

export async function createClangFile(filename: string, code_body: string) {
  try {
    await fs.writeFile(global.appRoot + `/files/${filename}.c`, code_body, {
      flag: "w",
    });
  } catch (err: any) {
    console.log("\x1b[33m File creation error! \x1b[0m");
    throw {
      err: true,
      error_type: "Internal Server Error",
      message: "failed to create .cpp file",
    };
  }
}

export default async function createFilesForClang(
  filename: string,
  code_body: string,
  code_input: string
) {
  await createClangFile(filename, code_body);
  await createInputTextFile(filename, code_input);
}
