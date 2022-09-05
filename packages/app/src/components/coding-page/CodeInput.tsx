import { customInputAtom } from "../../context/store";
import { useAtom } from "jotai";

export default function CodeInput() {
  const [customInputState, setCustomInputState] = useAtom(customInputAtom);

  const changeCustomInput = (e: any) => {
    setCustomInputState(e.target.value);
  };
  return (
    <div className="flex-1 bg-white bg-opacity-10 backdrop-blur-md drop-shadow-lg rounded-xl py-6 px-6">
      <div>
        <h1 className="text-neutral-300 text-lg">Custom Input</h1>
      </div>
      <div className="h-0 border-t w-full border-t-neutral-300 mb-2" />
      <textarea
        placeholder="your custom input goes here..."
        className="h-48 w-full bg-transparent bg-neutral-100 bg-opacity-10 rounded-lg focus:outline-none text-neutral-200 placeholder:text-neutral-300 resize-none px-2 py-2"
        onChange={changeCustomInput}
      />
    </div>
  );
}
