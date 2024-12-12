import React, { useContext } from "react";
import CollectionItems from "../CollectionItems";
import { markContext } from "../../Context";

export default function Collection() {
  const { collections, setShowEditor } = useContext(markContext);

  return (
    <div className="w-10/12 mx-auto p-10">
      <div className="flex flex-col md:flex-row items-center md:justify-between justify-start gap-10">
        <h1 className="text-3xl font-bold">Collections</h1>
        <span>
          <button
            onClick={() => setShowEditor(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create Collection
          </button>
        </span>
      </div>

      {collections?.length === 0 ? (
        <h1 className="text-3xl sm:text-5xl  font-bold text-center text-blue-950 mt-20">
          No BookMarks Found
        </h1>
      ) : (
        <CollectionItems collections={collections} />
      )}
    </div>
  );
}
