import { useState, useEffect } from "react";
import Title from "./components/Title";
import Story from "./components/Story";
import StoryList from "./components/StoryList";

const App = () => {
  const [title, setTitle] = useState("");

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        <header className="w-full navbar bg-base-300">
          <div className="flex-none lg:hidden">
            <label htmlFor="my-drawer-2" className="btn btn-square btn-ghost">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
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
  );
};

export default App;
