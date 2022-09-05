import fs from "fs/promises";

export default async function createInputTextFile(
  filename: string,
  code_input: string
) {
  try {
    await fs.writeFile(
      global.appRoot + `/files/${filename}_input.txt`,
      code_input,
      {
        flag: "w",
      }
    );
  } catch (err: any) {
    console.log("\x1b[33m File creation error! \x1b[0m");
    throw {
      err: true,
      error_type: "Internal Server Error",
      message: "failed to create input.txt file",
    };
  }
}
