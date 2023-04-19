import React, { useState } from "react";

const Contact = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();

  const response = await fetch('/api/send-email', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email: email,
      subject: subject,
      body: message,
      name: name,
    }),
  });

  const result = await response.json();

  if (result.status === 'OK') {
   console.log("success");
   
  } else {
    console.log("error!!!!!!!");
    
  }
}

  return (
    <div className='max-w-[90%] m-auto py-32 flex justify-center items-center flex-col gap-10'>
      <p className='text-center text-7xl font-Allura font-bold z-10'>Contact</p>
      <div className="flex flex-col w-[700px] max-w-[700px] m-auto gap-3">
        <input type="text" placeholder="Name" className="bg-transparent p-[10px] border-b-[1px]" onChange={(e) => setName(e.target.value)} />
        <input type="email" placeholder="Email"  className="bg-transparent p-[10px] border-b-[1px]" onChange={(e) => setEmail(e.target.value)} />
        <input type="text" placeholder="Subject"  className="bg-transparent p-[10px] border-b-[1px]" onChange={(e) => setSubject(e.target.value)} />
        <textarea name="" id="" cols={30} rows={10} placeholder="Message"  className="bg-transparent p-[10px] border-b-[1px]"  onChange={(e) => setMessage(e.target.value)} ></textarea>
        <button className="mt-5 p-3 bg-blue-900 hover:bg-blue-500" onClick={(e) => handleSubmit(e)}>Submit</button>
      </div>
    </div>
  )
}
export default Contact