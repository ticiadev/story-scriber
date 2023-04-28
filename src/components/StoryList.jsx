import { useState } from "react";
import NewStory from "./NewStory";

const StoryList = ({ onTitle }) => {
  const noStories = [{ title: "" }];
  const [stories, setStories] = useState(noStories);
  const [activeStory, setActiveStory] = useState(-1);
  const showStories = stories.map((story) => (
    <li
      key={stories.indexOf(story)}
      active={stories.indexOf(story) === activeStory}
      onClick={() => updateActivestory(stories.indexOf(story))}
    >
      <a>{story.title}</a>
    </li>
  ));

  const addNewStory = (newStory) => {
    setStories((stories) => [
      ...stories.filter((e) => e.title !== ""),
      newStory,
    ]);
  };

  const updateActivestory = (id) => {
    console.log(id);
    setActiveStory(activeStory !== id ? id : -1);
    onTitle(stories[activeStory].title);
  };

  return (
    <>
      <div className="my-1 mx-auto">
        <NewStory addNewStory={addNewStory} />
      </div>
      <div>{showStories}</div>
    </>
  );
};

export default StoryList;
