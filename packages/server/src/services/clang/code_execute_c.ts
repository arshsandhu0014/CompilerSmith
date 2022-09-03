import exec from "await-exec";

export async function code_compile_c(file_name: string) {
  try {
    await exec(`g++ files/${file_name}.c -o files/${file_name}`);

    return {
      module: "compile c file...creating a .o file from .c file",
      success: true,
    };
  } catch (err: any) {
    throw new Error(err);
  }
}

export async function code_run_c(file_name: string) {
  try {
    const { stdout } = await exec(`cd files/ && ./${file_name} < input.txt`);
    return {
      success: true,
      output: stdout,
    };
  } catch (err: any) {
    throw new Error(err);
  }
}

export default async function code_compile_run_c(file_name: string) {}
