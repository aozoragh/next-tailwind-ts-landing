import React from "react";

import DotIcon from "components/dotIcon";
import DateIcon from "components/dateIcon";
import LocationIcon from "components/locationIcon";

const Resume = () => {
  return (
    <div className="max-w-[90%] m-auto flex flex-col gap-10">
      <p className='text-center text-7xl font-Allura font-bold'>Resume</p>
      <div className="flex flex-col gap-4">
        <p className="text-center text-5xl font-RoundArial">More of my credentials</p>
        <p className="text-center text-2xl font-RoundArial w-[60%] m-auto">
          I have a Bachelor&apos;s degree from a top university in Italy, 
          during which time I have became a deep knowledge of programming
          and made a career as an important developer for several companies.</p>
      </div>

      <div className="flex flex-col gap-10">
        <p className='text-center text-5xl font-Allura'>Professional Experience</p>
        <div className="w-full flex flex-wrap justify-around gap-14 font-RoundArial">          
          <div className="w-[45%] flex flex-col border border-solid border-white shadow-profile rounded-3xl p-8">
            <p className="text-[32px]">Frontend Developer | UX/UI Designer</p>
            <p className="text-[30px]">QVANTEL</p>
            <div className="flex gap-8">
              <span className="text-[20px] flex gap-2"><DateIcon />2015~2018</span>
              <span className="text-[20px] flex gap-2"><LocationIcon /> Rome, Italy</span>
            </div>
            <div className="flex"><DotIcon /> Designed landing pages for one of the most popular food chains in the Italy.</div>
            <div className="flex"><DotIcon />Contributed to the design of different website pages, aligning with the established aesthetic that the company once designed.</div>
            <div className="flex"><DotIcon />Worked with internal teams to generate ideas for pitching and proposals</div>
            <div className="flex"><DotIcon />Developed dynamic and interactive charting of commodity index data with jQuery and Highcharts.</div>
            <div className="flex"><DotIcon />Implemented Single Page Application (SPA) architecture and client side MVC using ReactJS.</div>
            <div className="flex"><DotIcon />Developed many mobile apps using React Native, Flutter and Firebase.</div>
          </div>
     
          <div className="w-[45%] flex flex-col border border-solid border-white shadow-profile rounded-3xl p-8">
            <p className="text-[32px]">Senior Full Stack Developer</p>
            <p className="text-[30px]">AVANTGARDE LABS</p>
            <div className="flex gap-8">
              <span className="text-[20px] flex gap-2"><DateIcon />2018~2020</span>
              <span className="text-[20px] flex gap-2"><LocationIcon />Dresden, Germany</span>
            </div>
            <div className="flex"><DotIcon />Implemented a site-wide redesign and front-end overhaul targeting both desktop and mobile devices. Incorporated responsive image best practices to maximize performance and page speed ranking for SEO.</div>
            <div className="flex"><DotIcon />Discovered and corrected architectural design flaws to improve program efficiency and performance. Maintained a data-driven user interface validation system to enforce good data input.</div>
            <div className="flex"><DotIcon />Converted PSDs to pixel-perfect web pages for our admin site.</div>
            <div className="flex"><DotIcon />Development of Electron App and Used Next.js and Nuxt.js - Web Hosting to AWS / Azure.</div>
          </div>

          <div className="w-[45%] flex flex-col border border-solid border-white shadow-profile rounded-3xl p-8">
            <div className="text-[32px]">Full Stack Engineer|Project Manager</div>
            <div className="text-[30px]">HILO LABS</div>
            <div className="flex gap-8">
              <span className="text-[20px] flex gap-2"><DateIcon />2021~2022</span>
              <span className="text-[20px] flex gap-2"><LocationIcon />Toronto, Canada</span>
            </div>
            <div className="flex"><DotIcon />Built from scratch admin platform for managing platform&apos;s database entities and users using React, Node.js, and Mongoose.</div>
            <div className="flex"><DotIcon />Built many websites using React, Redux, NodeJS, MongoDB</div>
            <div className="flex"><DotIcon />As a project manager, develop a dashboard that makes project management easier and accurately evaluates the results of each developers.</div>
            <div className="flex"><DotIcon />Implemented and used Google and Facebook analytics to optimize site contents and search to further increase conversions.</div>
          </div>

          <div className="w-[45%] flex flex-col border border-solid border-white shadow-profile rounded-3xl p-8">
            <div className="text-[32px]">Full-Stack | Blockchain Developer</div>
            <div className="text-[30px]">Freelancer</div>
            <div className="flex gap-8">
              <span className="text-[20px] flex gap-2"><DateIcon />2022~Ongoing</span>
              {/* <span className="text-[20px]">Dresden, Germany</span> */}
            </div>
            <div className="flex"><DotIcon />ERC20, ERC721, ERC998, ERC1155, ERC1400, ERC223, ERC721A TOKEN.</div>
            <div className="flex"><DotIcon />Built a NFT marketplace with us Client using MERN Stack.</div>
            <div className="flex"><DotIcon />Developed 2 NFT minting site using React, Next and solidity.</div>
          </div>
        </div>

        <div className="w-[700px] m-auto flex flex-col gap-3 mt-10">
          <div className='text-center text-5xl font-Allura'>Education</div>
          <div className="flex gap-3"><DateIcon /><span>2014-2016</span></div>
          <div className="text-3xl font-Allura flex justify-between"><span>University of Rome Tor Vergata</span> <span>Bachelor of Computer Science</span></div>
        </div>
      </div>
    </div>
  )
}
export default Resume;