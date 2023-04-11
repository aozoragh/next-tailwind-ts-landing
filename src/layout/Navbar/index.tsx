import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen h-5 flex justify-end items-center fixed text-white p-10 gap-6 font-Allura text-3xl">
      <div><a href="">About</a></div>
      <div><a href="">Resume</a></div>
      <div><a href="">Portfolio</a></div>
      <div><a href="">Service</a></div>
      <div><a href="">Contact</a></div>
    </div>
  )
}

export default Navbar;