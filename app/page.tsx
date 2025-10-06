'use client';

import Image from 'next/image';
import Nav from './comps/nav';
import { TypeAnimation } from 'react-type-animation';
import BubbleBackground from './comps/bubble';
import { Icon } from '@iconify/react';

export default function Home() {
  return (
    <main className="flex flex-col justify-start items-center w-screen h-screen">
      <Nav />

      {/* <div id='home' className="w-3/4 h-fit flex flex-col justify-start items-start gap-6 pt-30 z-2 sm:pt-20 sm:w-full sm:px-10"> */}
      <div id='home' className="w-3/4 h-fit flex flex-col justify-start items-start gap-6 pt-30 z-2">

        <div className="w-full h-90 flex justify-start gap-4 relative">

          {/* ส่วนรูปภาพ */}
          {/* <div className="image w-1/5 h-full flex justify-center items-center sm:w-2/6 sm:h-full"> */}
          <div className="image w-1/5 h-full flex justify-center items-center">

            {/* ข้อความแนะนำตัว */}
            {/* <div className="absolute top-5 left-63 z-2 text-white text-sm sm:text-xs sm:flex-wrap flex justify-center items-start gap-2 leading-7"> */}
            <div className="absolute top-5 left-63 z-2 text-white text-sm flex justify-center items-start gap-2 leading-7">
              สวัสดีครับผมชื่อ
              {/* <span className="text-[#7127BA] text-2xl leading-6 font-semibold sm:text-lg"> */}
              <span className="text-[#7127BA] text-2xl leading-6 font-semibold">
                ธนะรัชต์ อำพันหอม
              </span>
              หรือ
              {/* <span className="text-[#7127BA] text-2xl leading-6 font-semibold sm:text-lg"> */}
              <span className="text-[#7127BA] text-2xl leading-6 font-semibold">
                ดอน
              </span>
              อายุ 20 ปี
            </div>

            <div className="arrow absolute top-3 left-45 z-2 w-20 h-20"></div>

            {/* รูปภาพ */}
            <div className="w-3/4 h-3/4 relative">
              <Image
                src="../public/Me.png"
                alt="Me"
                fill
                style={{ objectFit: 'contain' }}
                sizes="(max-width: 768px) 100vw, 20vw"
                priority
              />
            </div>

          </div>

          {/* ข้อความ tagline */}
          {/* <div className="flex flex-col justify-center items-start text-white gap-2 sm:h-4/5"> */}
          <div className="flex flex-col justify-center items-start text-white gap-2">
            <div className="text-xl text-gray-300">
              <div className='text-sm my-2'>A Developer who</div>
              <div className='text-4xl'>Builds ideas into <span className="text-[#7127BA]">reality.</span></div>
            </div>
          </div>

        </div>

        {/* Animation text */}
        <div className="w-full h-fit flex flex-col text-white p-5">
          <TypeAnimation
            sequence={[
              "I'm a Website Developer",
              1000,
              "FiveM Backend Developer",
              1000,
              "Creative Problem Solver",
              1000,
              "",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
          />
          <span className="text-gray-300 mt-2">
            ปัจจุบันทำงานเป็นฝ่ายพัฒนาเบื้องหลังให้กับ
            <span className="text-[#DCA449]"> Made In Thailand </span>
            แพลตฟอร์ม FiveM
          </span>
        </div>

        {/* ข้อความแนะนำตัว */}
        <div className="w-2/4 h-fit flex justify-start items-start text-white p-5 leading-relaxed text-base text-gray-300">
          นักพัฒนาโปรแกรมและเว็บไซต์ที่เรียนรู้ด้วยตนเอง มีประสบการณ์มากกว่า 4 ปี
          เชี่ยวชาญในการพัฒนา Script และระบบ Server สำหรับเกม GTA V (FiveM)
          รวมถึงมีประสบการณ์ในการสร้างเว็บไซต์ <br />
          ทั้งด้าน E-commerce ในการแข่งขันระดับภาค
          และโปรเจกต์จบการศึกษาของมหาวิทยาลัย
        </div>

      </div>

      <div
        id="about"
        className="w-11/12 md:w-3/4 text-white flex flex-col justify-center items-center md:items-start py-20 md:py-40 px-5 gap-10 z-2 relative mx-auto"
      >
        <div className="text-3xl sm:text-4xl font-semibold w-full text-center md:text-left mb-4 md:mb-2">
          Work Experience
        </div>

        <div className="works flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 w-full">
          {/* 1. Backend Engineer */}
          <div className="work bg-[#1E1628] rounded-2xl w-full sm:w-80 md:w-110 min-h-[10rem] flex flex-col justify-center p-4 sm:p-6 shadow-lg hover:scale-105 transition-transform">
            <div className="text-lg sm:text-xl font-semibold text-purple-400">
              Backend Engineer (Made In Thailand)
            </div>
            <div className="text-sm text-gray-400 mb-2">2025 - ปัจจุบัน</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              ดูแลและพัฒนาระบบหลังบ้านของแพลตฟอร์ม FiveM
              รวมถึงออกแบบ API เชื่อมต่อฐานข้อมูล และปรับปรุงประสิทธิภาพของระบบให้มีความเสถียรมากขึ้น
            </p>
          </div>

          {/* 2. FiveM Developer */}
          <div className="work bg-[#1E1628] rounded-2xl w-full sm:w-80 md:w-110 min-h-[10rem] flex flex-col justify-center p-4 sm:p-6 shadow-lg hover:scale-105 transition-transform">
            <div className="text-lg sm:text-xl font-semibold text-purple-400">
              FiveM Developer
            </div>
            <div className="text-sm text-gray-400 mb-2">2018 - ปัจจุบัน</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              พัฒนาและปรับแต่งสคริปต์ Lua สำหรับเซิร์ฟเวอร์เกม FiveM
              รวมถึงเชื่อมต่อระบบฐานข้อมูลและ API เพื่อเพิ่มฟีเจอร์ให้ผู้เล่นใช้งานได้สะดวกขึ้น
            </p>
          </div>

          {/* 3. Freelance Web Developer */}
          <div className="work bg-[#1E1628] rounded-2xl w-full sm:w-80 md:w-110 min-h-[10rem] flex flex-col justify-center p-4 sm:p-6 shadow-lg hover:scale-105 transition-transform">
            <div className="text-lg sm:text-xl font-semibold text-purple-400">
              Freelance Web Developer
            </div>
            <div className="text-sm text-gray-400 mb-2">2024 - ปัจจุบัน</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              ออกแบบและพัฒนาเว็บไซต์ให้กับลูกค้าโดยใช้ React, Next.js, PHP และ MySQL
              รวมถึงสร้างระบบ Backend และ Dashboard สำหรับจัดการข้อมูลอย่างมีประสิทธิภาพ
            </p>
          </div>

          {/* 4. Discord Bot Developer */}
          <div className="work bg-[#1E1628] rounded-2xl w-full sm:w-80 md:w-110 min-h-[10rem] flex flex-col justify-center p-4 sm:p-6 shadow-lg hover:scale-105 transition-transform">
            <div className="text-lg sm:text-xl font-semibold text-purple-400">
              Discord Bot Developer
            </div>
            <div className="text-sm text-gray-400 mb-2">2025 - ปัจจุบัน</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              สร้างและพัฒนา Discord Bot สำหรับจัดการเซิร์ฟเวอร์เกม FiveM
              โดยใช้ Node.js และ Discord.js พร้อมระบบแจ้งเตือนและควบคุมผ่าน API
            </p>
          </div>

          {/* 5. E-commerce Project Developer */}
          <div className="work bg-[#1E1628] rounded-2xl w-full sm:w-80 md:w-110 min-h-[10rem] flex flex-col justify-center p-4 sm:p-6 shadow-lg hover:scale-105 transition-transform">
            <div className="text-lg sm:text-xl font-semibold text-purple-400">
              E-commerce Project Developer
            </div>
            <div className="text-sm text-gray-400 mb-2">2021 - 2022</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              พัฒนาเว็บไซต์ขายสินค้าออนไลน์ในโครงการแข่งขันระดับภาค
              โดยใช้ PHP, HTML, CSS และ SQL พร้อมระบบจัดการสินค้าและคำสั่งซื้อครบวงจร
            </p>
          </div>

          {/* 6. Graduation Project Lead */}
          <div className="work bg-[#1E1628] rounded-2xl w-full sm:w-80 md:w-110 min-h-[10rem] flex flex-col justify-center p-4 sm:p-6 shadow-lg hover:scale-105 transition-transform">
            <div className="text-lg sm:text-xl font-semibold text-purple-400">
              Graduation Project Lead
            </div>
            <div className="text-sm text-gray-400 mb-2">2024</div>
            <p className="text-gray-300 text-sm leading-relaxed">
              เป็นหัวหน้าทีมพัฒนาโปรเจกต์จบของมหาวิทยาลัย
              รับผิดชอบออกแบบระบบทั้งหมดทั้งฝั่ง Front-end และ Back-end
              รวมถึงการเชื่อมต่อ API และนำเสนอผลงานต่อคณะกรรมการ
            </p>
          </div>
        </div>
      </div>

      <div className="w-3/4 min-h-120 text-white flex flex-col justify-center items-center py-40 px-5 gap-6 z-2 relative mb-80">
        <div className="w-2/4 text-center">
          <h2 className="text-3xl font-semibold mb-4">Skills & Technologies</h2>
          <p className="text-gray-300 text-base leading-relaxed">
            ผมมีความเชี่ยวชาญในการพัฒนาเว็บไซต์และระบบด้วยหลายเทคโนโลยี
            ทั้งฝั่ง Front-End และ Back-End โดยเน้นการออกแบบโค้ดที่สะอาดและมีประสิทธิภาพ
            รวมถึงมีประสบการณ์ในการพัฒนาเว็บด้วย React, Next.js, PHP และฐานข้อมูล SQL
            รวมถึงการเขียน Script สำหรับเกม (Lua) อีกด้วย
          </p>
        </div>
        <div className='skills w-80 flex justify-center items-center flex-wrap-reverse gap-2'>
          <div className='bg-[#251C31] rounded-full w-10 h-10 text-white flex justify-center items-center text-lg'>
            <Icon icon="devicon:lua" />
          </div>
          <div className='bg-[#251C31] rounded-full w-10 h-10 text-white flex justify-center items-center text-lg'>
            <Icon icon="vscode-icons:file-type-html" />
          </div>
          <div className='bg-[#251C31] rounded-full w-10 h-10 text-white flex justify-center items-center text-lg'>
            <Icon icon="vscode-icons:file-type-css2" />
          </div>
          <div className='bg-[#251C31] rounded-full w-10 h-10 text-white flex justify-center items-center text-lg'>
            <Icon icon="vscode-icons:file-type-js-official" />
          </div>
          <div className='bg-[#251C31] rounded-full w-10 h-10 text-white flex justify-center items-center text-lg'>
            <Icon icon="vscode-icons:file-type-sql" />
          </div>
          <div className='bg-[#251C31] rounded-full w-10 h-10 text-white flex justify-center items-center text-lg'>
            <Icon icon="logos:php" />
          </div>
          <div className='bg-[#251C31] rounded-full w-10 h-10 text-white flex justify-center items-center text-lg'>
            <Icon icon="logos:react" />
          </div>
          <div className='bg-[#251C31] rounded-full w-10 h-10 text-white flex justify-center items-center text-lg'>
            <Icon icon="devicon:nextjs" />
          </div>
          <div className='bg-[#251C31] rounded-full w-10 h-10 text-white flex justify-center items-center text-lg'>
            <Icon icon="logos:nodejs-icon-alt" />
          </div>
        </div>
      </div>

      <div id='contact' className="w-3/4 min-h-120 text-white flex flex-col justify-end items-start p-5 gap-6 z-2 relative">
        <div className="text-3xl w-full"> Contact </div>
        <div className="w-2/4 text-base leading-relaxed text-gray-300">
          หากคุณสนใจร่วมงาน พัฒนาโปรเจกต์ หรือต้องการสอบถามข้อมูลเพิ่มเติม
          สามารถติดต่อผมได้ผ่านช่องทางด้านล่างครับ
          ไม่ว่าจะเป็นงานออกแบบเว็บไซต์, เขียนโค้ด หรือปรึกษาเกี่ยวกับระบบต่าง ๆ
          ผมยินดีตอบกลับโดยเร็วที่สุด
        </div>
        <div className='text-sm'>thanarat14521@gmail.com</div>
        <div className='flex gap-4'>
          <a
            href="https://www.facebook.com/thanarat.ampanhom.7/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className='cursor-pointer text-xl hover:scale-110 transition-transform' icon="logos:facebook" />
          </a>

          <a
            href="https://www.instagram.com/dekdxn/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className='cursor-pointer text-xl hover:scale-110 transition-transform' icon="skill-icons:instagram" />
          </a>

          <a
            href="mailto:thanarat14521@gmail.com"
          >
            <Icon className='cursor-pointer text-xl hover:scale-110 transition-transform' icon="skill-icons:gmail-light" />
          </a>

          <a
            href="https://www.youtube.com/@DONKADEVELOPER"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon className='cursor-pointer text-xl hover:scale-110 transition-transform' icon="logos:youtube-icon" />
          </a>
        </div>

      </div>

      <BubbleBackground />
    </main>
  );
}
