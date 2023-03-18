import { useState, useEffect } from 'react';
import { v4 as uuid} from "uuid";
import './index.css'

const App = () => {
  return (
    <>
      <Header />
      <Story />
    </>
  )
}

const Header = () => {
  return (
    <header className="navbar bg-neutral text-neutral-content">
      <a className="btn btn-ghost normal-case text-xl">story scriber</a>
    </header>
  )
}

const Story = () => {
  const [entries, setEntries] = useState([])
  const [inputText, setInputText] = useState("")

  const textHandler = (e) => {
    setInputText(e.target.value)
  }

  const saveHandler = () => {
    setEntries((prevState) => [
      ...prevState,
      {
        id: uuid(),
        text: inputText,
      },
    ])
    setInputText("")
  }

  const deleteEntry = (id) => {
    const filteredEntries = entries.filter((entry) => entry.id !== id)
    setEntries(filteredEntries)
  }

  useEffect(() => {
    localStorage.setItem("Entries", JSON.stringify(entries))
  }, [entries])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("Entries"))
    if(data) setEntries(data)
  }, [])

  return (
    <main className="w-10/12 my-4 mx-auto">
      <CreateEntry textHandler={textHandler} saveHandler={saveHandler} inputText={inputText} />
      <section className="flex flex-col gap-y-4">
        {entries.map((entry) => <Entry key={entry.id} id={entry.id} text={entry.text} deleteEntry={deleteEntry} />)}
      </section>
    </main>
  )
}

const Entry = ({ id, text, deleteEntry }) => {
  return (
      <div className="card card-compact lg:card-side bg-primary text-primary-content">
        <div className="card-body">
          <div>{text}</div>
          <div className="card-actions justify-end">
          <button className="btn btn-square btn-sm" onClick={() => deleteEntry(id)} aria-hidden="true">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
          </button>
        </div>
        </div>
      </div>
  )
}

const CreateEntry = ({ textHandler, saveHandler, inputText }) => {

  return (
    <>
      <div className="my-4 flex justify-center">
        <label htmlFor="new-entry" className="btn btn-outline btn-sm">+ New Entry</label>
      </div>
      

      <input type="checkbox" id="new-entry" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <textarea className="textarea textarea-bordered w-full" id="entry_input" cols="10" rows="5" placeholder="enter text" value={inputText} onChange={textHandler}></textarea>
          <div className="modal-action">
            <label htmlFor="new-entry" className="btn btn-primary btn-sm" onClick={saveHandler}>Save</label>
            <label htmlFor="new-entry" className="btn btn-sm">x</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
