'use client';

import Nav from './comps/nav';
import BubbleBackground from './comps/bubble';
import { useState, useEffect, useRef } from 'react';
import { Icon } from "@iconify/react";

export default function Home() {
  const [section, setSection] = useState('HOME');

  const homeRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const skillRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);

  const sectionRefs = {
    HOME: homeRef,
    ABOUT: aboutRef,
    SKILLS: skillRef,
    PROJECTS: projectsRef,
    CONTACTS: projectsRef,
  };

  useEffect(() => {
    const ref = sectionRefs[section as keyof typeof sectionRefs];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, [section]);

  return (
    <main className="relative w-screen h-screen flex flex-col justfy-center items-center overflow-auto scroll-smooth">
      <BubbleBackground />
      <Nav section={section} setSection={setSection} />

      <div ref={homeRef} className="home w-full min-h-screen flex flex-col justify-center px-40">
        <div className="name text-base text-white">Thanarat Ampanhom ( Don )</div>
        <div className="title text-7xl font-bold text-sky-300 drop-shadow-lg">DONKA</div>
        <div className="desc max-w-2/5 text-sky-100 mt-2 bg-white/5 rounded-lg p-4 shadow-lg backdrop-blur-sm">
          สวัสดีครับผมชื่อ นาย <span className="font-semibold text-sky-300">ธนะรัชต์ อพันหอม</span> ชื่อเล่น <span className="font-semibold text-sky-300">ดอน</span> อายุ 20 ปี
          <br />
          ผมชื่นชอบในการเขียนโปรแกรมหรือ Website ตั้งแต่เรียนอยู่มัธยม
          <br />
          ได้ความรู้มาจากการเรียนตั้งแต่มัธยมเรื่อง Website หลังจากที่เข้าวงการ FiveM
          <br />
          ก็ศึกษาวิธีเขียนโปรแกรมภาษา LUA ด้วยตัวเองมาตลอด 4 ปี
          <br />
          มีการฝึกทักษะอื่นๆควยคู่ตามไปด้วยระหว่างนั้น
          <br />
          ปัจจุบันรับงงานเป็น Developer ให้กับ <span className="font-semibold text-sky-300">FiveM Server Made In Thailand</span>
        </div>
      </div>

      <div ref={aboutRef} className="about w-full flex flex-col justify-center items-end pt-30 p-40 text-white">
        <div className="title text-7xl font-bold text-sky-300 drop-shadow-lg">ABOUT</div>

        <div className="ability w-full flex flex-col justify-center items-center gap-5 mt-30">
          <div className="desc max-w-2/5 text-sky-100 mt-2 bg-white/5 rounded-lg p-4 shadow-lg backdrop-blur-sm">
            ผลงานทาง
            <span className="font-semibold text-sky-300 ml-2">Social Media</span>
          </div>
          <div className="flex p-4 gap-10">
            <a
              href="https://www.youtube.com/@DONKADEVELOPER"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-50 hover:opacity-100 duration-500"
              title="YouTube"
            >
              <Icon icon="mdi:youtube" width="24" height="24" />
              <span className="hidden sm:inline">YouTube</span>
            </a>
            <a
              href="https://github.com/DonkaScript"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 opacity-50 hover:opacity-100 duration-500"
              title="GitHub"
            >
              <Icon icon="mdi:github" width="24" height="24" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>

          <div className="desc max-w-2/5 text-sky-100 mt-2 bg-white/5 rounded-lg p-4 shadow-lg backdrop-blur-sm">
            ความสามารถ
            <span className="font-semibold text-sky-300 ml-2">FiveM</span>
          </div>
          <div className="flex flex-col p-4 items-center">
            <div>สามารถเขียนสคริปต์ FiveM พร้อม UI ตั้งแต่ 0 - 100% ได้</div>
            <div>สามารถสร้างสคริปต์ตาม Requirement ได้</div>
            <div>สามารถออกแบบ UI ได้นิดหน่อย ( แต่ถ้ามี Ref มาให้สามารถทำได้เลย 100% )</div>
            <div>สามารถเชื่อม UI ได้ทั้งหมด</div>
            <div>สามารถทำ UI ผ่านสคริปที่ล็อค UI เอาไว้ได้</div>
            <div>สามารถเขียนเว็บไซต์ เติมเงิน ซื้อของได้</div>
            <div>สคริปต์ที่เคยเขียนเองมาแล้วตั้งแต่ 0 - 100% มีทั้งระบบและ UI กว่า 50 ตัว</div>
          </div>
        </div>
      </div>

      <div ref={skillRef} className="skill w-full min-h-screen flex flex-col items-start pt-30 px-40 text-white gap-5">
        <div className="title text-7xl font-bold text-sky-300 drop-shadow-lg">SKILLS</div>
        <div className="desc w-full mt-2 flex gap-10">
          <Icon icon="simple-icons:lua" width="32" height="32" className="mb-1" />
          <Icon icon="vscode-icons:file-type-html" width="32" height="32" className="mb-1" />
          <Icon icon="vscode-icons:file-type-css" width="32" height="32" className="mb-1" />
          <Icon icon="vscode-icons:file-type-js-official" width="32" height="32" className="mb-1" />
          <Icon icon="vscode-icons:file-type-sql" width="32" height="32" className="mb-1" />
          <Icon icon="vscode-icons:file-type-php" width="32" height="32" className="mb-1" />
          <Icon icon="mdi:react" width="32" height="32" className="mb-1" />
        </div>
      </div>

      <div ref={projectsRef} className="projects w-full min-h-screen flex flex-col items-center pt-30 px-40 text-white">
        <div className="title text-7xl font-bold text-sky-300 drop-shadow-lg">PROJECTS</div>
        <div className='w-full h-full flex flex-col items-end py-10'>
          <div className="desc max-w-2/5 text-sky-100 mt-2 bg-white/5 rounded-lg p-4 shadow-lg backdrop-blur-sm">
            ประสบการณ์ที่เชี่ยวชาญที่สุดในปัจจุบัน
            <span className="font-semibold text-sky-300 ml-2">FiveM Developer</span>
          </div>
          <div className="flex flex-col p-4 items-end">
            <div> 4Kings สายเลือดอาชีวะ <span className="font-semibold text-sky-300 ml-2">( แนวโรงเรียน )</span> </div>
            <div> Klongtoei ซีซั่น 2  <span className="font-semibold text-sky-300 ml-2">( แนวโรลเพลย์ ) ( เซิฟ Ninjo )</span> </div>
            <div> Iris City  <span className="font-semibold text-sky-300 ml-2">( แนวโรลเพลย์ )</span> </div>
            <div> Buffet City <span className="font-semibold text-sky-300 ml-2">( แนวโรลเพลย์ )</span> </div>
            <div> Matthayom Highschool <span className="font-semibold text-sky-300 ml-2">( แนวโรงเรียน )</span> </div>
            <div> ดึกดำบรรพ์ Highschool <span className="font-semibold text-sky-300 ml-2">( แนวโรงเรียน )</span> </div>
            <div> Crazy Ocean World  <span className="font-semibold text-sky-300 ml-2">( แนวโรลเพลย์ )</span> </div>
            <div> Made In Thailand Tunder <span className="font-semibold text-sky-300 ml-2">( เซิฟเวอร์ X10เล่นเอาสนุก )</span> </div>
            <div> Made In Thailand 1.0 / Made In Thailand 2.0 <span className="font-semibold text-sky-300 ml-2">( แนวโรลเพลย์ )</span> </div>
            <div> และยังมีสคริปต์ที่ Custom ขึ้นมาเอง <span className="font-semibold text-sky-300 ml-2"> ( มากกว่า 50 ตัว ) </span> </div>
          </div>
        </div>
        <div className='w-full h-full flex flex-col items-start py-10'>
          <div className="desc max-w-2/5 text-sky-100 mt-2 bg-white/5 rounded-lg p-4 shadow-lg backdrop-blur-sm">
            ประสบการณ์ที่เคยทำมา
            <span className="font-semibold text-sky-300 ml-2">Website Developer</span>
          </div>
          <div className="flex flex-col p-4 items-start">
            <div> E-commerce / Shopping Cart / Stocks / Admin Panel <span className="font-semibold text-sky-300 ml-2"> ( เว็บขายสินค้าออนไลน์ ) </span> </div>
            <div> Pet lovely store <span className="font-semibold text-sky-300 ml-2"> ( เว็บขายสัตว์เลี้ยงออนไลน์ โปรเจคจบมหาลัย ) </span> </div>
            <div> Music Resume <span className="font-semibold text-sky-300 ml-2"> ( เว็บเรซูเมนักดนตรี ) </span> </div>
            <div> FiveM Store <span className="font-semibold text-sky-300 ml-2"> ( เว็บขายระบบของเกมส์ FiveM ) </span> </div>
          </div>
        </div>
      </div>

      <div className="footer w-full h-100 pt-20"></div>
    </main>
  );
}