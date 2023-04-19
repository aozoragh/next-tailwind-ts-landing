import BackIcon from "components/canDoIcon/backIcon";
import BlockchainIcon from "components/canDoIcon/blockchainIcon";
import FrontIcon from "components/canDoIcon/frontIcon";
import React from "react";

const Cando = () => {
  return (
    <div className="relative bg-candoBg bg-cover flex flex-col justify-center items-center gap-5 py-[50px]">
      <div className="absolute w-full h-full bg-mask z-0"></div>
      <p className='text-center text-7xl font-Allura font-bold z-10'>Service</p>
      <p className="text-center text-5xl font-RoundArial z-10">What can I do for you?</p>
      <p className="w-[100%] text-center text-3xl font-RoundArial z-10">As a senior NFT developer, I have solid knowledge in the NFT field. <br />So if you want NFT project, I can develop the best project. <br />And As a senior full-stack developer, I am sure about MERN/TNT Stack project.</p>
      <div className="flex justify-center items-center gap-16 z-10">
        <div className="flex flex-col justify-center items-center gap-5"><FrontIcon /><span className="text-center text-3xl font-RoundArial">Front-end Development</span></div>
        <div className="flex flex-col justify-center items-center gap-5"><BackIcon /><span className="text-center text-3xl font-RoundArial">Back-end Development</span></div>
        <div className="flex flex-col justify-center items-center gap-5"><BlockchainIcon /><span className="text-center text-3xl font-RoundArial">Blockchain Development</span></div>
      </div>
    </div>
  )
}
export default Cando