const NewStory = ({ addNewStory }) => {
  const handleClick = () => {
    const title = document.querySelector("#title_input").value.trim();
    if (title) {
      document.querySelector("#title_input").value = "";
      addNewStory({ title });
    }
  };

  return (
    <div className="collapse collapse-plus rounded-box py-0">
      <input type="checkbox" className="peer" />
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        New Story
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex justify-between">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-sm w-full max-w-xs"
          id="title_input"
        />
        <button
          className="btn btn-square btn-sm btn-ghost"
          aria-label="Add"
          onClick={() => handleClick()}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default NewStory;
