import { useState } from "react";

export default function Tail() {
  const [open, setOpen] = useState(true);
  function tuggle() {
    setOpen((prev) => !prev);
  }
  return (
    <>
      <main className="">
        <div className="flex  bg-slate-800 lg:h-screen w-full  ">
          <aside
            className={` hidden md:flex flex-col gap-5  h-full bg-slate-700 border-r 
               border-slate-300  transition-all duration-300  ${open ? "w-[20%]" : "w-[10%]"}`}
          >
            <button
              className="h-8 w-8 bg-rose-400  rounded ml-6 mt-2"
              onClick={tuggle}
            ></button>
            <div
              className={`h-8  bg-slate-500  rounded self-center flex px-2 items-center mt-4 ${open ? "w-45" : "w-15"}`}
            >
              <div
                className={`h-4 w-20 bg-slate-400  rounded ${open ? "block" : "hidden"}  `}
              ></div>
            </div>
            <div
              className={`h-4 bg-blue-400  rounded ml-5 ${open ? "w-20" : "w-4"}`}
            ></div>
            <div
              className={`h-4 ${open ? "w-20" : "w-4 "} bg-rose-400  rounded ml-5   `}
            ></div>
            <div
              className={`h-4 ${open ? "w-20" : "w-4"} bg-green-400  rounded ml-8  `}
            ></div>
            <div
              className={`h-4 ${open ? "w-20" : "w-4"} bg-orange-400  rounded ml-4 `}
            ></div>
            <div
              className={`h-4 ${open ? "w-20" : "w-4"} bg-purple-400  rounded ml-4  `}
            ></div>
            <div
              className={`h-4 ${open ? "w-20" : "w-4"} bg-purple-600  rounded ml-4  `}
            ></div>
            <div
              className={`h-4 ${open ? "w-20" : "w-4"} bg-slate-500  rounded ml-4  `}
            ></div>
            <div
              className={`h-4 ${open ? "w-20" : "w-4"} bg-slate-500  rounded ml-4  `}
            ></div>
          </aside>
          <section className="flex flex-1 overflow-hidden  flex-col  gap-5   ">
            <header className="h-14 w-full border-b border-slate-300 bg-slate-700  flex items-center flex-wrap justify-between  px-5 ">
              <div className="h-8 w-40 md:w-70 bg-slate-400  rounded "></div>
              <div className="flex items-center gap-3 ">
                <div className="h-8 w-6 md:w-8 bg-slate-400  rounded  "></div>
                <div className="h-8 w-6 mm:w-8 bg-slate-400  rounded  "></div>
                <div className="h-8 w-8 md:w-12 bg-slate-400  rounded  "></div>

                <div className="h-8 w-6 md:w-8 bg-slate-400  rounded  "></div>
                <div className="h-8 w-6 md:w-8 bg-slate-400  rounded  "></div>
                <div className="h-8 w-6 md:w-8 bg-slate-400  rounded  "></div>
              </div>
            </header>
            {/* card section */}
            <section className="flex   mt-7 w-full flex-wrap md:flex-nowrap px-5 gap-5   ">
              <div className=" flex h-20 w-full md:w-[22%]  bg-blue-500 flex-1   rounded justify-between p-3 ">
                <div className="flex flex-col gap-2 justify-center">
                  <div className="w-25 h-3 bg-slate-600 rounded"></div>
                  <div className="w-15 h-3 bg-slate-200 rounded"></div>
                  <div className="flex gap-2">
                    <div className="w-11.5 h-3 bg-slate-600 rounded"></div>
                    <div className="w-11.5 h-3 bg-slate-600 rounded"></div>
                  </div>
                </div>
                <div>
                  <div className="w-12 h-12 bg-slate-600 rounded"></div>
                </div>
              </div>

              <div className="flex h-20 w-full md:w-[22%]  bg-green-500 flex-1  rounded justify-between p-3">
                <div className="flex flex-col gap-2 justify-center">
                  <div className="w-25 h-3 bg-slate-600 rounded"></div>
                  <div className="w-15 h-3 bg-slate-200 rounded"></div>
                  <div className="flex gap-2">
                    <div className="w-11.5 h-3 bg-slate-600 rounded"></div>
                    <div className="w-11.5 h-3 bg-slate-600 rounded"></div>
                  </div>
                </div>
                <div>
                  <div className="w-12 h-12 bg-slate-600 rounded"></div>
                </div>
              </div>

              <div className="flex h-20 w-full md:w-[22%]  bg-orange-500  flex-1 rounded justify-between p-3">
                <div className="flex flex-col gap-2 justify-center">
                  <div className="w-25 h-3 bg-slate-600 rounded"></div>
                  <div className="w-15 h-3 bg-slate-200 rounded"></div>
                  <div className="flex gap-2">
                    <div className="w-11.5 h-3 bg-slate-600 rounded"></div>
                    <div className="w-11.5 h-3 bg-slate-600 rounded"></div>
                  </div>
                </div>
                <div>
                  <div className="w-12 h-12 bg-slate-600 rounded"></div>
                </div>
              </div>

              <div className="flex justify-between p-3 h-20 w-full md:w-[22%]  bg-purple-500 flex-1 rounded ">
                <div className="flex flex-col gap-2 justify-center">
                  <div className="w-25 h-3 bg-slate-600 rounded"></div>
                  <div className="w-15 h-3 bg-slate-200 rounded"></div>
                  <div className="flex gap-2">
                    <div className="w-11.5 h-3 bg-slate-600 rounded"></div>
                    <div className="w-11.5 h-3 bg-slate-600 rounded"></div>
                  </div>
                </div>
                <div>
                  <div className="w-12 h-12 bg-slate-600 rounded"></div>
                </div>
              </div>
            </section>

            <section className="flex  flex-wrap md:flex-nowrap jusify-center items-center px-5 gap-4">
              <div className="h-54 w-full md:w-[45%] bg-slate-700  rounded p-2 flex flex-1 justify-center items-center  "></div>

              <div className="h-54  w-full md:w-[45%] bg-slate-700  rounded  ">
                <div className=" flex  justify-between w-full  bg-slate-300 p-2 mt-12">
                  <div className="w-30 h-3 bg-slate-600 rounded"></div>
                  <div className="w-30 h-3 bg-slate-600 rounded"></div>
                </div>
                <div className=" flex  justify-between w-full  bg-slate-400 p-2">
                  <div className="w-30 h-3 bg-slate-600 rounded"></div>
                  <div className="w-30 h-3 bg-slate-600 rounded"></div>
                </div>
                <div className=" flex  justify-between w-full   p-2">
                  <div className="w-30 h-3 bg-slate-600 rounded"></div>
                  <div className="w-30 h-3 bg-slate-600 rounded"></div>
                </div>
                <div className=" flex  justify-between w-full  bg-slate-300 p-2">
                  <div className="w-30 h-3 bg-slate-600 rounded"></div>
                  <div className="w-30 h-3 bg-slate-600 rounded"></div>
                </div>
                <div className=" flex  justify-between w-full p-2 ">
                  <div className="w-30 h-3 bg-slate-600 rounded"></div>
                  <div className="w-30 h-3 bg-slate-600 rounded"></div>
                </div>
                <div className=" flex  justify-between w-full bg-slate-300 p-2 rounded">
                  <div className="w-30 h-3 bg-slate-600 rounded"></div>
                  <div className="w-30 h-3 bg-slate-600 rounded"></div>
                </div>
              </div>
            </section>

            <section className="flex  flex-wrap md:flex-nowrap w-full px-5 gap-4  ">
              <div className="h-44 w-full  md:w-[30%] flex-1 bg-slate-700   rounded p-3 ">
                <div className=" flex  justify-between w-full  rounded">
                  <div className="w-25 h-3 bg-slate-300 rounded"></div>
                </div>
                <div className=" flex  justify-between w-full bg-slate-600 p-2 rounded mt-3">
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                </div>
                <div className=" flex  justify-between w-full bg-slate-500 p-2 rounded">
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                </div>
                <div className=" flex  justify-between w-full  p-2 rounded">
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                </div>
                <div className=" flex  justify-between w-full bg-slate-500 p-2 rounded">
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                </div>
              </div>

              <div className="h-44 w-full md:w-[30%] flex-1 bg-slate-700  rounded p-3  ">
                <div className=" flex  justify-between w-full  rounded">
                  <div className="w-25 h-3 bg-slate-300 rounded"></div>
                </div>
                <div className=" flex  gap-20 w-full bg-slate-600 p-2 rounded mt-3">
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                </div>
                <div className=" flex  gap-20 w-full  p-2 rounded ">
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                  <div className="w-42 h-3 bg-slate-500 rounded">
                    <div className="h-full  w-30 bg-slate-300 rounded"></div>
                  </div>
                </div>
                <div className=" flex  justify-between w-full  p-2 rounded ">
                  <div className="w-25 h-3 bg-slate-300 rounded"></div>
                  <div className="w-42 h-3 bg-slate-500 rounded">
                    <div className="h-full  w-22 bg-slate-300 rounded"></div>
                  </div>
                </div>
                <div className=" flex  gap-20 w-full  p-2 rounded ">
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                  <div className="w-42 h-3 bg-slate-500 rounded">
                    <div className="h-full  w-15 bg-slate-300 rounded"></div>
                  </div>
                </div>
              </div>

              <div className="h-44 w-full md:w-[30%] flex-1 bg-slate-700  rounded p-3 ">
                <div className=" flex  justify-between w-full  rounded">
                  <div className="w-25 h-3 bg-slate-300 rounded"></div>
                </div>
                <div className=" flex  gap-20 w-full bg-slate-600 p-2 rounded mt-3">
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                </div>
                <div className=" flex  gap-20 w-full  p-2 rounded ">
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                  <div className="w-42 h-3 bg-slate-500 rounded">
                    <div className="h-full  w-30 bg-slate-300 rounded"></div>
                  </div>
                </div>
                <div className=" flex  justify-between w-full  p-2 rounded ">
                  <div className="w-25 h-3 bg-slate-300 rounded"></div>
                  <div className="w-42 h-3 bg-slate-500 rounded">
                    <div className="h-full  w-22 bg-slate-300 rounded"></div>
                  </div>
                </div>
                <div className=" flex  gap-20 w-full  p-2 rounded ">
                  <div className="w-20 h-3 bg-slate-300 rounded"></div>
                  <div className="w-42 h-3 bg-slate-500 rounded">
                    <div className="h-full  w-30 bg-slate-300 rounded"></div>
                  </div>
                </div>
              </div>
            </section>
          </section>
        </div>
      </main>
    </>
  );
}
