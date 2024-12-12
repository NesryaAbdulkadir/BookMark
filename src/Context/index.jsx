import { createContext, useEffect, useState } from "react";
import useLocalStorage from "../Hooks/useLocalStorage";

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

  function handleDeleteCollection(collectionId) {
    const newCollections = collections.filter(
      (collection) => collection.id !== collectionId
    );
    setCollections(newCollections);
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
  };
  return <markContext.Provider value={value}>{children}</markContext.Provider>;
}

export { markContext, MarkProvider };
