import { useState } from "react";

export default function Tail() {
  const [open, setOpen] = useState(true);
  function tuggle() {
    setOpen((prev) => !prev);
  }
  return (
    <>
      <main className="">
        <div className="flex  bg-slate-800 h-screen w-full justify-between">
          <aside
            className={`flex flex-col gap-5  h-full bg-slate-700 border-r  border-slate-300 ${open ? "w-50" : "w-30"}`}
          >
            <button
              className="h-8 w-8 bg-rose-400  rounded ml-6 mt-2"
              onClick={tuggle}
            ></button>
            <div
              className={`h-8  bg-slate-500  rounded self-center flex px-2 items-center mt-4 ${open ? "w-45" : "w-20"}`}
            >
              <div className="h-4 w-20 bg-slate-400  rounded  "></div>
            </div>
            <div
              className={`h-4 bg-blue-400  rounded ml-5 ${open ? "w-20" : "w-4"}`}
            ></div>
            <div className="h-4 w-20 bg-rose-400  rounded ml-5  "></div>
            <div className="h-4 w-20 bg-green-400  rounded ml-8  "></div>
            <div className="h-4 w-20 bg-orange-400  rounded ml-4  "></div>
            <div className="h-4 w-16 bg-purple-400  rounded ml-4  "></div>
            <div className="h-4 w-20 bg-purple-600  rounded ml-4  "></div>
            <div className="h-4 w-28 bg-slate-500  rounded ml-4  "></div>
            <div className="h-4 w-20 bg-slate-500  rounded ml-4  "></div>
          </aside>
          <section className="flex flex-1 flex-col gap-4 ">
            <header className="h-14 w-292 border-b border-slate-300 bg-slate-700  flex items-center flex-wrap justify-between ">
              <div className="h-8 w-70 bg-slate-400 ml-5 rounded "></div>
              <div className="flex items-center gap-3 mr-5">
                <div className="h-8 w-8 bg-slate-400  rounded  "></div>
                <div className="h-8 w-8 bg-slate-400  rounded  "></div>
                <div className="h-8 w-12 bg-slate-400  rounded  "></div>

                <div className="h-8 w-8 bg-slate-400  rounded  "></div>
                <div className="h-8 w-8 bg-slate-400  rounded  "></div>
                <div className="h-8 w-8 bg-slate-400  rounded  "></div>
              </div>
            </header>
            {/* card section */}
            <section className="flex gap-4  mt-7 ">
              {/* first card */}
              <div className=" flex h-20 w-67.5 bg-blue-500 ml-5 rounded justify-between p-3 ">
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
              {/*  */}
              <div className="flex h-20 w-67.5 bg-green-500  rounded justify-between p-3">
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
              {/*  */}
              <div className="flex h-20 w-67.5 bg-orange-500  rounded justify-between p-3">
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
              {/*  */}
              <div className="flex justify-between p-3 h-20 w-67.5 bg-purple-500  rounded ">
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
            {/* box section */}
            <section className="flex gap-4">
              <div className="h-54 w-139 bg-slate-800 ml-5 rounded p-2 grid grid-cols-6 justify-center items-center ">
                <div className="w-17 h-10 border border-gray-600 "></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
                <div className="w-17 h-10 border border-gray-600"></div>
              </div>
              {/*  */}
              <div className="h-54 w-139 bg-slate-800  rounded ">
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
              {/*  */}
            </section>
            {/* fooyter */}
            <section className="flex gap-4">
              {/* // */}
              <div className="h-44 w-91.5 bg-slate-700 ml-5 rounded p-3 ">
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
              {/* // */}
              <div className="h-44 w-91.5 bg-slate-700  rounded p-3  ">
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
              {/* // */}
              <div className="h-44 w-91.5 bg-slate-700  rounded p-3 ">
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
