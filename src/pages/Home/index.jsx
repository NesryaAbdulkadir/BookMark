import { useContext, useState } from "react";
import Collection from "../../components/Collection";
import Editor from "../../components/Editor";
import { markContext } from "../../Context";
const initialValue = {
  collectionName: "",
  collectionDescription: "",
};
export default function Home() {
  const { showEditor, setShowEditor, collections, setCollections } =
    useContext(markContext);

  const [value, setValue] = useState(initialValue);
  function handleSubmit(e) {
    e.preventDefault();

    setCollections([
      ...collections,
      {
        id: collections.length + 1,
        name: value.collectionName,
        description: value.collectionDescription,
        items: [],
      },
    ]);
    setValue(initialValue);
    setShowEditor(false);
  }
  function handleChange(e) {
    setValue({ ...value, [e.target.name]: e.target.value });
  }
  return (
    <div>
      <Collection />
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
