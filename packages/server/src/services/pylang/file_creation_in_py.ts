import exec from "await-exec";

export default async function file_creation_in_py(
  code_body: string,
  file_name: string
) {
  try {
    const { stderr, stdout, err } = await exec(
      `echo ${code_body} >> files/${file_name}.py`
    );
    return {
      file_name: `files/${file_name}.py`,
      module: "file_creation",
      success: true,
    };
  } catch (err: any) {
    throw new Error(err);
  }
}

export async function input_file_creation_in_py(
  code_input: string,
  file_name: string
) {
  try {
    const { stderr, stdout, err } = await exec(
      `echo ${code_input} >> files/${file_name}.txt`
    );
    return {
      file_name: `files/${file_name}.txt`,
      module: "input file_creation",
      success: true,
    };
  } catch (err: any) {
    throw new Error(err);
  }
}
