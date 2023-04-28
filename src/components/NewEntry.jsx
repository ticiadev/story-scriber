const NewEntry = ({ textHandler, saveHandler, inputText }) => {
  return (
    <>
      <div className="my-4 flex justify-center">
        <label htmlFor="new-entry" className="btn btn-primary btn-sm">
          + New Entry
        </label>
      </div>

      <input type="checkbox" id="new-entry" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <textarea
            className="textarea textarea-bordered w-full"
            id="entry_input"
            placeholder="enter text"
            value={inputText}
            onChange={textHandler}
          ></textarea>
          <div className="modal-action">
            <label
              htmlFor="new-entry"
              className="btn btn-primary btn-sm"
              onClick={saveHandler}
            >
              Save
            </label>
            <label htmlFor="new-entry" className="btn btn-sm">
              x
            </label>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewEntry;
