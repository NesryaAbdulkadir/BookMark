import React, { useContext, useState } from "react";
import { markContext } from "../../Context";

export default function Editor({
  handleSubmit,
  value,
  setValue,
  handleChange,
  nameOfInput1,
  nameOfInput2,
  type,
  placeholder,
}) {
  const { setShowEditor } = useContext(markContext);

  return (
    <div className="fixed top-[20%] left-[25%] w-[50%] h-[400px] bg-gray-800 rounded-lg p-10 flex flex-col gap-5">
      <button onClick={() => setShowEditor(false)} className="text-xl">
        X
      </button>
      <form
        className="flex flex-col gap-5 w-full h-full"
        onSubmit={(e) => handleSubmit(e)}
      >
        <input
          type={type || "text"}
          placeholder={placeholder[0]}
          name={nameOfInput1}
          value={value.collectionName || value.bookMarkUrl}
          onChange={(e) => handleChange(e)}
          className="w-full p-3 bg-gray-900 outline-none text-xl rounded-md"
        />
        <textarea
          placeholder={placeholder[1]}
          name={nameOfInput2}
          className="w-full p-3 bg-gray-900 outline-none text-xl rounded-md h-full"
          value={value.collectionDescription || value.bookMarkName}
          onChange={(e) => handleChange(e)}
        />
        <button
          className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 text-xl px-4 rounded"
          type="submit"
        >
          Create Collection
        </button>
      </form>
    </div>
  );
}
