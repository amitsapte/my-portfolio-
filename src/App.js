import leetcode from '../src/image/leetcode.png'
import hackrank from '../src/image/hackrank.png'
import github from '../src/image/github.png'
import './App.css'

function App() {
  return (
    <div>
      <div className='bg-gray-700'>
        <div className="flex  pt-2 mr-4 text-white gap-8 flex-row-reverse">
          <div className="flex flex-row justify-center items-center " >
            <img src={github} alt='not found' className=' m-2  w-[35px] h-[30px]  object-cover '></img>
            <a className='text-[25px]' href='https://github.com/amitsapte'>Github </a>
          </div>
          <div className="flex  flex-row  justify-center items-center" >
            <img src={hackrank} alt='not found' className='w-[30px] h-[20px] m-2  object-cover' ></img>
            <a href='https://www.hackerrank.com/profile/sapteab2018'>Hackerrank</a>
          </div>

          <div className="flex flex-row  justify-center items-center " >
            <img src={leetcode} className='w-[50px] h-[20px]   m-2 object-cover' alt='not found '></img>
            <a href='https://leetcode.com/u/sapteamit/'> Leetcode </a>
          </div>
        </div>
      </div>
      <div className='  flex flex-col  '>
        <div className="">

        </div>
      </div>
      <div className="bg-gray-700  h-full   flex flex-col gap-3">

        <div className="flex relative top-2 flex-row start-1 items-center  gap-3 m-2">
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
          <div className=" text-white ml-60  flex flex-col p-0 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3 hover:translate-x-4 hover:translate-y-4">

            <div className="text-[30px] font-bold">Hey 👋, I am</div>
            <div className="text-[38px] font-bold">Amit</div>
            <div className="text-[39px] font-bold">Sapte</div>
            <div className="text-[30px] font-bold">A Full Stack Dev</div>
            <div className="text-[20px] text-gray-500 font-bold">Mumbai Maharashtra </div>
            <div className='custom-shadow'>
              <button className="bg-gradient-to-bl mt-8 from-[rgb(132,0,255)] to-[rgb(230,0,255)]  h-[40px] w-full   ">Check Resume</button>
            </div>
            {/* <img className='h-[300px] w-[250px] rounded-md' src={amitImage} alt="not found" ></img> */}
          </div>
        </div>

        <div className="flex absolute left-11 top-[425px]  ">
          <div className="border border-gray-900 bg-gray-900 h-[400px] w-[500px] flex flex-col items-center justify-center  top-20 left-0">
            <div>
              <label className='text-gray-300 text-[49px]'>FrontEnd</label>
            </div>
            <div className='flex flex-row '>
              <div className='border border-gray-300  m-3 h-[40px] w-[100px] flex flex-row justify-center items-center'>
                <img src='https://www.w3.org/html/logo/badge/html5-badge-h-solo.png' className='h-[35px] w-[40px] ' alt='not found'></img>
                <label className='text-gray-400 font-bold'>HTML5</label>
              </div>
              <div className='border border-gray-300  m-3 h-[40px] w-[100px] flex flex-row justify-center items-center'>
                <img src='https://www.w3.org/html/logo/badge/html5-badge-h-solo.png' className='h-[35px] w-[40px] ' alt='not found'></img>
                <label className='text-gray-400 font-bold'>HTML5</label>
              </div>
            </div>
          </div>
          <div className="ml-52 shadow-2xl mt-20 shadow-slate-200">
            <div className="w-[80px] h-[30px] bg-black "></div>
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
      </div>
    </div>
  );
}

export default App;
