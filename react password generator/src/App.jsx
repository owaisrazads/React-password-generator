import React, { useEffect, useState } from 'react'

export const App = () => {
    const [password , setPassword] = useState('')
    const [length , setLength] = useState(8)
    const [numbers , setNumbers] = useState(false)
    const [symbol , setSymbol] = useState(false)
    const [lowercase , setLowercase] = useState(false)
    const [uppercase , setUppercase] = useState(false)
    const [checkBox , setcheckBox] = useState(true)
  
  
    useEffect(()=>{
      generatPassword()
    } , [numbers , symbol , length , lowercase  , uppercase])
  
    
    function includeNumber(e) {
      setNumbers(e.target.checked);
    }
    function includeSymbol(e) {
      setSymbol(e.target.checked);
    }
    function includeLowercase(e) {
      setLowercase(e.target.checked);
    }
    function includeUppercase(e) {
      setUppercase(e.target.checked);
    }
  
    function copyText() {
      navigator.clipboard.writeText(password)
      alert('Text Copied')
      butt
    }
  
    function generatPassword() {
      if (!numbers && !symbol && !lowercase && !uppercase) {
        setNumbers('enabled');
  
        return;
      }
      let pass = ''
      let str = ''
      if (numbers) {
        str += '0123456789'
      }
      if (symbol) {
        str += '-+&^%$#@!;'
      }
      if (lowercase) {
        str += 'ablmnopqrstuvwxyz'
      }
      if (uppercase) {
        str += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
      }
      for (let i = 0; i < length; i++) {
        let randomNumber = Math.floor(Math.random() * str.length);
        let char = str.charAt(randomNumber);
        pass += char;
      }
      setPassword(pass);
    }
  
    return (
      <>
  

      <div className='flex items-center w-[100%] h-[65rem] relative flex-wrap bg-slate-800 bg-fixed'>
      <div className='w-[100%]'>
      
        <h1 className=' text-2xl font-semibold text-center p-2.5 items-center text-white bg-blue-800'>Password Generator</h1><br />
        <div className=' flex justify-center'>
        <div className=' border-[2px] w-[35%] flex justify-center gap-[2rem] p-4 mb-8 items-center rounded-md border-gray-600'>
        <h2 className=' text-2xl  w-[65%] text-white font-normal'>{password}  </h2>
        <div><button onClick={copyText}><i className="fa-regular fa-copy text-[30px] ml-8 text-white"></i></button>
        <button onClick={generatPassword}><i className="fa-solid fa-arrows-rotate text-[30px] ml-6 text-white"></i></button></div><br /></div></div>
       <div className='border-gray-600 border-[2px] rounded-md ml-[32.5%] justify-center bg-slate-800 w-[35%]'>
       <div className=' text-center'>
          <label htmlFor="lenght" className='mr-[10px] mt-3 border-[1px] text-white border-[#b0b0b0c9] px-[20px] border-gray-600 py-[3px] shadow-inner rounded-md text-[18px] font-bold '>{length}</label>
        <input type="range" id="length" className='mt-5' min={8} max={20} onChange={(e) => setLength(e.target.value)} value={length} /></div>
        <div className=' mt-3 text-center border-gray-600'>
            <label htmlFor="numbers" className='mr-[10px] text-[20px] font-semibold text-white p-[5px]'>Number</label>
            <input type="checkbox" id="number" checked={numbers} onChange={includeNumber} className='ml-5' />

            <label htmlFor="symbol" className='ml-[100px] text-[20px] font-semibold p-[5px] text-white '>Symbol</label>
            <input type="checkbox" id="symbol" c onChange={includeSymbol} className='ml-6 ' />
        </div>
        <div className=' text-center'>
           
        </div>
        <div className=' text-center '>
            <label htmlFor="lowercase" className='mr-[10px] text-[20px] font-semibold p-[5px] gap-4 text-white'>Lowercase</label>
            <input type="checkbox" id="lowercase" onChange={includeLowercase} />

            <label htmlFor="uppercase" className='ml-[100px] text-[20px] font-semibold p-[5px] text-white'>Uppercase</label>
            <input type="checkbox" id="uppercase" className='mb-10'  onChange={includeUppercase} />
        </div>
       </div>
        <div className='justify-center text-center text-white'>  
        <h1 className='mt-[38rem] font-semibold text-2xl p-5 '>Developed by <a href='https://github.com/owaisrazads' target='null' className=' text-gray-400 font-light'>@Muhammad Owais</a></h1>
        </div>
        </div>
        </div>
      </>
  )
}

export default App