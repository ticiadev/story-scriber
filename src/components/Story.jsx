import { useState } from "react";
import { v4 as uuid } from "uuid";
import Entry from "./Entry";
import NewEntry from "./NewEntry";

const Story = () => {
  const [entries, setEntries] = useState([]);
  const [inputText, setInputText] = useState("");

  const textHandler = (e) => {
    setInputText(e.target.value);
  };

  const saveHandler = () => {
    setEntries((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ]);
    setInputText("");
  };

  const deleteEntry = (id) => {
    const filteredEntries = entries.filter((entry) => entry.id !== id);
    setEntries(filteredEntries);
  };

  const showEntries = entries.map((entry) => (
    <Entry
      text={entry.text}
      key={entry.id}
      id={entry.id}
      deleteEntry={deleteEntry}
    />
  ));

  return (
    <main className="w-10/12 mt-8 mx-auto">
      <NewEntry
        textHandler={textHandler}
        saveHandler={saveHandler}
        inputText={inputText}
      />
      <section className="flex flex-col gap-y-4">{showEntries}</section>
    </main>
  );
};

export default Story;
