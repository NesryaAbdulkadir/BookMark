import React, { useContext, useState } from "react";
import { markContext } from "../../Context";
import { Link, useParams } from "react-router-dom";
import { slugify } from "../../helpers/Slugify";
import { EllipsisVertical, X } from "lucide-react";

export default function BookMarkItems({ setValue, value }) {
  const {
    showEditor,
    setShowEditor,
    collections,
    setCollections,
    colorPallet,
    handleDeleteCollection,
    setEditIndex,
  } = useContext(markContext);

  const { slug } = useParams();

  const [showMenu, setShowMenu] = useState(null);

  const collection = collections.find(
    (collection) => slugify(collection.name) === slug
  );

  function handleEdit(url, name) {
    setShowEditor(true);

    setValue({
      bookMarkUrl: url,
      bookMarkName: name,
    });
    setShowMenu(null);
  }

  function handleDelete(name) {
    setShowMenu(null);
    handleDeleteCollection(collection.id, name);
  }

  return (
    <div className="justify-center items-start gap-14 pt-10 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 ">
      {collection?.items.map((item, index) => (
        <div className="flex gap-3 relative" key={index}>
          <div className="flex flex-col items-center gap-3">
            <Link target="_blank" to={item.url} key={index}>
              <div
                className={`w-40 h-40 rounded-full ${
                  colorPallet[index % colorPallet.length]
                } m-2`}
              ></div>

              <p className="text-xl text-center">{item.name}</p>
            </Link>
          </div>
          {showMenu === index ? (
            <X
              className="cursor-pointer mt-5"
              onClick={() => setShowMenu(null)}
            />
          ) : (
            <EllipsisVertical
              className="cursor-pointer mt-5"
              onClick={() => setShowMenu(index)}
            />
          )}
          {showMenu === index && (
            <div className=" top-5 right-24 absolute bg-gray-800 rounded-lg p-10 flex flex-col gap-5 text-center text-xl">
              <button onClick={() => handleEdit(item.url, item.name)}>
                Edit
              </button>
              <button onClick={() => handleDelete(item.name)}>Delete</button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
