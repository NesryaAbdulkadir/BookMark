import React, { useContext } from "react";
import { markContext } from "../../Context";
import { Link } from "react-router-dom";
import { slugify } from "../../helpers/Slugify";

export default function CollectionItems({ collections }) {
  const { colorPallet } = useContext(markContext);
  return (
    <div className="justify-center items-start gap-14 pt-10 grid xl:grid-cols-6  lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
      {collections.map((collection, index) => (
        <Link
          to={`/collections/${slugify(collection.name)}/urls`}
          key={collection.id}
          className="flex flex-col items-center gap-3"
        >
          <div
            className={`w-full h-20 rounded-lg ${
              colorPallet[index % colorPallet.length]
            } m-2`}
          ></div>
          <p className="text-xl">{collection.name}</p>
        </Link>
      ))}
    </div>
  );
}
