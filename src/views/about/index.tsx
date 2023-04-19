import React from 'react'
import Image from 'next/image';

import SkypeIcon from 'components/socials/skype';
import GithubIcon from 'components/socials/github';
import DiscordIcon from 'components/socials/discord';
import TelegramIcon from 'components/socials/telegram';
import LinkedinIcon from 'components/socials/linkedin';
import MediumIcon from 'components/socials/medium';

const About = () => {
  return (
    <div className='max-w-[90%] m-auto py-32 flex justify-center items-center flex-col gap-24'>
      <p className='text-center text-7xl font-Allura font-bold'>About Me</p>
      <div className="max-w-[90%] flex justify-center items-center gap-20">
          <Image className='rounded-full w-[237px] h-[237px]' width={400} height={230} src="/assets/images/avatar.jpg" alt="avatar" />
          <p className='text-3xl'>Full Stack Developer with 8 years of experience 
            in Full Stack Development. 
            Tech-savvy Full Stack Web Developer proficient 
            in fundamental front-end languages and server-side languages. 
            In-depth knowledge of MySQL and MongoDB. 
            Handles any part of process with ease. 
            As I am mostly a self-learner, I can easily adapt to new things 
            and always ready to take on a challenge. 
            Having extensive experience working with JavaScript, 
            I would jump at any opportunity to continue growing my skillset 
            in the JS field.</p>
      </div>
      <div className='w-full flex flex-col border border-solid border-white bg-profile shadow-profile rounded-3xl p-8 pl-16'>
        <div className='w-40 border border-solid border-white p-2 rounded-full bg-profile-title shadow-profile-title -translate-y-16 font-RoundArial text-4xl text-center'>Profile</div>
        <div className='-translate-y-8 font-RoundArial text-4xl flex flex-col gap-4'>
          <div>Full Name : Francesco Virogilio Popescu</div>
          <div>Birth Date : October 21, 1994</div>
          <div>Location : Rome, Italy</div>
          <div className='flex gap-5'>
            <SkypeIcon />
            <GithubIcon />
            <DiscordIcon />
            <TelegramIcon />
            <LinkedinIcon />
            <MediumIcon />
          </div>
        </div>
      </div>

      <div className='w-full flex flex-col border border-solid border-white bg-profile shadow-profile rounded-3xl p-8 pl-16 font-RoundArial'>
        <div className='w-40 border border-solid border-white p-2 rounded-full bg-profile-title shadow-profile-title -translate-y-16 text-4xl text-center'>Skills</div>
        <div className='-translate-y-8 font-RoundArial text-4xl flex flex-col gap-4'>
          <div className='flex flex-col gap-5'>
            <div className='flex justify-between'>
              <span>React / Next.js</span>
              <span>100%</span>
            </div>
            <div className='w-full h-[10px] bg-[#3367EE] rounded-full'></div>
            <div className='flex justify-between'>
              <span>Vue.js / Angular</span>
              <span className='mr-[20%]'>80%</span>
            </div>
            <div className='w-[80%] h-[10px] bg-[#3367EE] rounded-full'></div>
            <div className='flex justify-between'>
              <span>LAMT Stack</span>
              <span className='mr-[10%]'>90%</span>
            </div>
            <div className='w-[90%] h-[10px] bg-[#3367EE] rounded-full'></div>
            <div className='flex justify-between'>
              <span>Tailwind CSS / MUI</span>
              <span>100%</span>
            </div>
            <div className='w-full h-[10px] bg-[#3367EE] rounded-full'></div>
            <div className='flex justify-between'>
              <span>MySQL / MongoDB / PostgreSQL</span>
              <span className='mr-[5%]'>95%</span>
            </div>
            <div className='w-[95%] h-[10px] bg-[#3367EE] rounded-full'></div>
            <div className='flex justify-between'>
              <span>Blockchain</span>
              <span className='mr-[10%]'>90%</span>
            </div>
            <div className='w-[90%] h-[10px] bg-[#3367EE] rounded-full'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;