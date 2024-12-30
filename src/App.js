import amitImage from '../src/logo192.png'

function App() {
  return (
    <div className='  flex flex-col  '>
      <div className="">

      </div>
      <div className="bg-gray-700  h-full   flex flex-col gap-3">

        <div className="flex relative left-1/3 top-2 flex-row start-1 justify-center items-center  gap-3 m-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="absolute top-0 left-0"
            viewBox="0 0 100 100"
            width={"100vw"} height={"100vh"}
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Rectangle filling the entire SVG */}

            {/* Drawing a circle */}
            <circle cx="20" cy="20" r="1" fill="white" strokeWidth="1">
              <animateMotion
                path="M0,0 q60,100 100,0 q60,-20 100,0"
                begin="0s"
                dur="23s"
                opacity="0.8"
                repeatCount="indefinite"
              />
            </circle>
          </svg>
          <div className=" text-white   flex flex-col p-6 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3 hover:translate-x-4 hover:translate-y-4">

            <div className="text-[30px] font-bold">Hey 👋, I am</div>
             <div className="text-[38px] font-bold">Amit</div>
             <div className="text-[39px] font-bold">Sapte</div>
             <div className="text-[30px] font-bold">A Full Stack Dev</div>
             <div className="text-[20px] text-gray-500 font-bold">Mumbai Maharashtra </div>
             <button className="bg-blue-600 h-[40px]  shadow-2xl mt-4 shadow-white">Check Resume</button>
            
          </div>


          <div className="border border-white ">
              <img className='h-[300px] w-[300px]' src={amitImage} alt="not found" ></img>
          </div>
        </div>

        <div className="flex absolute left-11 top-[425px] ">
          <div className="border border-gray-900 bg-gray-900 h-[200px] w-[200px] flex flex-col   top-20 left-0">
            
          </div>
         

        </div>
      </div>
      <div className="mt-4 relative w-[500px] h-[400px] justify-center items-center shadow-2xl flex flex-col border border-gray-50 shadow-slate-200 bg-slate-500">
            <div className="text-[30px] font-bold ">
              BackEnd
            </div>
            <div className='flex flex-row gap-4  '>
               <div className='border  border-gray-300 flex row w-[130px] h-[40px]'> 
                <img src='' alt='not found'></img>
                <label className='text-[20px] ml-1' >Java</label>
              </div>
              <div className='border border-gray-300 flex row w-[130px] h-[40px]'> 
                <img src='' alt='not found'></img>
                <label className='text-[20px] ml-1' >Node</label>
              </div>
              <div className='border border-gray-300 flex row w-[130px] h-[40px]'> 
                <img src='' alt='not found'></img>
                <label className='text-[20px] ml-1' >Java</label>
              </div>                 
            </div>
          </div>
    </div>
  );
}

export default App;
