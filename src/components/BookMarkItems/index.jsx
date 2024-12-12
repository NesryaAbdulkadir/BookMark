import React, { useContext } from "react";
import { markContext } from "../../Context";
import { Link, useParams } from "react-router-dom";
import { slugify } from "../../helpers/Slugify";

export default function BookMarkItems() {
  const {
    showEditor,
    setShowEditor,
    collections,
    setCollections,
    colorPallet,
  } = useContext(markContext);
  const { slug } = useParams();

  const collection = collections.find(
    (collection) => slugify(collection.name) === slug
  );

  return (
    <div className="justify-center items-start gap-14 pt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
      {collection?.items.map((item, index) => (
        <Link
          target="_blank"
          to={item.url}
          key={index}
          className="flex flex-col items-center gap-3"
        >
          <div
            className={`w-40 h-40 rounded-full ${
              colorPallet[index % colorPallet.length]
            } m-2`}
          ></div>
          <p className="text-xl text-center">{item.name}</p>
        </Link>
      ))}
    </div>
  );
}
