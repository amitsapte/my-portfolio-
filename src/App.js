import leetcode from '../src/image/leetcode.png'
import hackrank from '../src/image/hackrank.png'
import github from '../src/image/github.png'
import reactImage from './image/logo512.png'
import expressImage from './image/express.img.png'
import './App.css'
import { useEffect } from 'react'

function App() {


  useEffect(() => {
    const menu = document.getElementById("togalbuttonClick");

    // Check if screen width is 900px or more
    if (window.innerWidth >= 770) {
      menu.classList.add('visiable');
      menu.classList.remove('nonvisiable');
    } else {
      menu.classList.add('nonvisiable');
      menu.classList.remove('visiable');
    }

    // Optionally, add a resize event listener to adjust when resizing the window
    const handleResize = () => {
      if (window.innerWidth >= 770) {
        menu.classList.add('visiable');
        menu.classList.remove('nonvisiable');
      } else {
        menu.classList.add('nonvisiable');
        menu.classList.remove('visiable');
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run effect only on mount

  const toggleMenu = () => {
    const menu = document.getElementById("togalbuttonClick");
    menu.classList.toggle('visiable');
  };

  return (
    <div>
      <div className='bg-gray-900'>
        <div className='flex flex-row-reverse p-1'>
          <button
            className='block md:hidden p-2 text-gray-50 hover:text-gray-50 focus:outline-none'
            onClick={toggleMenu}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='white'
              viewBox='0 0 10 10'
              stroke='currentColor'
              className='w-10 h-10'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 1h8M1 5h8M1 9h8'
              />
            </svg>
          </button>
        </div>

        <div className="    pt-2 mr-4 text-white gap-8 " id="togalbuttonClick" >
          <div className="flex flex-row justify-center items-center " >
            <img src={github || null} alt='not found' className=' m-2  w-[35px] h-[30px]  object-cover '></img>
            <a className='text-[25px]' href='https://github.com/amitsapte'>Github </a>
          </div>
          <div className="flex  flex-row  justify-center items-center" >
            <img src={hackrank || null} alt='not found' className='w-[30px] h-[20px] m-2  object-cover' ></img>
            <a href='https://www.hackerrank.com/profile/sapteab2018'>Hackerrank</a>
          </div>

          <div className="flex flex-row  justify-center items-center " >
            <img src={leetcode || null} className='w-[50px] h-[20px]   m-2 object-cover' alt='not found '></img>
            <a href='https://leetcode.com/u/sapteamit/'> Leetcode </a>
          </div>
        </div>

      </div>
      <div className='  flex flex-col  '>
        <div className="bg-red-700">

        </div>
      </div>
      <div className="bg-gray-900  h-full    flex flex-col gap-3">

        <div className="flex relative top-2 flex-row start-1 items-center justify-center  gap-3 m-2">
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
          <div className='flex flex-col  md:gap-28 gap-0  sm:flex-col md:flex-col  lg:flex-row  2  '>
            <div className=" text-white   flex flex-col p-0 rounded-lg transition-transform duration-300 ease-in-out transform hover:scale-105 hover:rotate-3 hover:translate-x-4 hover:translate-y-4">
              <div className="text-[30px] font-bold">Hey 👋, I am</div>
              <div className="text-[38px] font-bold">Amit</div>
              <div className="text-[39px] font-bold">Sapte</div>
              <div className="text-[30px] font-bold">A Full Stack Dev</div>
              <div className="text-[20px] text-gray-500 font-bold">Mumbai Maharashtra </div>
              <div className='h-auto '>
                <button className="custom-shadow bg-gradient-to-bl mt-6 from-[rgb(132,0,255)] to-[rgb(230,0,255)]  h-[40px] w-full   ">Check Resume</button>
              </div>
            </div>

            <div className='text-white w-full max-w-[450px] md: mt-4  '>
              <p className='font-bold text-[30px]'>Software Engineer
              </p>
              <p className=' text-[18px]'>Mind Zillion / Mumbai Maharashtra/ November 2024
              </p>
              <p className=' text-[16px] text-gray-200'> •  Developed dynamic, responsive web pages using React.js,ensuring seamless user interactions and optimal device
                performance across desktops, tablets, and mobile devices..
              </p>
              <p className=' text-[16px] text-gray-200'> • Built reusable HTML components, integrated custom styles with Tailwind CSS, and added interactivity using
                JavaScript, focusing on fast, efficient, and consistent design while following project.</p>
            </div>


          </div>
        </div>
      </div>
      <div className=' h-auto p-2  w-full bg-gray-900  flex flex-col  md:m-0  justify-center sm:flex-col md:flex-col  lg:flex-row md:gap-20 gap-2 '>
        <div className="flex flex-row  justify-center items-center  ">
          <div className="md:border md:border-gray-500 md:gap-4 gap-2 p-3 bg-gray-900 h-auto w-auto flex flex-col items-center justify-center ">
            <div>
              <label className='text-gray-300 text-[30px]'>Front-End</label>
            </div>
            <div className='flex flex-col sm:gap-2 sm:flex-row  justify-center items-center '>
              <div className='border border-gray-300 w-[90px] h-[40px] md:w-[130px] md:h-[50px] rounded-md flex flex-row justify-center gap-1 items-center'>
                <img src={reactImage || null} className='h-[25px] w-[30px] ' alt='not found'></img>
                <label className='text-gray-400 md:text-[18px] text-[12px] font-bold'>React Js</label>
              </div>
              <div className='border border-gray-300  w-[90px] h-[40px] md:w-[130px] md:h-[50px] flex flex-row justify-center rounded-md gap-1 items-center'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg' className='md:h-[40px] md:w-[45px] h-[30px] w-[30px] ' alt='not found'></img>
                <label className='text-gray-400 font-bold md:text-[18px] text-[12px]'>Tailwind</label>
              </div>
            </div>
            <div className='flex flex-col  gap-1  md:gap-2  sm:flex-row  justify-center items-center'>
              <div className='border border-gray-300   w-[90px] h-[40px] md:w-[130px] md:h-[50px] flex flex-row justify-center rounded-md gap-1  items-center'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png' className='md:h-[30px] md:w-[30px] h-[20px] w-[20px] ' alt='not found'></img>
                <label className='text-gray-400 font-bold md:text-[18px] text-[12px]'>JavaScript</label>
              </div>
              <div className='border border-gray-300   w-[90px] h-[40px] md:w-[130px] md:h-[50px] rounded-md flex flex-row justify-center items-center gap-1'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png' className='md:h-[40px] md:w-[45px] h-[30px] w-[30px] ' alt='not found'></img>
                <label className='text-gray-400 font-bold md:text-[18px] text-[12px]'>Css</label>
              </div>
              <div className='border border-gray-300   w-[90px] h-[40px] md:w-[130px] md:h-[50px] flex flex-row justify-center rounded-md md:gap-1 items-center'>
                <img src='https://www.w3.org/html/logo/badge/html5-badge-h-solo.png' className='md:h-[40px] md:w-[45px] h-[30px] w-[30px] ' alt='not found'></img>
                <label className='text-gray-400 font-bold md:text-[18px] text-[12px]'>HTML5</label>
              </div>
            </div>
            <div>
              <div className='border border-gray-300   w-[90px] h-[40px] md:w-[130px] md:h-[50px] flex flex-row justify-center rounded-md md:gap-1 items-center'>
                <img src='https://getbootstrap.com/docs/5.3/assets/brand/bootstrap-logo-shadow.png' className='md:h-[40px] md:w-[45px] h-[30px] w-[30px] ' alt='not found'></img>
                <label className='text-gray-400 font-bold md:text-[18px] text-[12px]'>Bootstrap</label>
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

        <div className="flex flex-row mt-0  justify-center items-center ">
          <div className="   p-3 w-auto  h-auto md:border md:border-gray-500    justify-center items-center shadow-2xl  md:gap-6 gap-2 flex flex-col  md:shadow-slate-200 bg-gray-900">
            <div className="text-[30px] font-bold text-white ">
              BackEnd
            </div>
            <div className='flex flex-col md:gap-6 gap-6'>
              <div className='flex flex-col sm:flex-row md:flex-row lg:flex-row justify-center md:gap-8 gap-6 '>
                <div className='border border-gray-300 flex rowjustify-center items-center w-[90px] h-[30px] md:w-[130px]  md:h-[40px]'>
                  <img src='https://nodejs.org/static/logos/nodejsLight.svg' className='md:w-[60px] md:h-[40px] w-[40px] h-[30px]' alt='not found'></img>
                  <label className=' text-white ml-1 text-[12px] md:text-[20px]' >Node</label>
                </div>
                <div className='border border-gray-300 flex row  w-[90px] h-[30px] md:w-[130px]  md:h-[40px] justify-center items-center'>
                  <img src={expressImage || null} className=' md:w-[30px] md:h-[20px] w-[30px] h-[20px]' alt='not found' />
                  <label className='text-[12px] md:text-[20px] ml-1 text-white'>Express Js</label>
                </div>


              </div>
              <div className='flex flex-col sm:flex-row  md:flex-row lg:flex-row justify-center gap-4 items-center md:gap-2 '>

                <div className='border border-gray-300 flex justify-center items-center rowmd:w-[130px] md:h-[40px] w-[90px] h-[30px]'>
                  <img src=' https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg' className='md:w-[30px] md:h-[20px] w-[20px] h-[30px] ' alt='not found'></img>
                  <label className='text-[10px] md:text-[15px] ml-1  text-white' >MongoDB</label>

                </div>

                <div className='border border-gray-300 flex justify-center items-center row md:w-[130px] md:h-[40px] w-[90px] h-[30px]'>
                  <img src='https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg' className='md:w-[30px] md:h-[20px] w-[20px] h-[30px]' alt='not found'></img>
                  <label className='text-[12px] md:text-[20px] ml-1  text-white' >MySql</label>

                </div>
                <div className='border border-gray-300 flex justify-center items-center row md:w-[130px] md:h-[40px] w-[90px] h-[30px]'>
                  <img src=' https://brijesh.xyz/postman.png' className='md:w-[30px] md:h-[30px] w-[20px] h-[20px]' alt='not found'></img>
                  <label className='text-[12px] md:text-[22px] ml-1 text-white' >Postman</label>

                </div>
              </div>
              <div className=' flex justify-center items-center'>
                <div className='border border-gray-300 flex  row md:w-[130px] md:h-[40px] w-[90px] h-[30px]'>
                  <img src=' https://e7.pngegg.com/pngimages/713/558/png-clipart-computer-icons-pro-git-github-logo-text-logo-thumbnail.png' alt='not found' className=' md:w-[60px] md:h-[40px] w-[40px] h-[30px] p-2'></img>
                  <label className='text-[12px] md:text-[22px] ml-2 text-white '>Git</label>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='h-full w-ull bg-gray-900 '>
        <div className=' grid md:grid-flow-col  grid-flow-row  text-white  p-4'>
          <div className='border h-auto w-auto m-1  border-gray-700 '>
            <div>Master in compute Application</div>
            <div>Shri V.D.Deshmukh College of MCA </div>
          </div>
          <div className='border h-auto w-auto m-1  border-gray-700'>
            <h4>Bachelor in compute Application</h4>
            <h5>College of computer Science and Information Technology  </h5>
          </div>
          <div className='border h-auto w-auto m-1  border-gray-700 '>
            <h4>High School in Science </h4>
            <h5>High school of wadwani </h5>
          </div>
          <div className=' border h-auto w-auto m-1  border-gray-700'>
            <h4>10 th School</h4>
            <h5>parimal school of latur </h5>
          </div>
        </div>
        <div className='' id="addres">
              
        </div>

      </div>
    </div>
  );
}

export default App;
