import exec from "await-exec";

export async function code_compile_cpp(file_name: string) {
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

export async function code_run_cpp(file_name: string) {
  try {
    const { stdout } = await exec(
      `cd files/ && ./${file_name} <${file_name}.txt`
    );
    return {
      success: true,
      output: stdout,
    };
  } catch (err: any) {
    throw new Error(err);
  }
}
