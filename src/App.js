import leetcode from '../src/image/leetcode.png'
import hackrank from '../src/image/hackrank.png'
import github from '../src/image/github.png'
import reactImage from './image/logo512.png'
import './App.css'

function App() {
  return (
    <div >
      <div className='bg-gray-900'>
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
      <div className="bg-gray-900  h-full   flex flex-col gap-3">

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
            <div className='mb-8'>
              <button className="custom-shadow bg-gradient-to-bl mt-4 from-[rgb(132,0,255)] to-[rgb(230,0,255)]  h-[40px] w-full   ">Check Resume</button>
            </div>
            {/* <img className='h-[300px] w-[250px] rounded-md' src={amitImage} alt="not found" ></img> */}
          </div>
        </div>
      </div>
      <div className=' h-full w-full bg-gray-900 absolute items-center  justify-center flex flex-row  gap-4'>
        <div className="flex flex-row mt-6   ">
          <div className="border border-gray-500 bg-gray-900 h-[300px] w-[500px] flex flex-col items-center justify-center ">
            <div>
              <label className='text-gray-300 text-[30px]'>Front-End</label>
            </div>
            <div className='flex flex-row justify-center items-center'>
              <div className='border border-gray-300  m-3 h-[50px] w-[130px] rounded-md flex flex-row justify-center gap-1 items-center'>
                <img src={reactImage} className='h-[25px] w-[30px] ' alt='not found'></img>
                <label className='text-gray-400 font-bold'>React Js</label>
              </div>
              <div className='border border-gray-300  m-3 h-[50px] w-[130px] flex flex-row justify-center rounded-md gap-1 items-center'>
                <img src= 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' className='h-[30px] w-[35px] ' alt='not found'></img>
                <label className='text-gray-400 font-bold'>Tailwind</label>
              </div>
            </div>
            <div className='flex flex-row justify-center items-center'>
            <div className='border border-gray-300  m-3 h-[50px] w-[130px] flex flex-row justify-center rounded-md gap-1 items-center'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' className='h-[30px] w-[35px] ' alt='not found'></img>
                <label className='text-gray-400 font-bold'>JavaScript</label>
              </div>
              <div className='border border-gray-300  m-3 h-[50px] w-[100px] rounded-md flex flex-row justify-center gap-1 items-center'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' className='h-[45px] w-[40px] ' alt='not found'></img>
                <label className='text-gray-400 font-bold'>Css</label>
              </div>
              <div className='border border-gray-300  m-3 h-[50px] w-[130px] flex flex-row justify-center rounded-md gap-1 items-center'>
                <img src='https://www.w3.org/html/logo/badge/html5-badge-h-solo.png' className='h-[40px] w-[45px] ' alt='not found'></img>
                <label className='text-gray-400 font-bold'>HTML5</label>
              </div>
            </div>
            <div>
            <div className='border border-gray-300  m-3 h-[60px] w-[130px] flex flex-row justify-center rounded-md gap-1 items-center'>
                <img src='https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' className='h-[40px] w-[45px] ' alt='not found'></img>
                <label className='text-gray-400 font-bold'>Bootstrap</label>
              </div>
            </div>

          </div>
          {/* <div className=" shadow-2xl mt-20 shadow-slate-200">
              <div className="w-[80px] h-[30px] bg-red-800 "></div>
              <div className="flex absolute left-11 top-[425px] ">
                <div className="border border-gray-900 bg-red-900 h-[200px] w-[200px] flex flex-col   top-20 left-0">
                </div>
              </div>
            </div> */}
        </div>


        <div className="mt-6   w-[500px] h-[300px]   justify-center items-center shadow-2xl flex flex-col border border-gray-50 shadow-slate-200 bg-gray-900">
          <div className="text-[30px] font-bold ">
            BackEnd
          </div>
          <div className='flex flex-row gap-2  '>
            <div className='border  border-gray-300 flex row w-[130px] h-[40px] justify-center items-centers'>
              <img src='https://icon-library.com/images/java-icon-png/java-icon-png-15.jpg' className='w-[60px] h-[30px]' alt='not found'></img>
              <label className='text-[20px] ml-1' >Java</label>
            </div>
            <div className='border border-gray-300 flex row w-[130px] justify-center items-center h-[40px]'>
              <img src='https://nodejs.org/static/logos/nodejsLight.svg' className='w-[60px] h-[40px]' alt='not found'></img>
              <label className='text-[20px] text-white ml-1' >Node</label>
            </div>
            <div className='border border-gray-300 flex row w-[130px] h-[40px]'>
              <img src='' alt='not found'></img>
              <label className='text-[20px] ml-1' >Java</label>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;
