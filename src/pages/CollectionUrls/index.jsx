import React, { useContext, useState } from "react";
import { markContext } from "../../Context";
import BookMarks from "../../components/BookMarks";
import Editor from "../../components/Editor";
import { useParams } from "react-router-dom";
import { slugify } from "../../helpers/Slugify";

const initialValue = {
  bookMarkUrl: "",
  BookMarkName: "",
};
export default function CollectionUrls() {
  const { showEditor, setShowEditor, collections, setCollections } =
    useContext(markContext);
  const { slug } = useParams();
  const collection = collections.find(
    (collection) => slugify(collection.name) === slug
  );

  const [value, setValue] = useState(initialValue);
  function handleSubmit(e) {
    e.preventDefault();

    setCollections((prevCollection) =>
      prevCollection.map((singleCollection) =>
        singleCollection.name === collection.name
          ? {
              ...singleCollection,
              items: [
                ...singleCollection.items,
                {
                  url: value.bookMarkUrl,
                  name: value.BookMarkName,
                },
              ],
            }
          : singleCollection
      )
    );

    setValue(initialValue);
    setShowEditor(false);
  }

  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <BookMarks />
      {showEditor && (
        <Editor
          handleSubmit={handleSubmit}
          value={value}
          setValue={setValue}
          handleChange={handleChange}
          nameOfInput1={"bookMarkUrl"}
          nameOfInput2={"BookMarkName"}
          type={"url"}
          placeholder={["Enter Url", "Enter BookMark Name"]}
        />
      )}
    </div>
  );
}
