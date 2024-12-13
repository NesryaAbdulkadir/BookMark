import { useContext, useState } from "react";
import Collection from "../../components/Collection";
import Editor from "../../components/Editor";
import { markContext } from "../../Context";

const initialValue = {
  collectionName: "",
  collectionDescription: "",
};

export default function Home() {
  const {
    showEditor,
    setShowEditor,
    collections,
    handleAddCollection,
    handleEditCollection,
    editIndex,
  } = useContext(markContext);

  const [value, setValue] = useState(initialValue);

  function handleSubmit(e) {
    e.preventDefault();

    const collection = collections.find(
      (collection) => collection.id === editIndex
    );

    if (collection) {
      handleEditCollection(
        collection.id,
        value.collectionName,
        value.collectionDescription
      );
    } else {
      handleAddCollection(
        value.collectionName,
        value.collectionDescription,
        []
      );
    }

    setValue(initialValue); // Reset to initial value
    setShowEditor(false);
  }

  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }

  return (
    <div>
      <Collection setValue={setValue} value={value} />
      {showEditor && (
        <Editor
          handleSubmit={handleSubmit}
          value={value}
          setValue={setValue}
          handleChange={handleChange}
          nameOfInput1={"collectionName"}
          nameOfInput2={"collectionDescription"}
          placeholder={[
            "Enter collection Name",
            "Enter Collection Description",
          ]}
        />
      )}
    </div>
  );
}
