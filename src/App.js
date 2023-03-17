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
          <div className="my-1 mx-auto"><AddNew item="Story" /></div>
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
  )
}

const AddNew = ({item}) => {
  return (
    <button className="btn btn-primary btn-sm">New {item}</button>
  )
}

const Story = () => {
  return (
    <section className="w-10/12 mt-8 flex flex-col justify-start items-center gap-4">
      <AddNew item="Entry" />
      <Entry />
      <Entry />
    </section>
  )
}

const Entry = () => {
  return (
    <div className="card lg:card-side bg-primary text-primary-content">
      <div className="card-body">
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
    </div>
  )
}

export default App;
