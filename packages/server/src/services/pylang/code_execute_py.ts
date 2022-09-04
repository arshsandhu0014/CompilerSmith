import exec from "await-exec";

export async function code_compile_py(file_name: string) {
  try {
    const { err, stdout, stderr } = await exec(
      `cd files && python3 ${file_name}.py < ${file_name}.txt`
    );

    return {
      output: stdout,
      module: "python file running",
      success: true,
    };
  } catch (err: any) {
    throw new Error(err);
  }
}
