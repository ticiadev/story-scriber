import { useState, useEffect } from 'react';
import {produce} from 'immer';
import './App.css';

const App = () => {
  return (
      <div className="drawer drawer-mobile">
        <MainPanel />
        <Navbar />
      </div>
  )
}

const Header = () => {
  return (
    <div className="w-full navbar bg-base-300">
      <div className="flex-none lg:hidden">
        <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div> 
      <Title />
    </div>
  )
}

const Title = () => {
  return (
    <div className="flex-1 px-2 mx-2"><h2 className="prose md:prose-lg lg:prose-xl">Story Title</h2></div>
  )
}

const MainPanel = () => {
  return (
    <>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" /> 
      <div className="drawer-content flex flex-col">
        <Header />
        <Story />
      </div>
    </>
  )
}

const Navbar = () => {
  return (
      <div className="drawer-side bg-base-300">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-300 text-base-content">
          <h1 className="prose md:prose-lg lg:prose-xl">Story App</h1>
          {/* <div className="my-1 mx-auto"><AddNew item="Story" /></div> */}
          <div className="my-1 mx-auto"><NewStory /></div>
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
  )
}

const NewStory = () => {
  return (
    <div className="collapse collapse-plus rounded-box py-0">
      <input type="checkbox" className="peer" /> 
      <div className="collapse-title bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content">
        New Story
      </div>
      <div className="collapse-content bg-primary text-primary-content peer-checked:bg-secondary peer-checked:text-secondary-content"> 
        <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
      </div>
    </div>
  )
}

const AddNew = ({item}) => {
  return (
    <button className="btn btn-primary btn-sm">New {item}</button>
  )
}

const Story = () => {
  const noEntries = [{text: "No notes yet..."}]
  const [entries, setEntries] = useState(noEntries)
  const showEntries = entries.map(entry => <Entry text={entry.text} key={entries.indexOf(entry)} />)

  const addNewEntry = (newEntry) => {
    setEntries(newEntry)
  }

  return (
    <section className="w-10/12 mt-8 flex flex-col justify-start items-center gap-4">
      <NewEntry addNewEntry={addNewEntry} />
      {showEntries}
    </section>
  )
}

const Entry = ({text}) => {
  return (
    <div className="card lg:card-side bg-primary text-primary-content">
      <div className="card-body">
        <p>{text}</p>
      </div>
    </div>
  )
}

const NewEntry = ({addNewEntry}) => {
  const [data,setData] = useState([])

  const handleClick = () => {
    const text = document.querySelector("#entry_input").value.trim()
    if(text) {
      const nextState = produce(data,draftState => {draftState.push({text})})
      document.querySelector("#entry_input").value = ""
      setData(nextState)
      addNewEntry(data)
    }
  }

  return (
    <>
      <label htmlFor="new-entry" className="btn btn-primary btn-sm">+ New Entry</label>

      <input type="checkbox" id="new-entry" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <textarea className="textarea textarea-bordered w-full" id="entry_input" placeholder="entry text"></textarea>
          <div className="modal-action">
            <label htmlFor="new-entry" className="btn btn-primary btn-sm" onClick={() => handleClick()}>Save</label>
            <label htmlFor="new-entry" className="btn btn-sm">x</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
