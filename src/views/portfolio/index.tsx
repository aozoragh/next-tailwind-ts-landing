import React from "react";

const Portfolio = () => {
  return (
    <div className='max-w-[90%] m-auto py-32 flex justify-center items-center flex-col gap-20'>
      <p className='text-center text-7xl font-Allura font-bold'>Portfolio</p>
      <p className="text-center text-2xl font-RoundArial w-[60%] m-auto">
        Over the past period, while developing the below projects, 
        I have given my client joy and satisfaction by carrying out the project from scratch.</p>
      <div className="w-full flex flex-col">
        <div className="w-full flex">         
          <div className="w-[60%]">
            <div className="h-[30vw] flex justify-center items-center bg-portfolio1 bg-cover">
              {/* NFTs minting - React.js + Styled Component */}
            </div>
            <div className="h-[30vw] flex justify-center items-center bg-portfolio2 bg-cover">
              {/* NFTs minting & staking - Next.js + Styled Component + Typescript */}
            </div>
          </div>
          <div className="w-[40%] h-[60vw] bg-portfolio3 bg-cover"></div>
        </div>
        <div className="w-full h-[40vw] bg-portfolio4"></div>
      </div>
    </div>
  )
}
export default Portfolio;