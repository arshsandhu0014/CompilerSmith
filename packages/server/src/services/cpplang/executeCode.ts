//@ts-ignore
import exec from "await-exec";

export default async function compileCppCode(filename: string) {
  try {
    const { stdout, stderr } = await exec(
      `g++ files/${filename}.cpp -o files/${filename}`
    );
    console.log("stdout =>", stdout);
    console.log("stderr =>", stderr);
  } catch (err) {
    console.log("\x1b[33m Compilation error! \x1b[0m");
    throw {
      error: true,
      error_type: "compilation error",
      cmd: (err as any).cmd,
      err: (err as any).stderr,
    };
  }
}

export async function runCppCode(filename: string) {
  try {
    const { stdout, stderr } = await exec(
      `cd files/ && ./${filename} < ${filename}_input.txt`
    );
    /*
    console.log("stdout =>", stdout);
    console.log("stderr =>", stderr);
    */
    return {
      success: true,
      output: stdout,
    };
  } catch (err) {
    console.log("\x1b[33m Runtime error! \x1b[0m");
    throw {
      error: true,
      error_type: "runtime error",
      cmd: (err as any).cmd,
      err: (err as any).stderr,
    };
  }
}
