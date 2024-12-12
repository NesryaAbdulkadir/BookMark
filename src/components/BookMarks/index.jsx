import React, { useContext } from "react";
import { markContext } from "../../Context";
import BookMarkItems from "../BookMarkItems";
import { Link, useParams } from "react-router-dom";
import { slugify } from "../../helpers/Slugify";

export default function BookMarks() {
  const { setShowEditor, collections } = useContext(markContext);
  const { slug } = useParams();
  const collection = collections.find(
    (collection) => slugify(collection.name) === slug
  );

  return (
    <div className="w-10/12 mx-auto p-10 min-h-screen">
      <div className="flex flex-col md:flex-row items-center md:justify-between justify-start gap-10">
        <h1 className="text-3xl font-bold">
          <Link to="/" className="text-blue-500">
            Collection
          </Link>
          / BookMarks
        </h1>
        <span>
          <button
            onClick={() => setShowEditor(true)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Create BookMark
          </button>
        </span>
      </div>
      {collection?.items?.length === 0 ? (
        <h1 className="text-3xl sm:text-5xl   font-bold text-center text-blue-950 mt-20">
          No BookMarks Found
        </h1>
      ) : (
        <BookMarkItems />
      )}
    </div>
  );
}
