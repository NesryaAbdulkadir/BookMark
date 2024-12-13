import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";
import { v4 as uuidv4 } from "uuid";

const markContext = createContext();

const initialValue = {
  id: 0,
  name: "",
  description: "",
  items: [],
};

function MarkProvider({ children }) {
  const [collections, setCollections] = useLocalStorage("collections", [
    initialValue,
  ]);
  const colorPallet = [
    "bg-yellow-300",
    "bg-orange-300",
    "bg-red-300",
    "bg-blue-300",
    "bg-green-300",
    "bg-purple-300",
    "bg-pink-300",
    "bg-gray-300",
    "bg-cyan-300",
    "bg-teal-300",
    "bg-lime-300",
    "bg-sky-300",
    "bg-emerald-300",
    "bg-amber-300",
    "bg-indigo-300",

    "bg-rose-300",
    "bg-fuchsia-300",
    "bg-violet-300",
    "bg-slate-300",
    "bg-zinc-300",
    "bg-neutral-300",

    "bg-stone-300",
    "bg-red-300",
    "bg-orange-300",
  ];
  const [editIndex, setEditIndex] = useState(null);

  function handleAddCollection(name, description, url, urlName) {
    const existingCollection = collections.find(
      (collection) => collection.name === name
    );

    if (existingCollection) {
      // If the collection exists, add the URL to its items
      setCollections((prevCollections) =>
        prevCollections.map((singleCollection) =>
          singleCollection.name === name
            ? {
                ...singleCollection,
                items: [
                  ...singleCollection.items,
                  {
                    url, // Use the provided url parameter
                    name: urlName, // Use the provided urlName parameter
                  },
                ],
              }
            : singleCollection
        )
      );
    } else {
      // If the collection does not exist, create a new collection
      const newCollection = {
        id: uuidv4(), // Consider using a more reliable ID generation method
        name,
        description,
        items: [],
      };

      setCollections((prevCollections) => [...prevCollections, newCollection]);
    }
  }

  function handleDeleteCollection(collectionId) {
    const newCollections = collections.filter(
      (collection) => collection.id !== collectionId
    );
    setCollections(newCollections);
  }

  function handleEditCollection(id, newName, newDescription) {
    setCollections((prevCollections) =>
      prevCollections.map((collection) =>
        collection.id === id
          ? { ...collection, name: newName, description: newDescription }
          : collection
      )
    );
  }

  function handleEditBookmark(collectionName, oldUrl, newUrl, newName) {
    setCollections((prevCollections) =>
      prevCollections.map((collection) =>
        collection.name === collectionName
          ? {
              ...collection,
              items: collection.items.map((item) =>
                item.url === oldUrl ? { url: newUrl, name: newName } : item
              ),
            }
          : collection
      )
    );
  }

  const [showEditor, setShowEditor] = useState(false);

  const value = {
    collections,
    setCollections,
    colorPallet,
    showEditor,
    setShowEditor,
    handleAddCollection,
    handleDeleteCollection,
    handleEditCollection,
    handleEditBookmark,
    editIndex,
    setEditIndex,
  };
  return <markContext.Provider value={value}>{children}</markContext.Provider>;
}

export { markContext, MarkProvider };
