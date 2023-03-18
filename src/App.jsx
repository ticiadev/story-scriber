import { useState, useEffect } from 'react';
import {v4 as uuid} from "uuid";

const App = () => {
  const [title, setTitle] = useState("")

  return (
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" /> 
        <div className="drawer-content flex flex-col">
        <header className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
          </div> 
          <Title title={title} />
        </header>
          {title && <Story />}
        </div>
        <nav className="drawer-side bg-base-300">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 bg-base-300 text-base-content">
            <h1 className="prose md:prose-lg lg:prose-xl">Story App</h1>
            <StoryList onTitle={setTitle} />
          </ul>
        </nav>
      </div>
  )
}

const Title = ({title}) => {
  return (
    <div className="flex-1 px-2 mx-2"><h2 className="prose md:prose-lg lg:prose-xl">{title}</h2></div>
  )
}

const StoryList = ({onTitle}) => {
  const noStories = [{title: ""}]
  const [stories, setStories] = useState(noStories)
  const [activeStory, setActiveStory] = useState(-1)
  const showStories = stories.map(story => <li key={stories.indexOf(story)} active={stories.indexOf(story) === activeStory} onClick ={() => updateActivestory(stories.indexOf(story))}><a>{story.title}</a></li>)

  const addNewStory = (newStory) => {
    setStories(stories => [...stories.filter(e => e.title !== ""),newStory])
  }

  const updateActivestory = (id) => {
    console.log(id)
    setActiveStory(activeStory !== id ? id : -1)
    onTitle(stories[activeStory].title)
  }

  return (
    <>
      <div className="my-1 mx-auto"><NewStory addNewStory={addNewStory} /></div>
      <div>{showStories}</div>
    </>
  )
}

const NewStory = ({addNewStory}) => {
  const handleClick = () => {
    const title = document.querySelector("#title_input").value.trim()
    if(title) {
      document.querySelector("#title_input").value = ""
      addNewStory({title})
    }
  }

  return (
    <div className="collapse collapse-plus rounded-box py-0">
      <input type="checkbox" className="peer" /> 
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        New Story
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content flex justify-between"> 
        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" id="title_input" />
        <button className="btn btn-square btn-sm btn-ghost" aria-label="Add" onClick={() => handleClick()}>+</button>
      </div>
    </div>
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

  const showEntries = entries.map(entry => <Entry text={entry.text} key={entry.id} id={entry.id} deleteEntry={deleteEntry} />)

  return (
    <main className="w-10/12 mt-8 mx-auto">
      <NewEntry textHandler={textHandler} saveHandler={saveHandler} inputText={inputText} />
      <section className="flex flex-col gap-y-4">
        {showEntries}
      </section>
    </main>
  )
}

const Entry = ({id, text, deleteEntry}) => {
  return (
    <div className="card card-compact lg:card-side bg-primary text-primary-content">
      <div className="card-body">
        <div>{text}</div>
        <div className="card-actions justify-end">
        <button className="btn btn-square btn-xs" onClick={() => deleteEntry(id)} aria-hidden="true">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      </div>
    </div>
  )
}

const NewEntry = ({textHandler, saveHandler, inputText}) => {

  return (
    <>
      <div className="my-4 flex justify-center">
        <label htmlFor="new-entry" className="btn btn-primary btn-sm">+ New Entry</label>
      </div>
      
      <input type="checkbox" id="new-entry" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <textarea className="textarea textarea-bordered w-full" id="entry_input" placeholder="enter text" value={inputText} onChange={textHandler}></textarea>
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
