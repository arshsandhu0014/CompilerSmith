//@ts-ignore
import exec from "await-exec";

export default async function compileAndRunPythonCode(filename: string) {
  try {
    const { stdout, stderr } = await exec(
      `python3 files/${filename}.py < files/${filename}_input.txt`
    );
    return {
      success: true,
      output: stdout,
    };
  } catch (err) {
    console.log("\x1b[33m Error! \x1b[0m");
    throw {
      error: true,
      error_type: "compilation error",
      cmd: (err as any).cmd,
      err: (err as any).stderr,
    };
  }
}
