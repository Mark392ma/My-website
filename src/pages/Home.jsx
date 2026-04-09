import React, { useState } from 'react'

function Home() {
  
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false)
  const [ isLoggedIn, setIsLoggedIn ] = useState(false)
  
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    
    setLoading(true)
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
     
  }
  const handleLogin = () => {
    setIsLoggedIn(true)
  }
  const handleLogout = () => {
    setIsLoggedIn(false)
  }
  return (
      <>
        <LoggedOutLayout onSubmitHandler={onSubmitHandler} input={input} setInput={setInput} loading={loading} />
      </>
    )
}

function LoggedOutLayout({ onSubmitHandler, input, setInput, loading }){
  
  return (
    <section className="flex flex-col items-center text-black text-sm pb-20 px-4 font-poppins">
          <a href="/" className="flex items-center gap-2 border border-slate-700 shadow-md rounded-full p-1 pr-3 text-sm mt-20">
            <span className="bg-indigo-600 text-xs px-3 py-1 rounded-full text-white">New</span>
            <p className="flex items-center gap-2">
              <span>Try 30 days free trail option</span></p>
          </a>
          <h1 className="text-center text-[40px] leading-[48px] md:text-6xl md:leading-[70px] mt-4 font-semibold max-w-3xl text-black/100">Welcome to Ask AI, </h1>
          <h1 className="text-center text-[40px] leading-[48px] md:text-6xl md:leading-[70px] mt-4 font-semibold max-w-3xl text-black/100">What's on <span className="text-purple-500">your mind?</span></h1>
          
          <form onSubmit={onSubmitHandler} className="bg-white/10 max-w-2xl w-full rounded-xl p-4 mt-10 border border-grey-600/70 focus-within:ring-2 ring-indigo-500 transition-all shadow-lg">
            <textarea onChange={e => setInput(e.target.value)} className="bg-transparent outline-none text-black-300 resize-none w-full" rows={4} placeholder="Describe your presentation in details" required />
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button className="flex items-center rounded-md text-xs bg-grey px-2 py-2 shadow-md border border-gray-300">Upload CSV</button>
                <button className="flex items-center rounded-md text-xs bg-grey shadow-md px-2 py-2 shadow-md border border-gray-300">Use public dataset</button>
                <button className="flex items-center rounded-md text-xs bg-gray/900 border shadow-md border-gray-300 px-2 py-2">Database</button>
              </div>
              
              <button className="flex items-center gap-2 bg-gradient-to-r from-[#CB52D4] to-indigo-600 rounded-md px-4 py-2 text-white"> {!loading ? 'Generate API' : (
                <>
                  Creating 
                </>
              )}
              </button>
            </div>
          </form>
          <div className="flex flex-wrap items-center justify-center gap-16 md:gap-20 mx-auto mt-20">
            <img src="/favicon.svg" alt="" className="max-w-28 md:max-w-32"/>
            <img src="/favicon.svg" alt="" className="max-w-28 md:max-w-32"/>
            <img src="/favicon.svg" alt="" className="max-w-28 md:max-w-32"/>
            <img src="/favicon.svg" alt="" className="max-w-28 md:max-w-32"/>
            <img src="/favicon.svg" alt="" className="max-w-28 md:max-w-32"/>
            <img src="/favicon.svg" alt="" className="max-w-28 md:max-w-32"/>
            <img src="/favicon.svg" alt="" className="max-w-28 md:max-w-32"/>
          </div>
      </section>
    )
}


function LoggedInLayout() {
  return (
    <div className="flex-1 flex overflow-auto">
      <div>Sidebar</div>
      <div className="flex-1 p-2 pl-0" >Main</div>
    </div>
  )
}


export default Home


