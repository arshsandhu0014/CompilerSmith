export default function CodeInput() {
  return (
    <div className="flex-1 bg-white bg-opacity-10 backdrop-blur-md drop-shadow-lg rounded-xl py-6 px-6">
      <div>
        <h1 className="text-neutral-300 text-lg">Custom Input</h1>
      </div>
      <div className="h-0 border-t w-full border-t-neutral-300 mb-2" />
      <textarea
        defaultValue="give some input..."
        className="h-48 w-full bg-transparent bg-neutral-100 bg-opacity-10 rounded-lg focus:outline-none text-neutral-200 resize-none px-2 py-2"
      />
    </div>
  );
}
