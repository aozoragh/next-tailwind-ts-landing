import React from 'react'

const About = () => {
  return (
    <div className='max-w-90% m-auto py-32 flex justify-center items-center flex-col gap-10'>
      <p className='text-center text-7xl font-Allura font-bold'>About Me</p>
      <div className="max-w-90% flex justify-center items-center gap-20">
          <img className='w-avatar h-avatar rounded-full' src="/assets/images/avatar.jpg" alt="avatar" />
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
    </div>
  )
}

export default About;