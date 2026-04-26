import { useState, useEffect } from "react";

function App() {
  const [show, setshow] = useState(false);
  const [theme, setTheme] = useState("light");
  function tuggleShow() {
    setTheme(theme === "light" ? "dark" : "light");
  }
  /* useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []); */
  return (
    <>
      <div className={theme}>
        <div
          className=" bg-white flex flex-col min-h-screen text-slate-900 relative
          dark:bg-slate-900
          dark:text-white"
        >
          <header className="dark:bg-slate-800 text-slate-900 h-18 dark:text-white flex items-center justify-between px-10 ">
            <h3 className="text-2xl  text-rose-500 bg-white p-2 rounded hover:scale-105 hover:text-2xl cursor-pointer transition duration-200 hover:bg-rose-500 hover:text-white ">
              lOGO
            </h3>
            <nav className=" hidden sm:flex gap-2 ">
              <button className="text-normal text-bold cursor-pointer hover:bg-rose-50 hover:text-slate-900 hover:px-2 hover:rounded hover:transition-all">
                HOME
              </button>
              <button className="text-normal text-bold cursor-pointer hover:bg-rose-50 hover:text-slate-900 hover:px-2 hover:rounded hover:transition-all">
                ABOUT
              </button>
              <button className="text-normal text-bold cursor-pointer hover:bg-rose-50 hover:text-slate-900 hover:px-2 hover:rounded hover:transition-all">
                CONTACT
              </button>
              <button className="text-normal text-bold cursor-pointer hover:bg-rose-50 hover:text-slate-900 hover:px-2 hover:rounded hover:transition-all">
                SETTING
              </button>
              <button
                onClick={tuggleShow}
                className=" px-8 py-2 w-full hover:bg-slate-700 hover:text-white hover:rounded"
              >
                {theme === "light" ? "dark" : "light"}
              </button>
            </nav>
            <button
              onClick={() => setshow(!show)}
              className=" flex sm:hidden text-2xl"
            >
              {show ? "X" : "☰"}
            </button>
          </header>
          {show && (
            <div className="absolute top-17 bg-slate-700 right-0 dark:bg-slate-900 text-white dark:text-white text-xl flex flex-col  rounded sm:hidden z-10">
              <button className="border-b px-8 py-2 w-full hover:bg-slate-700 hover:rounded ">
                HOME
              </button>
              <button className="border-b px-8 py-2 w-full hover:bg-slate-700 hover:rounded">
                ABOUT
              </button>
              <button className="border-b px-8 py-2 w-full hover:bg-slate-700 hover:rounded">
                CONTACT
              </button>
              <button className=" border-b px-8 py-2 w-full hover:bg-slate-700 hover:rounded">
                SETTING
              </button>
              <button
                onClick={tuggleShow}
                className=" px-8 py-2 w-full hover:bg-slate-700 hover:rounded"
              >
                {theme === "light" ? "dark" : "light"}
              </button>
            </div>
          )}

          <div className="m-10 p-10  grid grid-cols sm:grid-cols-2 md:grid-cols-3   gap-4  sm: sm:  justify-center items-center text-center  text-2xl sm:text-lg">
            <h2 className="bg-slate-700 p-4 rounded text-white hover:bg-slate-900 hover:scale-105 transition-all hover:text-bold">
              HTML....markup language
            </h2>
            <h2
              className=" text-center  
          bg-slate-700 p-4 rounded text-white hover:bg-slate-900 hover:scale-105 transition-all hover:text-bold"
            >
              CSS.....style sheet
            </h2>
            <h2 className="bg-slate-700 p-4 rounded text-white hover:bg-slate-900 hover:scale-105 transition-all hover:text-bold">
              JAVASCRIPT.....functionality
            </h2>
            <h2 className="bg-slate-700 p-4 rounded text-white hover:bg-slate-900 hover:scale-105 transition-all hover:text-bold">
              REACT...... frontend library
            </h2>
            <h2 className=" bg-slate-700 p-4 rounded text-white hover:bg-slate-900 hover:scale-105 transition-all hover:text-bold">
              TAILWIND......model style sheet
            </h2>
            <h2 className="bg-slate-700 p-4 rounded text-white hover:bg-slate-900 hover:scale-105 transition-all hover:text-bold">
              NODE.....backend integration
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
