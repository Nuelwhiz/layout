export default function Tailwind() {
  return (
    <>
      <main className="">
        <div className="flex flex-col bg-slate-900 h-screen w-full flex-wrap ">
          <header className="h-14 border-b border-slate-300 bg-slate-700 mx-w-screen flex items-center flex-wrap justify-between ">
            <div className="h-8 w-70 bg-slate-400 relative left-55 rounded "></div>
            <div className="flex items-center gap-3 mr-5">
              <div className="h-8 w-8 bg-slate-400  rounded  "></div>
              <div className="h-8 w-8 bg-slate-400  rounded  "></div>
              <div className="h-8 w-12 bg-slate-400  rounded  "></div>

              <div className="h-8 w-8 bg-slate-400  rounded  "></div>
              <div className="h-8 w-8 bg-slate-400  rounded  "></div>
              <div className="h-8 w-8 bg-slate-400  rounded  "></div>
            </div>
          </header>
          <section className="flex flex-1 overflow-hidden">
            <div className=" flex flex-col gap-4 w-50 h-full bg-slate-700 border-r absolute top-0  border-slate-300">
              <div className="h-8 w-8 bg-rose-400  rounded ml-6 mt-2  "></div>
              <div className="h-8 w-45 bg-slate-500  rounded mx-2 mt-4 "></div>
              <div className="h-5 w-20 bg-slate-400  rounded ml-5 "></div>
              <div className="h-5 w-20 bg-slate-400  rounded ml-5  "></div>
              <div className="h-5 w-20 bg-slate-400  rounded ml-8  "></div>
              <div className="h-8 w-8 bg-slate-400  rounded  "></div>
              <div className="h-8 w-8 bg-slate-400  rounded  "></div>
              <div className="h-8 w-8 bg-slate-400  rounded  "></div>
              <div className="h-8 w-8 bg-slate-400  rounded  "></div>
              <div className="h-8 w-8 bg-slate-400  rounded  "></div>
              <div className="h-8 w-8 bg-slate-400  rounded  "></div>
            </div>
            <div className="w-full h-screen  ml-55 flex flex-col gap-20 ">
              <div className="h-8 w-281 bg-slate-400  rounded  "></div>
              <div className="h-8 w-281 bg-slate-400  rounded  "></div>
              <div className="h-8 w-281 bg-slate-400  rounded  "></div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
