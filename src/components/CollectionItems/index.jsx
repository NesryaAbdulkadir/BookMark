import React, { useContext, useState } from "react";
import { markContext } from "../../Context";
import { Link } from "react-router-dom";
import { slugify } from "../../helpers/Slugify";
import { EllipsisVertical, X, XCircle, XCircleIcon } from "lucide-react";

export default function CollectionItems({ collections, setValue, value }) {
  const {
    colorPallet,
    setShowEditor,
    handleDeleteCollection,
    editIndex,
    setEditIndex,
  } = useContext(markContext);
  const [showMenu, setShowMenu] = useState(null);
  function handleEdit(name, description, id) {
    setShowEditor(true);
    setValue({
      collectionName: name,
      collectionDescription: description,
    });
    setEditIndex(id);
    setShowMenu(null);
  }
  function handleDelete(id) {
    setShowMenu(null);
    handleDeleteCollection(id);
  }

  return (
    <div className="justify-center items-start gap-14 pt-10 grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1">
      {collections.map((collection, index) => (
        <div
          key={collection.id}
          className="flex flex-col items-center gap-2 relative"
        >
          name: {collection.name}
          description: {collection.description}
          <div className="flex justify-between w-full p-2">
            <Link to={`/collections/${slugify(collection.name)}/urls`}>
              <p className="text-xl">{collection.name}</p>
            </Link>
            {showMenu === index ? (
              <X className="cursor-pointer" onClick={() => setShowMenu(null)} />
            ) : (
              <EllipsisVertical
                className="cursor-pointer"
                onClick={() => setShowMenu(index)}
              />
            )}
          </div>
          <Link
            to={`/collections/${slugify(collection.name)}/urls`}
            className={`w-full h-10 rounded-lg ${
              colorPallet[index % colorPallet.length]
            } m-2`}
          ></Link>
          {showMenu === index && (
            <div className=" top-0 right-10 absolute bg-gray-800 rounded-lg p-10 flex flex-col gap-5 text-center text-xl">
              <button
                onClick={() =>
                  handleEdit(
                    collection.name,
                    collection.description,
                    collection.id
                  )
                }
              >
                Edit
              </button>
              <button onClick={() => handleDelete(collection.id)}>
                Delete
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
