import React from 'react'
import { Link } from 'react-router-dom'
import { FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMdOpen } from "react-icons/io";
import foto from '../assets/foto.png'


const Dashboard = () => {
  return (
    <div className='text-white bg-[#141414] overflow-y-auto h-screen '>
      <div className='flex flex-col mlg:max-w-[50%] h-full py-[60px] px-[60px] max-md:py-[30px] max-md:px-[30px] w-full mlg:fixed bg-transparent items-start justify-between'>
        <div className='flex flex-col gap-[25px]'>
            <p className='text-[45px] font-poppins font-medium capitalize max-md:text-[35px]'>hello, i'm rio alamsyah.</p>
            <p className='text-white text-opacity-50'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam, ducimus soluta ipsa quam voluptatem commodi tempora corrupti atque voluptas facere quaerat consequuntur deserunt, a tenetur vel debitis ex blanditiis voluptates accusantium tempore culpa veritatis fuga non! Doloribus cupiditate facilis ipsum? Earum architecto sit illo aliquid, sint est temporibus nulla aut, assumenda enim corrupti quasi consequatur labore fugiat eligendi, ipsa fugit!</p>
            <div className='mt-[50px]'>
                <ul className='flex flex-col gap-[20px]'>
                    <li>
                        <Link className='flex items-center gap-[10px] text-[12.5px]'>
                            <p>01</p>
                            <div className='bg-white w-[50px] h-[1.5px] rounded-full'/>
                            <p className='uppercase tracking-[5px] font-bold'>experients</p>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex items-center gap-[10px] text-[12.5px]'>
                            <p>02</p>
                            <div className='bg-white w-[30px] h-[1.5px] rounded-full'/>
                            <p className='uppercase tracking-[5px] font-bold'>projects</p>
                        </Link>
                    </li>
                    <li>
                        <Link className='flex items-center gap-[10px] text-[12.5px]'>
                            <p>03</p>
                            <div className='bg-white w-[30px] h-[1.5px] rounded-full'/>
                            <p className='uppercase tracking-[5px] font-bold'>interviews</p>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className='flex items-center gap-[50px]'>
            <div className='bg-white rounded-full text-black flex items-center justify-center w-[50px] h-[50px]'>
                i
            </div>
            <button className='flex items-center gap-[10px] capitalize font-medium'>
                <FaInstagram/>
                <p className='max-sm:hidden'>instagram</p>
                <IoMdOpen className='max-sm:hidden'/>
            </button>
            <button className='flex items-center gap-[10px] capitalize font-medium'>
                <FaGithub/>
                <p className='max-sm:hidden'>github</p>
                <IoMdOpen className='max-sm:hidden'/>
            </button>
            <button className='flex items-center gap-[10px] capitalize font-medium'>
                <FaLinkedin/>
                <p className='max-sm:hidden'>linkedin</p>
                <IoMdOpen className='max-sm:hidden'/>
            </button>
        </div>
      </div>
      <div className='flex flex-col gap-[20px] mlg:pl-[calc(50%+10px)] max-mlg:pl-[60px] max-md:py-[30px] max-md:px-[30px] py-[60px] pr-[60px] w-full'>
        <div className='flex flex-col gap-[60px]'>
         <div className='flex flex-col gap-[25px]'>
         <p className='ml-[10px] capitalize font-medium text-[20px] text-white text-opacity-70'>experients</p>
         <div className='bg-[#212023] w-full h-auto rounded-lg p-[25px] gap-[15px] flex flex-col items-start font-poppins text-white'>
                <div className='flex gap-[17px] max-md:flex-col'>
                <p className='flex items-center gap-[10px] text-white text-opacity-50 uppercase font-medium whitespace-nowrap text-[15px]'>Jan 2023 <div className='w-[15px] h-[1px] bg-white bg-opacity-50'/> Jun 2023</p>
                    <div className='flex items-center gap-[30px] capitalize text-white text-opacity-50 font-medium'>
                        <p>frontend</p>
                        <ul className='list-disc'>
                            <li>PT Lifetech Tanpa Batas</li>
                        </ul>
                    </div>
                </div>
                <p className='font-poppins font-normal text-white text-opacity-50 text-[15px] tracking-normal'>Selama 6 bulan masa kerja saya di PT Lifetech Tanpa Batas, saya mendapat kesempatan untuk berkontribusi sebagai Frontend Developer untuk pengembangan dua proyek penting. Dalam peran ini, saya bertanggung jawab untuk merancang, mengembangkan, dan memelihara antarmuka pengguna yang responsif dan menarik untuk aplikasi web kami.</p>
                    <div className='flex gap-[15px]'>
                        <div className='py-[10px] px-[15px] capitalize text-[13px] text-opacity-50 text-white rounded-full bg-white bg-opacity-5'>
                            javascript
                        </div>
                        <div className='py-[10px] px-[15px] capitalize text-[13px] text-opacity-50 text-white rounded-full bg-white bg-opacity-5'>
                            react
                        </div>
                        <div className='py-[10px] px-[15px] capitalize text-[13px] text-opacity-50 text-white rounded-full bg-white bg-opacity-5'>
                            tailwind
                        </div>
                    </div>
            </div>
         </div>
            <div className='flex flex-col gap-[20px]'>
                <p className='ml-[10px] capitalize font-medium text-[20px] text-white text-opacity-70'>projects</p>
            <div className='bg-[#212023] p-[25px] rounded-lg flex gap-[25px]'>
                <div className='w-[120px] h-[90px] bg-black bg-cover' style={{ backgroundImage: `url(${foto})` }}/>
                <div className='capitalize text-white flex flex-col'>
                    <p className='font-medium text-[18px] text-white text-opacity-70'>web portofolio</p>
                    <p className='text-medium text-white text-opacity-50 text-[15px]'>portofolio site build with react and tailwind</p>
                    <div className='flex items-center gap-[10px] mt-[10px]'>
                         <div className='py-[8px] px-[15px] capitalize text-[13px] text-opacity-50 text-white rounded-full bg-white bg-opacity-5'>
                            javascript
                        </div>
                         <div className='py-[8px] px-[15px] capitalize text-[13px] text-opacity-50 text-white rounded-full bg-white bg-opacity-5'>
                            react
                        </div>
                         <div className='py-[8px] px-[15px] capitalize text-[13px] text-opacity-50 text-white rounded-full bg-white bg-opacity-5'>
                            tailwind
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      <p className='mt-[50px] font-medium text-white font-poppins text-opacity-50'>Loosely designed in Figma and coded in Visual Studio Code by yours truly. Built with React.js and Tailwind CSS, deployed with Vercel. All text is set in the Inter typeface.</p>
      </div>
    </div>
  )
}

export default Dashboard
