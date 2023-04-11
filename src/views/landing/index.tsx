import React from 'react'

const Landing = () => {
  return (
    <div className='h-screen bg-landing bg-cover flex justify-center items-center'>
      <div className="flex flex-col gap-5">
        <span className='font-RoundArial text-7xl'>Francesco Virogilio Popescu</span>
        <span className='font-arial text-2xl text-center'>Full Stack Blockchain Developer</span>
        <span className='border-2 border-white border-solid p-4 text-3xl font-RoundArial text-center w-96 m-auto'>More about me</span>
      </div>
    </div>
  )
}

export default Landing;